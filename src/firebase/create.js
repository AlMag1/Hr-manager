import { addDoc, setDoc, doc, collection } from 'firebase/firestore';
import { db } from './';

const addUser = async (collection, documentId, name, lastname, sex) => {
  await setDoc(doc(db, collection, documentId), {
    name,
    lastname,
    sex,
    admin: true, // @todo Need to be changed while create user ui is ready.
  });
};

const addDocument = async () => {
  // addDoc auto-generates id for document, //setDoc you must specify id for document
  await addDoc(collection(db, 'cities'), {
    name: 'Tokyo',
    country: 'Japan',
  });

  //   await setDoc(doc(db, "cities", "LA"), {
  //     name: "Los Angeles",
  //     state: "CA",
  //     country: "USA",
  //   });
};

const bulkdAddCities = async () => {
  const citiesRef = collection(db, 'cities');
  await setDoc(doc(citiesRef, 'SF'), {
    name: 'San Francisco',
    state: 'CA',
    country: 'USA',
    capital: false,
    population: 860000,
    regions: ['west_coast', 'norcal'],
  });
  await setDoc(doc(citiesRef, 'LA'), {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    capital: false,
    population: 3900000,
    regions: ['west_coast', 'socal'],
  });
  await setDoc(doc(citiesRef, 'DC'), {
    name: 'Washington, D.C.',
    state: null,
    country: 'USA',
    capital: true,
    population: 680000,
    regions: ['east_coast'],
  });
  await setDoc(doc(citiesRef, 'TOK'), {
    name: 'Tokyo',
    state: null,
    country: 'Japan',
    capital: true,
    population: 9000000,
    regions: ['kanto', 'honshu'],
  });
  await setDoc(doc(citiesRef, 'BJ'), {
    name: 'Beijing',
    state: null,
    country: 'China',
    capital: true,
    population: 21500000,
    regions: ['jingjinji', 'hebei'],
  });
};

export { addUser, addDocument, bulkdAddCities };
