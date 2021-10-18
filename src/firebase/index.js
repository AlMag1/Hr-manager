import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import { signInUser, signUpUser, signOutUser } from './auth';
import { addUser, addDocument, bulkdAddCities } from './create';
import { getDocument, getAllDocuments, getMultipleDocuments } from './read';
import { updateDocument } from './update';

// Your web app's Firebase configuration
initializeApp({
  apiKey: 'AIzaSyDEweDlfkJh2MiWDcRfYUuBn_yM-8EA5DU',
  authDomain: 'hr-manager-dd068.firebaseapp.com',
  projectId: 'hr-manager-dd068',
  storageBucket: 'hr-manager-dd068.appspot.com',
  messagingSenderId: '435911957151',
  appId: '1:435911957151:web:1aeb010bbdacbff5d560aa',
});

// Initialize Firebase
const db = getFirestore();

export {
  db,
  addDocument,
  updateDocument,
  bulkdAddCities,
  getDocument,
  getMultipleDocuments,
  getAllDocuments,
  addUser,
  signUpUser,
  signInUser,
  signOutUser,
};
