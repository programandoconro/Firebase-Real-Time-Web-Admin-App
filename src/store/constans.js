import  {auth,database,initializeApp} from 'firebase/'

const config = {
apiKey: "AIzaSyAewV4oxgwbq0r8ejPWif2_EnOw7LecebM",
    authDomain: "cactus-pro.firebaseapp.com",
    databaseURL: "https://cactus-pro.firebaseio.com",
    projectId: "cactus-pro",
    storageBucket: "cactus-pro.appspot.com",
    messagingSenderId: "16520205636",
    appId: "1:16520205636:web:f1407e1c4e27814b95b311",
    measurementId: "G-R44C467LQR"
}

initializeApp(config)

export const ref = database().ref()
export const firebaseAuth = auth

export const loginAuth = (email, password)=> {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}

