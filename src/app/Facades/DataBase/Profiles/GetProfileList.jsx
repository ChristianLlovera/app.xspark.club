import firebase from '../../../Config/Firebase'
import PayloadList from '../../../Helpers/PayloadList'

const GetProfileList = async () => {
    const connect = firebase.firestore()
    const ref = connect.collection(`/profiles`)
    const response = await ref.get()
    return !response.empty ? PayloadList(response.docs) : false
}

export default GetProfileList