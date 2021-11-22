import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { signInUser, signOutUser } from 'firebase';

let AuthContext = React.createContext(null);

function useAuth() {
  return React.useContext(AuthContext);
}

function AuthProvider({ children }) {
  let [user, setUser] = React.useState(null);

  let signin = async ({ payload, callback }) => {
    const { email, password } = payload;
    const usr = await signInUser({ email, password });
    setUser(usr);
    callback();
  };

  let signout = () => signOutUser();

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function RequireAuth({ children }) {
  const auth = useAuth();
  const token = localStorage.getItem('token');
  const location = useLocation();
  const isSignedIn = auth.user || token;

  if (!isSignedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
}

export { useAuth, AuthProvider, RequireAuth };
