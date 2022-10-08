import React,{useContext, useState, useEffect} from 'react' 
import 'bootstrap/dist/css/bootstrap.min.css';
import { ContactContext } from '../Context';
import { useNavigate} from 'react-router-dom';
import { v4 as uuid } from 'uuid'
import '../Styling/addcontact.css';


function Addcontact() {
  
  //Extracting the state from contextpage
  const [contacts, setContacts]= useContext(ContactContext);

  const [name, setName]=useState('');
  const [number, setNumber]=useState('');
  const [email, setEmail]=useState('');
  
  const long= uuid();
  const uniqueID=long.slice(0,8); 
  
  const navigateto=useNavigate();
  
  const nameUpdate=(e)=>{
    setName(e.target.value);
  };

  const numberUpdate=(e)=>{
    setNumber(e.target.value);
  };

  const emailUpdate=(e)=>{
    setEmail(e.target.value);
  };
  
  const addContact= (e)=>{
    e.preventDefault() ;
    setContacts(prevcontacts=> [...prevcontacts,{id: uniqueID ,name: name, number: number, email: email}])
  };
  
  const localStoragekey= 'contacts';


  useEffect(()=>{
    localStorage.setItem( localStoragekey , JSON.stringify(contacts))},
    [contacts])
  

  const opencontactlist = () => {
      navigateto('/contactlist');
  };

  return (
    <div className='container my-3 p-4 '>
      <h1 className='addcontact-heading container p-2 col-5 '> Add Contact </h1>

      <form className='contact-details' onSubmit={addContact}>
        
      <div className='contact-name'>  
          <h2> Name: </h2>
          <input type="text" placeholder='Please enter a valid name...' value={name} onChange={nameUpdate} />
      </div> 
      
      <div className="contact-number">
        <h2>Contact number: </h2>
        <input type="text" placeholder='Enter a valid contact number' value={number} onChange={numberUpdate} />
      </div>
      
      <div className="contact-email">
        <h2>E-mail address: </h2>
        <input type="email" placeholder='eg: m123@gmail.com' value={email} onChange={emailUpdate} /> 
      <br />
      </div> 
      <br />
      <button type='submit' className='btn btn-success btn-lg'> Add new contact</button>
      </form>
      <br />
      <button className='btn btn-primary btn-lg' onClick={opencontactlist}>View your contacts</button>
    
    </div>
  )
}

export default Addcontact