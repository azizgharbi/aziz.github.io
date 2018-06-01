import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAxGipdc4vFGs0352cow-QZ9K4nrOmSolQ",
  authDomain: "portfolio-6105d.firebaseapp.com",
  databaseURL: "https://portfolio-6105d.firebaseio.com",
  projectId: "portfolio-6105d",
  storageBucket: "portfolio-6105d.appspot.com",
  messagingSenderId: "68792222551"
};

firebase.initializeApp(config)

const database = firebase.database()

const posts = database.ref('posts')

export{posts}