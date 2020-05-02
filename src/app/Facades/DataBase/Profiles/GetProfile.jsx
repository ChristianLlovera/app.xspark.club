import firebase from '../../../Config/Firebase'
import PayloadRow from '../../../Helpers/PayloadRow'

const GetProfile = async id => {
    const connect = firebase.firestore()
    const ref = connect.doc(`/profiles/${id}`)
    const response = await ref.get()
    return response.exists ? PayloadRow(response) : false
}

export default GetProfile