import firebase from '../../../Config/Firebase'

const DelProfile = async (id) => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/profiles/${id}`)
    await ref.delete()
    return true
}

export default DelProfile