//React imports
import React ,{useState} from 'react';
import {Route , Routes, useNavigate } from "react-router-dom";

//Css
import './App.css';

//Components
import Header from './components/Header/Header';
import LoginLogoutCard from './components/LoginLogoutCard/LoginLogoutCard';
import JobApplicationModal from './components/JobApplicationModal/JobApplicationModal';

//Pages
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import UserHomePage from './pages/UserHomePage/UserHomePage';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  const [loggedIn,setLoggedIn] = useState(false);
  const [showPopup,setPopupState] = useState(false);
  const [selectedId,setSelectedId] = useState('');
  const [showLoggedInCard,setLoggedInCard] = useState(false);
  const [showLoggedOutCard,setLoggedOutCard] = useState(false);
  const [userData,setUser] = useState({});
  const navigate = useNavigate();

  const baseUrl = 'https://jobs-api.squareboat.info/api/v1';

  function updateValues(value,user) {
    if(value) {
      setLoggedIn(value);
      setUser(user);
      navigate("/");
      setLoggedInCard(true);
      setLoggedOutCard(false);
    } else {
      setLoggedIn(value);
      setUser({});
      setLoggedOutCard(true);
      setLoggedInCard(false);
    }
    setTimeout(()=>{
      setLoggedOutCard(false);
      setLoggedInCard(false);
    },3000);
  }

  function closeCard() {
    setLoggedOutCard(false);
    setLoggedInCard(false);
  }

  function openPopup(id) {
    console.log(id);
    setSelectedId(id);
    setPopupState(true);
  }

  function closePopup() {
      setSelectedId('');
      setPopupState(false);
  }

  return (
    <div className='app'>
        {
            showPopup
            ? <JobApplicationModal id={selectedId} onClosePopup={closePopup} baseUrl={baseUrl} token={userData.token}></JobApplicationModal>
            : <></>
        }   
        <Header className="navbar" onUpdateValue={updateValues} name={userData.name} isLoggedIn={loggedIn}></Header>
        {
        showLoggedInCard 
          ? <div className="loginLogoutCard"><LoginLogoutCard onClose={closeCard} heading="Login" subText="You have successfully logged in."></LoginLogoutCard></div>
          : <div></div>
        }
        {
        showLoggedOutCard 
          ? <div className="loginLogoutCard"><LoginLogoutCard onClose={closeCard} className="loginLogoutCard" heading="Logout" subText="You have successfully logged out."></LoginLogoutCard></div>
          : <div></div>
        }
        <Routes>
          <Route index element={loggedIn ? <UserHomePage onOpenPopup={openPopup} baseUrl={baseUrl} user={userData} /> : <Home />} />
          <Route path="login" element={<Login baseUrl={baseUrl} onUpdateValue={updateValues} />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
    </div>
  );
}

export default App;
