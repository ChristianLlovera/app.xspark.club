import firebase from '../Config/Firebase'

firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
})

firebase.firestore().enablePersistence()
    .catch(err => {
        if (err.code == 'failed-precondition') {
            // Multiple tabs open, persistence can only be enabled
            // in one tab at a a time.
            // ...
        } else if (err.code == 'unimplemented') {
            // The current browser does not support all of the
            // features required to enable persistence
            // ...
        }
    })

const connect = firebase.firestore()

const dataBase = () => {

    const obj = {
        sort: { field: '', type: '' },
        lazy: { limit: '', last: '' },
        cancel: false,
        collection: '',
        Timestamp: data => firebase.firestore.Timestamp.fromDate(data)
    }

    obj.reject = () => {
        obj.cancel = true
        return obj
    }

    obj.setCollection = data => {
        obj.cancel = false
        obj.collection = data
        return obj
    }

    obj.orderBy = data => {

        const { field, type } = data

        field ? obj.sort.field = field : null
        type ? obj.sort.type = type : null
        return obj

    }

    obj.orderByReset = () => {
        obj.sort.field = ''
        obj.sort.type = ''
        return obj
    }

    obj.limit = data => {

        const { limit, last } = data

        limit ? obj.lazy.limit = limit : null
        last ? obj.lazy.last = last : null
        return obj

    }

    obj.limitReset = () => {

        obj.lazy.limit = ''
        obj.lazy.last = ''
        return obj

    }

    obj.list = async () => {

        const payload = arr => {
            const result = []

            arr.forEach(doc => {
                const data = doc.data()
                const obj = { id: doc.id, ...data }
                result.push(obj)
            })

            return result
        }

        let refCollection = connect.collection(obj.collection)

        if (obj.sort.field) {
            refCollection = refCollection
                .orderBy(obj.sort.field, obj.sort.type)
        }

        if (obj.lazy.limit) {

            refCollection = refCollection
                .limit(obj.lazy.limit)

            if (obj.lazy.last) {
                refCollection = refCollection
                    .startAfter(obj.lazy.last)
            }

        }

        const response = await refCollection.get()

        if (obj.cancel) {
            await Promise.reject('reject promise list')
        }

        const lastVisible = response.docs[response.docs.length - 1]

        return {
            last: lastVisible,
            payload: payload(response),
            snapshot: func => {
                const unregister = refCollection.onSnapshot(res =>
                    func(payload(res), unregister)
                )
            }
        }

    }

    obj.get = async id => {

        const payload = doc => {

            let result = { exists: false, id: id }

            if (doc.exists) {
                const data = doc.data()
                result = { exists: true, id: id, ...data }
            }

            return result
        }

        const refCollection = connect.doc(`${obj.collection}/${id}`)
        const response = await refCollection.get()

        if (obj.cancel) {
            await Promise.reject('reject promise get')
        }

        return {
            payload: payload(response),
            snapshot: func => {
                const unregister = refCollection.onSnapshot(doc =>
                    func(payload(doc), unregister)
                )
            }
        }

    }

    obj.update = async (id, data) => {
        const refCollection = connect.doc(`${obj.collection}/${id}`)
        await refCollection.update(data)
        return true
    }

    obj.create = async data => {
        const refCollection = connect.collection(`${obj.collection}`)
        const response = await refCollection.add(data)
        const payload = { exists: true, id: response.id, ...data }
        return payload
    }

    obj.delete = async id => {
        const refCollection = connect.doc(`${obj.collection}/${id}`)
        await refCollection.delete()
        return true
    }

    return obj
}





export default dataBase