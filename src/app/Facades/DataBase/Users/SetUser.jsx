import firebase from '../../../Config/Firebase'

const SetUser = async (id, data) => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/users/${id}`)
    await ref.update(data)
    return true
}

export default SetUser