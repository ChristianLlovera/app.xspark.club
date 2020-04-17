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
const db = { profiles: {}, format: {} }

db.format.date = data => {
    return firebase.firestore.Timestamp.fromDate(data)
}

db.profiles.orderBy = obj => {
    db.profiles.sort = obj
    return db.profiles
}

db.profiles.limit = obj => {
    db.profiles.lazy = obj
    return db.profiles
}

db.profiles.list = async () => {

    const payload = arr => {
        const result = []

        arr.forEach(doc => {
            const data = doc.data()
            const obj = { id: doc.id, ...data }
            result.push(obj)
        })

        return result
    }

    let refCollection = connect.collection("profiles")

    if (db.profiles.sort) {
        const sort = db.profiles.sort
        refCollection = refCollection
            .orderBy(sort.field, sort.type)
    }

    if (db.profiles.lazy) {
        const lazy = db.profiles.lazy
        if (lazy.last) {
            refCollection = refCollection
                .startAfter(lazy.last)
        }
        if (lazy.limit) {
            refCollection = refCollection
                .limit(lazy.limit)
        }
    }

    const response = await refCollection.get()

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


db.profiles.get = async id => {

    const payload = doc => {

        let result = { exists: false, id: id }

        if (doc.exists) {
            const data = doc.data()
            result = { exists: true, id: id, ...data }
        }

        return result
    }

    const refCollection = connect.doc(`profiles/${id}`)
    const response = await refCollection.get()


    return {
        payload: payload(response),
        snapshot: func => {
            const unregister = refCollection.onSnapshot(doc =>
                func(payload(doc), unregister)
            )
        }
    }

}

db.profiles.update = async (id, data) => {
    const refCollection = connect.doc(`profiles/${id}`)
    await refCollection.update(data)
    return true
}

db.profiles.create = async data => {
    const refCollection = connect.collection(`profiles`)
    const response = await refCollection.add(data)
    const payload = { exists: true, id: response.id, ...data }
    return payload
}

db.profiles.delete = async id => {
    const refCollection = connect.doc(`profiles/${id}`)
    await refCollection.delete()
    return true
}


export default db