import  {auth,database,initializeApp} from 'firebase/'

const config = {
apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
}

initializeApp(config)

export const ref = database().ref()
export const firebaseAuth = auth

export const loginAuth = (email, password)=> {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}

