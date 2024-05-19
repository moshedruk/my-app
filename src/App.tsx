import React, {  ReactNode } from 'react';
import Floor from './classes/floor';
import BuildingStructure from './classes/buildingStructure';
import Elevator, { Enum_status } from './classes/elevator';
import './css/App.css';
import { getBuildingConfigsElevator,getBuildingConfigsFloors,floorHe, numBuildings } from './configurtion/config';
import Factory from './factort/Factory';

 

function createBuildingStructures() {
  let buildings: BuildingStructure[]
  let b = getBuildingConfigsElevator(1,2)
  let c = getBuildingConfigsFloors(5,3)

  buildings = Factory('bild', numBuildings);
  buildings.map((building,index) => {
    building.elevators = Factory('elevator', floorHe[index],building.number);
  })
  buildings.map((building,index) => {
    building.floors = Factory('floor',c[index] ,building.number,building.Minimum_selection_ele);
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
  
