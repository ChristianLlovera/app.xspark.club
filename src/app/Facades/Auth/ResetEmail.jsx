import firebase from '../../Config/Firebase'


const ResetEmail = async email => {
    const response = await firebase.auth().sendPasswordResetEmail(email)
    return response ? response : false
}

export default ResetEmail