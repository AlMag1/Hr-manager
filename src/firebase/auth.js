import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const signUpUser = () => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, 'aris@test.com', '123456')
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      console.log(user, 'User');
      // ...
    })
    .catch(error => {
      console.log(error);
      // ..
    });
};

const signInUser = (email, password) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('token', `Bearer ${user.accessToken}`);
      window.location.reload();
      console.log(user, 'Signed in User');
      // ...
    })
    .catch(error => {
      console.log(error);
    });
};

const signOutUser = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.removeItem('token');
      window.location.reload();
      // Sign-out successful.
    })
    .catch(error => {
      // An error happened.
    });
};

export { signInUser, signUpUser, signOutUser };
