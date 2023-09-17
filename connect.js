
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const database = firebase.database();

signUp.addEventListener('click',(e) =>{
 e.preventDefault();

 database.ref("/usres").set({
     username: username.value,
     email: email.value,
     password: password.value

 });

});
