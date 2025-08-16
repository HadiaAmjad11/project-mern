import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Home from './pages/Home';
import Header from './Components/Header';
import PrivateRoute
 from './Components/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
     <Routes>
      <Route  path="/" element={<Home />}/>
       <Route  path="/Signin" element={<Signin />}/>
      <Route  path="/SignUp" element={<SignUp />}/>
      <Route  path="/About" element={<About/>}/>
            <Route  element={<PrivateRoute />}>

      <Route  path="/Profile" element={<Profile />}/>
     </Route>

     </Routes>
    </BrowserRouter>
  );
}
