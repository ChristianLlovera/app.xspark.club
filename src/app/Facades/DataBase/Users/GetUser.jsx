import firebase from '../../../Config/Firebase'
import PayloadRow from '../../../Helpers/PayloadRow'

const GetUser = async id => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/users/${id}`)
    const response = await ref.get()
    return response.exists ? PayloadRow(response) : false
}

export default GetUser