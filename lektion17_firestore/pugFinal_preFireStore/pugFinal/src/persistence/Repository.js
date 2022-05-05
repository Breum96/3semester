import {v4 as uuidV4} from 'uuid'
import User from "../domain/User.js";
import admin from "firebase-admin"
import serviceAccount from "./firestoreKey.js"
import Credentials from "../domain/Credentials.js";



class Repository {
    #db

    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        this.#db = admin.firestore()
    }

    async createUser(credentials) {
        const data = {...credentials.toPlain(), created: new Date()}
        const userRef = this.#db.collection('Users').doc();
        await userRef.set(data)
        const userObject = await userRef.get()
        const userData = userObject.data()
        return new User(userRef.id, new Credentials(userData.username, userData.password), new Date(userData.created))

    }

    async getUserByUserName(username) {
        const querySnapshot = await this.#db.collection('Users')
            .where('username', '==', username)
            .get()
        const docs = querySnapshot.docs
        if (docs.length > 1) {
            throw new Error('Data inconsistency, several users with username ' + username)
        }
        if (docs.length === 1){
            const data = docs[0].data()
            return new User(docs[0].id, new Credentials(data.username, data.password), new Date(data.created))
        }

    }
}

export default Repository