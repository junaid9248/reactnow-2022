import React, { useState, createContext} from 'react'

export const ContactContext= createContext();

export const Contactprovider = (props) =>{
    const [contacts,setContacts]=useState([]);

    return (
    <ContactContext.Provider value={[contacts,setContacts]} > 
        {props.children}
    </ContactContext.Provider>
  
 );
}
export default Contactprovider; 