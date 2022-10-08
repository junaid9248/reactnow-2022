import React,{useContext, useEffect} from 'react'
import Contactcard from './contactcard';
import { ContactContext } from '../Context';
import { useNavigate } from 'react-router-dom';



function Contactlist() {
  
  const [contacts, setContacts]= useContext(ContactContext);
  const navigate=useNavigate();
  
  useEffect(()=>
  {const retrievedContacts= JSON.parse(localStorage.getItem('contacts'))  
  setContacts(retrievedContacts)},
  [])  
  
  
  const addnewcontact=()=>{
    navigate('/addcontact')
  };

  const localStoragekey= 'contacts';
  const deletecontactHandler = (id) =>{
    const updatedContacts= contacts.filter((contact)=>{
      return contact.id !== id
    })

    setContacts(updatedContacts)
    localStorage.setItem(localStoragekey,contacts)
  }


  return (

    <>
    <button onClick={addnewcontact}> Add new contact </button>
    
     <div className='container contact-list ' >
        { 
          contacts.map(contact=>(
            <Contactcard name={contact.name} number={contact.number} email={contact.email} key={contact.id} id={contact.id}
            delete={deletecontactHandler}
            />
          ))
        }    
    </div>

    </>
  )
}

export default Contactlist