import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'

firebase.initializeApp({
    apiKey: 'AIzaSyCkN91lXYcAsFA4u7fA35JpC4RjJ0MRryE',
    authDomain: 'xsparkapp.firebaseapp.com',
    projectId: 'xsparkapp'
})


export default firebase