import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const signUpUser = (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed Up
      const user = userCredential.user;
      localStorage.setItem('token', `Bearer ${user.accessToken}`);
      window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
};

const signInUser = async ({ email, password }) => {
  const auth = getAuth();
  const user = await signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('token', `Bearer ${user.accessToken}`);
      return user;
      // window.location.reload();
    })
    .catch(error => {
      console.log(error);
    });
  return user;
};

const signOutUser = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      localStorage.removeItem('token');
      // window.location.reload();
      // Sign-out successful.
    })
    .catch(error => {
      console.log(error);
    });
};

export { signInUser, signUpUser, signOutUser };
