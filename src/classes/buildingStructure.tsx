import React, { Component } from 'react';
import Elevator from './elevator';
import Floor from './floor';

interface BuildingStructureProps {
    numFloors: number;  // Number of floors in the building
    numElevators: number;  // Number of elevators in the building
    number: number;  // Building number
}
class BuildingStructure extends Component<BuildingStructureProps> {
    number: number;
    elevators: Elevator[];  // Array of elevators in the building
    floors: Floor[];   // Array of floors in the building
    constructor(props: BuildingStructureProps) {
        super(props);
        this.elevators = [];
        this.floors = [];
        this.number = props.number;
    }

    Minimum_selection_ele = (floorNumber: number): void => {
        // Initialize variables
        let minTime = Infinity;
        let nearest_ele = this.elevators[0];
        // Iterate through each elevator
        this.elevators.forEach((elevator) => {
            // Calculate total time to reach the specified floor
            let time = elevator.estimatedTimeToDestination + elevator.calculate_ToFloor(floorNumber);
            // Update minTime and nearest_ele if the calculated time is less
            if (time < minTime) {
                minTime = time;
                nearest_ele = elevator;
            }
        });
        // Check if the selected elevator can service the floor
        if (!nearest_ele.queue.includes(floorNumber) &&
            nearest_ele.currentFloor !== floorNumber &&
            !this.elevators.some(elevator => elevator.queue.includes(floorNumber))) {
            // Add floor to the elevator's queue, update estimated time, and initiate movement
            nearest_ele.updete_ele(floorNumber, minTime);
            nearest_ele.calculateMinus();
            // Update UI elements
            this.floors[floorNumber].setButtonColor('green', minTime);
            this.floors[floorNumber].display_time(minTime);
        }
    };    
}
export default BuildingStructure;


