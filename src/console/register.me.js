const firebase = require('firebase');

const config = {
  // your firebase config
};

var Args = process.argv.splice(2);

if (Args.length > 2){
  const err = new Error('please passe only an email and a password');
  console.error(err.message);
  return;
}

firebase.initializeApp(config)

firebase.auth().createUserWithEmailAndPassword(Args[0], Args[1]).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode + " : " +errorMessage)
});