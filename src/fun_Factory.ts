import React, {  ReactNode } from 'react';
import Floor from './classes/floor';
import BuildingStructure from './classes/buildingStructure';
import Elevator, { Enum_status } from './classes/elevator';
import './App.css'
import { numBuildings, numElevators, numFloors } from './config';


function Factory(type: string, size: number,Blong_to?: number, handleClick?: (floorNumber: number) => void) {
    const defaultValue = 0; 
    const defaultValueF = () =>{}
  
    if (type === 'bild') {
          const buildings:any = [];
          for (let i = 0; i < size; i++) {
              buildings.push(new BuildingStructure({
                  numFloors: numFloors,
                  numElevators: numElevators,
                  number: i
              }));
          }
          return buildings;
      }
      if (type === 'ele') {
          const elevators = [];
          for (let i = 0; i < numElevators; i++) {
              elevators.push(new Elevator({
                  currentFloor: 0,
                  estimatedTimeToDestination: 0,
                  queue: [],
                  number: i,
                  last_floor: 0,
                  status: Enum_status.notActive,
                  blong_to:Blong_to !== undefined ? Blong_to : defaultValue,
              }));
          }
          return elevators;
      }
      if (type === 'floor') {
          const floors = [];
          for (let i = 0; i <= numFloors; i++) {
              const floor = new Floor({ floorNumber: i, handleClick: handleClick!== undefined ? handleClick : defaultValueF, blong_to_bild: Blong_to !== undefined ? Blong_to : defaultValue, });
              floors.push(floor);
          }
          return floors;
      }
  } 
  export default Factory;