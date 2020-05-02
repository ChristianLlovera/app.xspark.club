import firebase from '../../Config/Firebase'

const SingUp = async (email, pass) => {

    const response = await firebase.auth().createUserWithEmailAndPassword(email, pass)
    return response ? response.user.uid : false

}

export default SingUp