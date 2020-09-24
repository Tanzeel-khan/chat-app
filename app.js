let signup = () =>{
    let email = document.getElementById("username")
    let pass = document.getElementById("password")
    firebase.auth().createUserWithEmailAndPassword(email.value, pass.value)
    .then((result)=>{
        console.log(result)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });email-password.html
}
 // signin 

 let signin = () =>{
    let email = document.getElementById("username")
    let pass = document.getElementById("password")
    firebase.auth().signInWithEmailAndPassword(email.value, pass.value)
    .then((result)=>{
        alert("user login sucessfully")
        window.location.replace("chatroom.html")
        console.log(result)
    })
    
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
      });email-password.html
}

const facebook_login = () =>{
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    alert("user login sucessfully")
    window.location.replace("chatroom.html")
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
      var email = error.email;
    var credential = error.credential;
    alert(errorMessage);
  });

}
 let google_login = () =>{
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;
    alert("user login sucessfully")
    window.location.replace("chatroom.html")
  })
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    alert(errorMessage);
  });
 }

