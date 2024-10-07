import './App.css';
import UserContextProvider from './Context/userContextProvider'; // Importing the context provider to manage global user state
import Login from './Components/Login'; // Importing the Login component
import Profile from './Components/Profile'; // Importing the Profile component

function App() {

  return (

    <>

    {/* // Wrapping the application in UserContextProvider to provide access to the user state globally */}
    <UserContextProvider>
      <Login />
      {/* Displaying a greeting */}
      <h2>Hello</h2>
      
      {/* Login component - user can log in and update the user context */}

      <Profile />
      {/* Profile component - displays user profile if logged in by accessing the user context */}
    </UserContextProvider>
    </>

  );
}

export default App;
