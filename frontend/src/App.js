import {Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import LandPage from "./pages/LandPage/LandPage";
import About from "./pages/About/About";
import OurPrinciples from "./pages/OurPrinciples/OurPrinciples";
import Services from "./pages/Services";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BMI from './pages/BMI/BMI';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile/Profile';
import PrivateRoute from "./components/PrivateRoute";
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { currentUser } from './redux/authSlice';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function App() {
  const dispatch = useDispatch();
    useEffect(() => {
        dispatch(currentUser());
    }, [dispatch]);
  return (
    <div className='App'>
      <NavBar/>
      <Routes>
      <Route path="/" element={<LandPage />} />
      <Route path="about" element={<About />} />
      <Route path="ourPrinciples" element={<OurPrinciples />} />
      <Route path="services" element={<Services />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="bmi" element={<BMI />} />
      <Route path="*" element={<NotFound/>}/>
      <Route path="profile" element={<PrivateRoute> <Profile /></PrivateRoute>}/>

      </Routes>
      <ToastContainer position='top-left'/>
      
    </div>
  );
}

export default App;
