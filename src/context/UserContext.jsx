import React, { createContext, useState } from 'react';
import es from 'date-fns/locale/es';

export const UserContext = createContext();

const UserProvider = ({children}) => {

    const { format } = require("date-fns");
    const [date, setDate] = useState(new Date());
  
    const handleChange = (newDate) => {
        setDate(newDate);
    };

    const [formData, setFormData] = useState({
        dayName: format(date, "EEEE", {locale: es}),
        dayNum: format(date, "dd"),
        month: format(date, "MMMM", {locale: es}),
        year: format(date, "yyyy"),
        hourBegin: '00',
        hourEnd: '00',
        place: '',
        address: '',
    });

    return (
        <UserContext.Provider value={{date, handleChange, formData, setFormData}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider