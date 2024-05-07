import React, { ReactNode } from 'react';
import Floor from './classes/floor';
import BuildingStructure from './classes/buildingStructure';
import Elevator from './classes/elevator';
import './App.css'


function App(){
  const buildings = [new BuildingStructure({numFloors:9, numElevators:4})]
  return (
    <div className='main' >      
    {buildings.map(b =>b.render())}
          
    </div>
  );
}

export default App;
  
