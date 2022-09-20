import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.4/firebase-app.js";
import { getDatabase, ref, set, onValue }  from "https://www.gstatic.com/firebasejs/9.9.4/firebase-database.js";

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

document.getElementById("form").addEventListener("submit", writeUserData);

function writeUserData(nameField, ageField) {
const db = getDatabase();
const reference = ref(db, 'users/')
set(reference, {
     nameField: document.getElementById("nameField").value,
    ageField: document.getElementById("ageField").value

});
console.log('form data:', nameField, ageField);

}

