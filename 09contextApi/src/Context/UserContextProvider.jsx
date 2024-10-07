import React from 'react';
import UserContext from './userContext';

// Creating a Context Provider component to manage user state and provide it to other components
const UserContextProvider = ({ children }) => {
    // The 'user' state will store user-related data (initially null)
    // 'setUser' is used to update the 'user' state
    const [user, setUser] = React.useState(null);

    return (
        // Wrapping 'children' components with UserContext.Provider
        // The value prop contains the user state and setUser function, making it accessible to all child components
        <UserContext.Provider value={{ user, setUser }}>
            {children} {/* Render children wrapped inside the Provider */}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
