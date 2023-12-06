import './App.css';
import FirstPage from './FirstPage';     // First page
import NewUser from './NewUser';
import ForgotPassword from './ForgotPassword';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import AfterLogin from './AfterLogin';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={< FirstPage />} />
          <Route path='NewUser' element={<NewUser />} />
          <Route path='ForgotPassword' element={<ForgotPassword />} />
          <Route path='LoginPage' element={<LoginPage />} />
          <Route path="AfterLogin" element={<AfterLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
