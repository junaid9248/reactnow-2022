import './App.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import AddContact from './Components/addcontact';
import Contactlist from './Components/contactlist';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Contactprovider} from './Context';


function App() {
  return (
    <Contactprovider>
      
    <div className="App">
      
      <Router>
        <Routes>
            <Route path='/addcontact' element={<AddContact />} />
            <Route path='/contactlist' element={<Contactlist/>} />
        </Routes>
      </Router>
      
    </div>
      
    </Contactprovider>
    
  );
}

export default App;
