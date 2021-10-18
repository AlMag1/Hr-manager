import { db } from './';
import { doc, updateDoc } from 'firebase/firestore';

const updateDocument = async () => {
  const tokeyRef = doc(db, 'cities', 'LA');
  await updateDoc(tokeyRef, { capital: true });
};

export { updateDocument };
