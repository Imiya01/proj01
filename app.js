// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set, onValue }  from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
console.log('firebase is working');
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPAX2TtBekrmRhw5Bl6MVW_JDJxIosgIU",
  authDomain: "boilerplate01.firebaseapp.com",
  databaseURL: "https://boilerplate01-default-rtdb.firebaseio.com",
  projectId: "boilerplate01",
  storageBucket: "boilerplate01.appspot.com",
  messagingSenderId: "273203137658",
  appId: "1:273203137658:web:3798ffac3083f2285f3fc3"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
console.log('firebase app:', app);

// import { getDatabase, ref, set } from "firebase/database";

function writeUserData(name, email) {
  const db = getDatabase();
  const reference = ref(db, 'users/')
  set(reference, {
    username: name,
    email: email
  });
}

writeUserData("Testname5", "testudo@test.com")

//READ DATA

// import { getDatabase, ref, onValue} from "firebase/database";

const name = "Testname5";

const userRef = ref(db, 'users/');
onValue(userRef, (snapshot) => {
  const data = snapshot.val();
 // updateStarCount(postElement, data);
 console.log('User data', data)
});

console.log('User data', data)
