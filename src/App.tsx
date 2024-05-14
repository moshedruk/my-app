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
  buildings.map((building) => {
    building.elevators = Factory('elevator', numElevators,building.number);
  })
  buildings.map((building) => {
    building.floors = Factory('floor', numElevators,building.number,building.Minimum_selection_ele);
  })
  return buildings
}

function App(){
  const buildings = createBuildingStructures();
  return (
    <div className='main' id={'main'}>      
      {buildings.map((building) => {
        return building.render();
      })}          
    </div>
  );
}


export default App;
  
