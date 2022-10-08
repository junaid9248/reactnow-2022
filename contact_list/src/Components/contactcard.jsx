import React from 'react'
import '../Styling/contactcardstyle.css'
import {ImBin2} from 'react-icons/im'
import {BiEdit} from 'react-icons/bi'

function Contactcard(props) {
 
  return (
    <div className='contactcard'>
      <div>
        <h1 className='name'>{props.name}</h1> <br />
        <h2 className='number'>{props.number}</h2> <br />
        <h2 className='emailaddress'>{props.email}</h2> <br />
      </div>
  
      <div style={{display: 'flex', flexDirection:'column', margim:'0.5rem'}}>
      <BiEdit color='blue' style={{margin:'0.5em'}}/>
      <ImBin2 size='1em'color='red' style={{margin:'0.5em'}} onClick={()=>props.delete(props.id)}/>
      </div> 
   </div>
  );
}

export default Contactcard;