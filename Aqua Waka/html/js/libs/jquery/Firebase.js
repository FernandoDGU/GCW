
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA5Ay83O9rEXQVvduumwRg67HLoxZrw0fw",
    authDomain: "aquawaka.firebaseapp.com",
    databaseURL: "https://aquawaka-default-rtdb.firebaseio.com",
    projectId: "aquawaka",
    storageBucket: "aquawaka.appspot.com",
    messagingSenderId: "690754163121",
    appId: "1:690754163121:web:6b23c63e0707d32b03ad90"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


function writeData(){
    firebase.database().ref("User").push({
        name: document.getElementById("usernameinput").value,
        // score: puntos
    });
    var nombre =document.getElementById("usernameinput").value;
    localStorage.setItem('Usuario', nombre);
    // $('.product-list').append(nombre + "----" + puntos);
}

//firebase.analytics();
// function getData(){
//   firebase.database().ref('User').once('value', function(snapshot){
//       snapshot.forEach(function(childSnapshot)
//       {
//           var childKey = childSnapshot.key;
//           var childData = childSnapshot.val();
//           //document.getElementById("data").innerHTML = childData['name']+"----" childData['score'];
//           $('.product-list').append("<p>"+childData['name']+"----"+ childData['score']+"</p>");
//       });
//   });
// }
// function escribirForm() {

// var nombree = localStorage.getItem('Usuario');
// document.getElementById('txtName').innerHTML=nombree;
// }
