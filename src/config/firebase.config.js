import firebase from 'firebase'


const config = {
    
};

const databaseConfig = firebase.initializeApp(config)

export{
    databaseConfig
}