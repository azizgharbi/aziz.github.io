
import {databaseConfig} from "./firebase.config"

const database = databaseConfig.database()

const posts = database.ref('posts')

export{posts}