import firebase from '../Config/Firebase'

firebase.firestore()
    .settings({ cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED })

firebase.firestore()
    .enablePersistence()
    .catch(err => console.error(err))

const connect = firebase.firestore()

const dataBase = () => {

    const factory = {
        sort: { field: '', type: '' },
        lazy: { limit: '', last: '' },
        collection: '',
        Timestamp: data => firebase.firestore.Timestamp.fromDate(data)
    }

    factory.setCollection = data => {
        factory.cancel = false
        factory.collection = data
        return factory
    }

    factory.orderBy = data => {
        const { field, type } = data
        field ? factory.sort.field = field : null
        type ? factory.sort.type = type : null
        return factory
    }

    factory.orderByReset = () => {
        factory.sort.field = ''
        factory.sort.type = ''
        return factory
    }

    factory.limit = data => {
        const { limit, last } = data
        limit ? factory.lazy.limit = limit : null
        last ? factory.lazy.last = last : null
        return factory
    }

    factory.limitReset = () => {
        factory.lazy.limit = ''
        factory.lazy.last = ''
        return factory
    }

    factory.list = async () => {

        const payload = arr => {
            const result = []
            arr.forEach(doc => {
                const data = doc.data()
                const obj = { id: doc.id, ...data }
                result.push(obj)
            })
            return result
        }

        let refCollection = connect.collection(factory.collection)

        if (factory.sort.field) {
            refCollection = refCollection
                .orderBy(factory.sort.field, factory.sort.type)
        }

        if (factory.lazy.limit) {
            refCollection = refCollection
                .limit(factory.lazy.limit)

            if (factory.lazy.last) {
                refCollection = refCollection
                    .startAfter(factory.lazy.last)
            }
        }

        const response = await refCollection.get()
        const lastVisible = response.docs[response.docs.length - 1]

        return {
            last: lastVisible,
            payload: payload(response),
            snapshot: func => {
                const unregister = refCollection.onSnapshot(res => func(payload(res), unregister))
            }
        }

    }

    factory.get = async id => {

        const payload = doc => {
            let result = { exists: false, id: id }
            if (doc.exists) {
                const data = doc.data()
                result = { exists: true, id: id, ...data }
            }
            return result
        }

        const refCollection = connect.doc(`${factory.collection}/${id}`)
        const response = await refCollection.get()

        return {
            payload: payload(response),
            snapshot: func => {
                const unregister = refCollection.onSnapshot(doc => func(payload(doc), unregister)
                )
            }
        }

    }

    factory.update = async (id, data) => {
        const refCollection = connect.doc(`${factory.collection}/${id}`)
        await refCollection.update(data)
        return true
    }

    factory.create = async data => {
        const refCollection = connect.collection(`${factory.collection}`)
        const response = await refCollection.add(data)
        const payload = { exists: true, id: response.id, ...data }
        return payload
    }

    factory.delete = async id => {
        const refCollection = connect.doc(`${factory.collection}/${id}`)
        await refCollection.delete()
        return true
    }

    return factory
}

export default dataBase