import firebase from '../../../Config/Firebase'
import PayloadList from '../../../Helpers/PayloadList'

const GetUserList = async () => {
    const connect = firebase.firestore()
    const ref = connect.collection(`/users`)
    const response = await ref.get()
    return !response.empty ? PayloadList(response.docs) : false
}

export default GetUserList