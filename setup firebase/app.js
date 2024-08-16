
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDlwhX4eNkdzf7E69MynVk0I4JpGvwVADQ",
    authDomain: "my-first-project-d261e.firebaseapp.com",
    projectId: "my-first-project-d261e",
    storageBucket: "my-first-project-d261e.appspot.com",
    messagingSenderId: "392372615722",
    appId: "1:392372615722:web:ddc5c367d69ad917252153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


console.log(app);
console.log(db);



var addNote = document.getElementById("addNote").addEventListener("click", addNoteFn)

async function addNoteFn() {
    var noteinput = document.getElementById("noteInput").value
    console.log(noteinput)

    var todoobj = {
        todo: noteinput
    }

    var docRef = await addDoc(collection(db, "todos"), todoobj)
    // console.log(docRef) 

    var listui = `
        <div class="card">
        <div class="card-header">
            Note
        </div>
        <div class="card-body">
            <h5 class="card-title">  ${noteInput}  </h5>
            <div class="mt-3  buttonContainer">
                <button class="btn btn-danger">Delete </button>
            </div>
            </div>
        </div>
     `

     console.log(listui)
     parent.innerHTML += listui;
}


window.addEventListener("load", pageLoad)

async function pageLoad() {
    console.log("load")
    var tempArr = []
    const querySnapshot = await getDocs(collection(db, "todos"));
    querySnapshot.forEach(function (doc) {
        // console.log(doc.data())
        tempArr.push(doc.data())
    });

    // console.log("tempArr", tempArr)
    for (var i = 0; i < tempArr.length; i++) {
        console.log(tempArr[i].todo)

        parent.innerHTML += `<div class="card">
        <div class="card-header">
            Note
        </div>
        <div class="card-body">
            <h5 class="card-title">  ${tempArr[i].todo}  </h5>
            <div class="mt-3  buttonContainer">

                <button class="btn btn-danger">Delete </button>
            </div>
    
        </div>
    </div>`
    }
}

