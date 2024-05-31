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
    const snapshot = await get(child(dbRef, `parents/${phoneNumber}`))

    if (snapshot.exists()) {
        const parents = snapshot.val()
        return lesson
    } else {
        return []
    }
}

// function compare(a, b) {
//     if (a.timeFrom.slice(0, 2) < b.timeFrom.slice(0, 2)) {
//         return -1;
//     }
//     if (a.timeFrom.slice(0, 2) > b.timeFrom.slice(0, 2)) {
//         return 1;
//     }
//     return 0;
// }

// export async function getLessons() {
//     const dbRef = ref(db)
//     const snapshot = await get(child(dbRef, "lessons"))

//     if (snapshot.exists()) {
//         const lessons = snapshot.val()

//         lessons.forEach(day => {
//             day.sort(compare)
//         })

//         return lessons
//     } else {
//         return []
//     }
// }

// export async function getLesson(id) {
//     const dbRef = ref(db)
//     const snapshot = await get(child(dbRef, `lessons/${id}`))


//     if (snapshot.exists()) {
//         const lesson = snapshot.val()
//         return lesson
//     } else {
//         return []
//     }
// }

// export async function createLesson(lessonData, day) {
//     let id
//     try {
//         const lessons = await getLessons()
//         const a = lessons[day]
//         id = a[a.length - 1].id + 1
//     }
//     catch (err) {
//         id = 0
//     }

//     const reference = ref(db, 'lessons/' + day + '/' + id)

//     set(reference, {
//         id,
//         ...lessonData
//     }).then(() => console.log('succ')).catch(err => console.log(err))
// }

// export async function changelesson(id, lessonData, day) {
//     const reference = ref(db, 'lessons/' + day + '/' + id)

//     update(reference, {
//         id,
//         ...lessonData
//     }).then(() => console.log('succ')).catch(err => console.log(err))
// }

// export async function deleteLesson(id) {
//     try {
//         await remove(ref(db, 'lessons/' + id)).
//             then(() => 'success')
//     }
//     catch (err) {
//         console.log(err)
//     }
// }