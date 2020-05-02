import firebase from '../../Config/Firebase'

const GetAuth = () => new Promise(resolve => {
    firebase
        .auth()
        .onAuthStateChanged(user => {
            resolve(user)
        })
})


export default GetAuth