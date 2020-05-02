import firebase from '../../Config/Firebase'

const SingOut = async () => {
    const response = await firebase.auth().signOut()
    return response ? response : false
}

export default SingOut