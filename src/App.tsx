import React, {  ReactNode } from 'react';
import Floor from './classes/floor';
import BuildingStructure from './classes/buildingStructure';
import Elevator, { Enum_status } from './classes/elevator';
import './App.css'
import { numBuildings, numElevators, numFloors } from './config';
import Factory from './fun_Factory';

 

function createBuildingStructures() {
  let buildings: BuildingStructure[]
  buildings = Factory('bild', numBuildings);
  buildings.map((bild) => {
    bild.elevators = Factory('ele', numElevators,bild.number);
  })
  buildings.map((bild) => {
    bild.floors = Factory('floor', numElevators,bild.number,bild.Minimum_selection_ele);
  })
  return buildings
}

function App(){
  const buildings = createBuildingStructures();
  return (
    <div className='main' id={'main'}>      
      {buildings.map((b) => {
        return b.render();
      })}          
    </div>
  );
}


export default App;
  
