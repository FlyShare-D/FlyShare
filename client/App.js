import './styles.css';
import React from 'react';
import axios from 'axios';

function App() {
  const clickHandler = () => {
    axios.get('http://localhost:8080/auth/google')
    .then((res) =>{
      console.log(res);
    })
  }

  return (
    <div className="App">
      {/* <button onClick={clickHandler}>Login</button> */}
    </div>
  );
}

export default App;
