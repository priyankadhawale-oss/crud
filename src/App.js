
import './App.css';
import Navbar from './Component/Layout/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Contact from './Component/Pages/Contact';
import Gallery from './Component/Pages/Gallery';
import AddUser from './Component/Pages/User/AddUser';
import Error from './Component/Error';
import ShowUser from './Component/Pages/User/ShowUser';
import UpdateUser from './Component/Pages/User/UpdateUser';
import DeleteUser from './Component/Pages/User/DeleteUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/user/showuser' element={<ShowUser/>}/>
        <Route path='/user/adduser' element={<AddUser/>}/>
        <Route path='/user/updateuser/:studentID' element={<UpdateUser/>}/>
        <Route path='/user/deleteuser/:studentID' element={<DeleteUser/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
