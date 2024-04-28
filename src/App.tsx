import React from 'react';
import logo from './logo.svg';
import './App.css';
import Floor from './cllasas/floor';


function App(): JSX.Element {
  const floor = new Floor(5);
  return  <div className='container'>
    <p>{floor.removeElevatorArriving()}</p>
      <p>{floor.removeElevatorArriving()}</p>
      <p>{floor.removeElevatorArriving()}</p>
      <p>{floor.removeElevatorArriving()}</p>
      <p>{floor.removeElevatorArriving()}</p>
      </div>
}

export default App;
