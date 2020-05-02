import firebase from '../../../Config/Firebase'

const SetProfile = async (id, data) => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/profiles/${id}`)
    await ref.update(data)
    return true
}

export default SetProfile