import firebase from '../../Config/Firebase'

const GetCredential = (email, password) =>
    firebase.auth.EmailAuthProvider.credential(email, password)

export default GetCredential