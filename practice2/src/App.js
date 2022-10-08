import React,{useState} from 'react';
import Incbutton from './button';
import './css/App.css';
import Usertweet from './tweet';
import List_movies from './listofmovies';

//state is basicaly a variable sort of entity 

function App() {
  const [counter, setCounter]=useState(0);
  //SYNTAX: const [nameoffirststate, namethatcanchangestate]= useState(initialstate);

  //Similarily we can take data from an api and useState can have an object in it that will contain the data of a person or user

  const [userData,setUserdata]=useState(
    {
      name: 'Junaid',
      age: 22,
      skills:['cpp','unity','mechatronics'],
      
    }
  );

  //Now we can simply change the state to add or remove info 

  // We can also use booleans to change the particular state of a component or its props

  const [isEmpty, setBlack]= useState(false);

  const color=()=>{
    
  };

  const increment=() => {
    setCounter(counter+1);
   
  };
  const decrement = () =>{
    setCounter(counter-1);
  }
  const Change= () => {
    setBlack(!isEmpty);
  };
  
  return (
    <div className='userbox'>
      <h1 className={isEmpty ? "black" : ""}>Now you can see me,cant you</h1>
      <button onClick={Change}>click me</button>
      
      <br />
      
      <h1>{counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>

      <List_movies/>
    </div>
     
    
    
  );
}

export default App;
