import firebase from '../../../Config/Firebase'

const DelUser = async (id) => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/users/${id}`)
    await ref.delete()
    return true
}

export default DelUser