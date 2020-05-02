import firebase from '../../../Config/Firebase'

const AddProfile = async (data) => {
    const connect = firebase.firestore()
    const ref = connect.collection(`/profiles`)
    const user = await ref.add({ ...data, role: 'user' })
    return user ? user.id : false
}

export default AddProfile