import firebase from '../../Config/Firebase'

const SingIn = async (email, pass) => {

    const response = await firebase.auth().signInWithEmailAndPassword(email, pass)
    return response ? response.user : false

}

export default SingIn
