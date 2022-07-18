import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
    
    const [formData, setFormData] = useState({
        date: new Date(),
        hourBegin: '00',
        hourEnd: '00',
        place: '',
        address: '',
    });

    return (
        <UserContext.Provider value={{formData, setFormData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider