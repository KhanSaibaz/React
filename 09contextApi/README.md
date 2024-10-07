# Steps to Use Context in React

## 1. Create the Context

Use `React.createContext()` to create a context. This will be used to share data between components without passing props.

```javascript
// userContext.js
import React from 'react';

// Creating a context
const UserContext = React.createContext();

export default UserContext;


2. Create a Provider Component
Create a provider component that wraps around the components needing access to the context. This provider will pass the data and functions via Context.Provider.

// userContextProvider.js
import React, { useState } from 'react';
import UserContext from './userContext';

const UserContextProvider = ({ children }) => {
  // Create state to hold user information
  const [user, setUser] = useState(null);

  return (
    // Passing user data and setUser function to the context
    <UserContext.Provider value={{ user, setUser }}>
      {children} {/* Render all wrapped children */}
    </UserContext.Provider>
  );
};

export default UserContextProvider;



3. Wrap the Component Tree with the Provider
In your root component (typically App.js), wrap the components that need to access the context in the UserContextProvider.


// App.js
import './App.css';
import UserContextProvider from './Context/userContextProvider'; // Importing the provider
import Login from './Components/Login';
import Profile from './Components/Profile';

function App() {
  return (
    // Wrapping components in UserContextProvider for global access to user data
    <UserContextProvider>
      <h2>Hello</h2>
      <Login /> {/* Login component will update the user */}
      <Profile /> {/* Profile component will display the user */}
    </UserContextProvider>
  );
}

export default App;


4. Consume the Context in Child Components
To access the context in any child component, use the useContext hook with the context you created.

// Profile.jsx
import React, { useContext } from 'react';
import UserContext from '../Context/userContext'; // Import the context

const Profile = () => {
  // Use the context to access the user
  const { user } = useContext(UserContext);

  // If no user is logged in, display a message
  if (!user) {
    return <p>No user logged in</p>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.name}</p>
    </div>
  );
};

export default Profile;
