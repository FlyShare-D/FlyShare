// import './styles.css';
import React from 'react';
import { decrement, increment, updateFlightIcon } from "./src/app/voteCounter";
import { useSelector, useDispatch } from 'react-redux';
import Logo from "./src/logo";
import SignIn from './src/signin';
import DestinationForm from './src/destinationForm';
import DialogButton from "./src/dialogButton";
import TripContainer from './src/tripContainer';
import AppNavBar from './src/AppNavbar'
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';
import Landing from './src/landing'

function App() {
  // const dispatch = useDispatch();
  // const isLoggedIn = sessionStorage.getItem('isloggedin');
  const isLoggedIn = true

  if (isLoggedIn) return (
    <div className="App">
      <AppNavBar/>
      <DestinationForm />
      <TripContainer category={"flight"} />
      <TripContainer category={"hotel"} />
      <TripContainer category={"event"} />
      <DialogButton />
      <SignIn />
      <Landing />
    </div>
  );
  if (!isLoggedIn) return (
    <Landing />
  );
}

export default App;
