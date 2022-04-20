import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCoP5Mb169P738RyoZu6951xDtB8aTHYBc",
    authDomain: "react-redux-df888.firebaseapp.com",
    databaseURL: "https://react-redux-df888-default-rtdb.firebaseio.com",
    projectId: "react-redux-df888",
    storageBucket: "react-redux-df888.appspot.com",
    messagingSenderId: "588323277892",
    appId: "1:588323277892:web:3be8a3878fedc8806d4011"
};
// const hash_config= {
//   algorithm: SCRYPT,
//       base64_signer_key: Cqv+PTBUIkXXcsGtoTxUnnfCVCJmaD739QaWvpBR1Pcu9WEcDR7QnFBNuQF/4HcKjUnk7DQKBq7nWHHsVe4HMQ==,
//       base64_salt_separator: Bw==,
//       rounds: 8,
//       mem_cost: 14,
// }

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const storage =getStorage(app);
const auth = getAuth(app)

export {storage}
export {auth }
