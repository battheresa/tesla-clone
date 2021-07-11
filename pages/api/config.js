import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGE_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

function initFirebase() {
    if (!firebase.apps.length) {
        try {
            firebase.initializeApp(firebaseConfig);
            console.log('Firebase initialized successfully.');
        }
        catch (error) {
            console.log('Firebase initialized failed: ', error);
        }
    }
};

export function initFirestore() {
    initFirebase();
    return firebase.firestore();
};

export function initStorage() {
    initFirebase();
    return firebase.storage();
};

export default initFirebase;