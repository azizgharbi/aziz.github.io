const firebase = require('firebase');

const config = {
  // your firebase config
};

firebase.initializeApp(config)

firebase.auth().createUserWithEmailAndPassword("med.aziz.gharbii@gmail.com", "password").catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode + " : " +errorMessage)
});