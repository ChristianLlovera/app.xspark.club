import firebase from '../../../Config/Firebase'

const GetRole = async user => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/users/${user}`)
    const response = await ref.get()
    return response.exists ? response.data().role : false
}

export default GetRole