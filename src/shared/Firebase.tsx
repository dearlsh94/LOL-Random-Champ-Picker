import firebase from "firebase";
import "firebase/storage";

import {fbConf} from "./FirebaseConf";

let database: firebase.database.Database;
let storage: firebase.storage.Storage;
let auth: firebase.auth.Auth;

/**
 * Function List
 * 
 * * export
 * initFirebase : Firebase object 생성
 * 
 */

// Create object for firebase handling
export const initFirebase = () => {
    return new Promise((resolve, reject) => {
        if (!firebase.apps.length) { //check already firebase run
            console.info("SET_FIREBASE");
            firebase.initializeApp(fbConf);
    
            database = firebase.database();
            storage = firebase.storage();
            auth = firebase.auth();
        }

        resolve(true);
    })
};