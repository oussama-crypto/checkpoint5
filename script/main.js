document.querySelector("#identity").addEventListener("submit", function(e) {
  e.preventDefault();
  submitProduct();
});
var firebaseConfig = {
  apiKey: "AIzaSyAgim2tf8pUot0-9-vsleYYzVxVDOWm3K0",
  authDomain: "checkpoint5.firebaseapp.com",
  databaseURL: "https://checkpoint5.firebaseio.com",
  projectId: "checkpoint5",
  storageBucket: "",
  messagingSenderId: "920774556701",
  appId: "1:920774556701:web:6a5c7476fabf42d2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 1 import librairies

//2 create database var*
let database = firebase.database();
//3 set a reference
let ref = database.ref("products");
function submitProduct() {
  //4 prepare data
  let data = {
    name: document.getElementById("your-name").value,
    email: document.getElementById("e-mail").value,
    phonenumber: document.getElementById("phone-number").value,
    web: document.getElementById("track").value
  };
  //5 upoad data
  ref.push(data);
}
