import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/pages/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Login from './components/auth/Login';
import Signup from './components/auth/signup'
import Payments from './components/reservation/paymentForm'
import ForgotPassword from './components/auth/ForgotPassword';
import RouteDetails from './components/busRoutes/routeDetails';
import TravelHistory from './components/userProfile/travelHistory';
import ProfileSetting from './components/userProfile/profileSetting';
import News from './components/notifications/News';

function App() {
  return (
    <Router>
      <NavBar />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/about' element={<About />} />
         <Route path='/login' element={<Login />} />
         <Route path='/signup' element={<Signup />} />
         <Route path='/payments' element={<Payments />} />
         <Route path='/resetpassword' element={<ForgotPassword />} />
         <Route path='/routes/:routeId' element={<RouteDetails />} />
         <Route path='/profile/travel-history' element={<TravelHistory />} />
         <Route path='/profile/profile-setting' element={<ProfileSetting />} />  
         <Route path='/news' element={<News />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
