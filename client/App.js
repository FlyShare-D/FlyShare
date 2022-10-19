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


function App() {
  // const dispatch = useDispatch();
  return (
    <div className="App">
      {/* <Paper sx={{backgroundColor: '#F6F6F6'}} elevation={0}> */}
        <AppNavBar/>
        <DestinationForm />
        {/* <Logo></Logo> */}
        {/* <SignIn></SignIn> */}
        <TripContainer category={"flight"} />
        <TripContainer category={"hotel"} />
        <TripContainer category={"event"} />
        <DialogButton />
      {/* </Paper> */}
      
      
    </div>
  );
}

export default App;
