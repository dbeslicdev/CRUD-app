import LoginForm from './components/LoginForm';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/form" element={<LoginForm/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
