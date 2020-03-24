import firebase from 'firebase/app'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: 'AIzaSyCkN91lXYcAsFA4u7fA35JpC4RjJ0MRryE',
    authDomain: 'xsparkapp.firebaseapp.com',
    projectId: 'xsparkapp'
})

firebase.firestore().settings({
    cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
})

firebase.firestore().enablePersistence()
    .catch(function (err) {
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
const db = { profiles: {} }


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

    const refProfile = connect.collection("profiles")
    const response = await refProfile.get()

    return {
        payload: payload(response),
        snapshot: setData =>
            refProfile.onSnapshot(res =>
                setData(payload(res))
            )
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

    const refProfile = connect.doc(`profiles/${id}`)
    const response = await refProfile.get()


    return {
        payload: payload(response),
        snapshot: setData =>
            refProfile.onSnapshot(doc =>
                setData(payload(doc))
            )
    }

}

db.profiles.update = async (id, data) => {
    const refProfile = connect.doc(`profiles/${id}`)
    await refProfile.update(data)
    return true
}

db.profiles.create = async data => {
    const refProfile = connect.collection(`profiles`)
    const response = await refProfile.add(data)

    const payload = { exists: true, id: response.id, ...data }

    return payload
}

db.profiles.delete = async id => {
    const refProfile = connect.doc(`profiles/${id}`)
    await refProfile.delete()
    return true
}


export default db