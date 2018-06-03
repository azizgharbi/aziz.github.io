import firebase from 'firebase'

const config = {
//put your config here.
};

const databaseConfig = firebase.initializeApp(config)

export {
    databaseConfig
}
