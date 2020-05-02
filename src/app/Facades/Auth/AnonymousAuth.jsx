import firebase from '../../Config/Firebase'

const AnonymousAuth = async () => {

    const response = await firebase.auth().signInAnonymously()
    return response ? response.user : false

}

export default AnonymousAuth