import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
  Link,
  Outlet,
} from 'react-router-dom';
import { Home, Landing } from 'views';
import { signInUser, signOutUser } from 'firebase';

let AuthContext = React.createContext(null);

export function useAuth() {
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

function AuthStatus() {
  let auth = useAuth();
  let navigate = useNavigate();

  if (!auth.user) {
    return <p>You are not logged in.</p>;
  }

  return (
    <p>
      Welcome user
      <button
        onClick={() => {
          auth.signout(() => navigate('/'));
        }}
      >
        Sign out
      </button>
    </p>
  );
}

function Layout() {
  return (
    <div id="layout">
      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/home">Home Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}

function PublicPage() {
  return <h3>Public</h3>;
}

function RequireAuth({ children }) {
  const auth = useAuth();
  const token = localStorage.getItem('token');
  console.log(auth, 'Auth');
  console.log(token, 'token');
  const location = useLocation();
  const isSignedIn = auth.user || token;

  if (!isSignedIn) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}

const AppRouter = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<PublicPage />} />
            <Route path="/login" element={<Landing />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRouter;
