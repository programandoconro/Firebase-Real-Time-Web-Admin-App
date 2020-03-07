import  {auth,database,initializeApp} from 'firebase/'

const config = {
apiKey: "xxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxxxxxx",
    databaseURL: "xxxxxxxxxxxxxxx",
    projectId: "xxxxxxxxxxx",
    storageBucket: "xxxxxxxxxxxx",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "xxxxxxxxxxxxxx",
    measurementId: "xxxxxxxxxxx"
}

initializeApp(config)

export const ref = database().ref()
export const firebaseAuth = auth

export const loginAuth = (email, password)=> {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}

