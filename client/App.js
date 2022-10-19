// import './styles.css';
import React from 'react';
import { decrement, increment } from './src/app/voteCounter';
import { useSelector, useDispatch } from 'react-redux';
import Logo from './src/logo';
import SignIn from './src/signin';
import DestinationForm from './src/destinationForm';
import DialogButton from './src/dialogButton';
import FlightsContainer from './src/flightsContainer';
import HotelsContainer from './src/hotelsContainer';
import PoiContainer from './src/poiContainer';

function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1 className="App-header">FlyShare</h1>
      <h3>The Vote Count is: {count} </h3>
      {/* <button onClick={()=>dispatch(increment())}>UpVote</button>
      <button onClick={()=>dispatch(decrement())}>DownVote</button> */}
      {/* <DestinationForm></DestinationForm> */}
      {/* <Logo></Logo> */}
      {/* <SignIn></SignIn> */}
      {/* <FlightsContainer /> */}
      <HotelsContainer></HotelsContainer>
      {/* <PoiContainer></PoiContainer> */}
      {/* <DialogButton></DialogButton> */}
    </div>
  );
}

export default App;
