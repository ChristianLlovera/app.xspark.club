import firebase from '../../../Config/Firebase'

const AddUser = async (id, data) => {

    const connect = firebase.firestore()
    const ref = connect.collection("users").doc(id)
    const user = await ref.set({ role: 'user', ...data })
    return user ? id : false

}

export default AddUser