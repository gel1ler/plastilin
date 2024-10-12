import { initializeApp } from "firebase/app"
import { getDatabase, ref, set, update, child, get, remove } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyBzUnGUj-YWWIt67mhnqaStjRQDpX2XBqk",
    authDomain: "plastilin-b7867.firebaseapp.com",
    databaseURL: "https://plastilin-b7867-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "plastilin-b7867",
    storageBucket: "plastilin-b7867.appspot.com",
    messagingSenderId: "26760354406",
    appId: "1:26760354406:web:9f918f9d19950e7c222ba7",
    measurementId: "G-CHVJX8GMWS"
}

initializeApp(firebaseConfig)

const db = getDatabase()

export async function getParentByPhoneNumber(phoneNumber) {
    const dbRef = ref(db)
    console.log(phoneNumber)
    const snapshot = await get(child(dbRef, `parents/${phoneNumber}`))

    if (snapshot.exists()) {
        const parent = snapshot.val()
        return parent
    } else {
        return []
    }
}