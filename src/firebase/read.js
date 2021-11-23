import { db } from './';
import {
  doc,
  getDoc,
  query,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';

const getDocument = async () => {
  const docRef = doc(db, 'users', 'P9a2gF4dkDduT39uQKUWoMLJtCD2');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }
};

const getMultipleDocuments = async () => {
  const q = query(collection(db, 'cities'), where('capital', '==', true));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
};

const getAllDocuments = async () => {
  const querySnapshot = await getDocs(collection(db, 'cities'));
  querySnapshot.forEach(doc => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
  });
};

export { getDocument, getAllDocuments, getMultipleDocuments };
