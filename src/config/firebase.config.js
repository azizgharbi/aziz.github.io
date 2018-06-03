import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAxGipdc4vFGs0352cow-QZ9K4nrOmSolQ",
  authDomain: "portfolio-6105d.firebaseapp.com",
  databaseURL: "https://portfolio-6105d.firebaseio.com",
  projectId: "portfolio-6105d",
  storageBucket: "portfolio-6105d.appspot.com",
  messagingSenderId: "68792222551"
};

const databaseConfig = firebase.initializeApp(config)

export {
    databaseConfig
}
