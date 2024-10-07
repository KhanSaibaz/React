import React from 'react';

// Create a Context using React's Context API
// The Context API allows you to share data (like state) globally across the component tree
// without having to pass props manually at every level.

// Creating a UserContext object
// This will be used to provide and consume the context value in the component tree.
const UserContext = React.createContext();

export default UserContext;
