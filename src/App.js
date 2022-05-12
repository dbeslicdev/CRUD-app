import {React, useState} from 'react';
import LoginForm from './Pages/LoginForm';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import ContactInfo from './Pages/ContactInfo';
/* import ProtectedRoute  from './components/ProtectedRoute';
import {useNavigate} from 'react-router-dom'; */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  
/*   const [isAuth, setAuth] = useState(false);
  const navigate = useNavigate();

  const login = () => {
    setAuth(true);
    navigate('/home');
  } */

  const [contact, setContact] = useState([]);

  const addContactHandler = (contact) => {
    setContact((prevContacts) => {
      return [contact, ...prevContacts];      
    });
    console.log(contact);
  };
  

  return (
   
      <Router>
        <Routes>             
          {/* <Route path="/form" element={<LoginForm onSubmitHandler={login}/>}/> */}
          <Route path="*" component={<ErrorPage/>}/>
          <Route path="/form" component={<LoginForm/>}/>
          {/* <Route element={<ProtectedRoute isAuth={isAuth} />} > */}
          <Route path="/home" element={<Home onAddContact={addContactHandler}/>}/>  
          <Route path ="/contact-info" element={<ContactInfo items={contact} />}/>
          {/* </Route>  */}         
        </Routes>
      </Router>
     );
}

export default App;
