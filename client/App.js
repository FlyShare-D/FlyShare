import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DestinationForm from './src/destinationForm';
import DialogButton from "./src/dialogButton";
import TripContainer from './src/tripContainer';
import AppNavBar from './src/AppNavbar'
import Landing from './src/landing'
import { setLoggedIn } from './src/app/voteCounter';
import { fetchInitial } from './src/app/voteCounter';

function App() {
  const { isLoggedIn } = useSelector((state) => state.counter);
  const updatedIsLoggedIn = sessionStorage.getItem('loggedin');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoggedIn(updatedIsLoggedIn));
    
  })
  if (isLoggedIn) return (
    <div className="App">
      <AppNavBar/>
      <DestinationForm />
      <TripContainer category={"flight"} />
      <TripContainer category={"hotel"} />
      <TripContainer category={"event"} />
      <DialogButton />
    </div>
  );
  if (!isLoggedIn) return (
    <div className="Guest">
      <AppNavBar/>
      <Landing />
    </div>
  );
}

export default App;
