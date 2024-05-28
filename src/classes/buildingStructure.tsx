import React, { Component } from 'react';
import Elevator from './elevator';
import Floor from './floor';
import { BuildingStructureProps } from '../Interfaces/interfaces';

// BuildingStructure component class
class BuildingStructure extends Component<BuildingStructureProps> {
    number: number;  // Building number
    elevators: Elevator[];  // Array of elevators in the building
    floors: Floor[];  // Array of floors in the building

    // Constructor of the class
    constructor(props: BuildingStructureProps) {
        super(props);
        this.elevators = [];  // Initialize elevators array
        this.floors = [];  // Initialize floors array
        this.number = props.number;  // Initialize building number
    }

    // Function to select the nearest elevator and initiate movement
    Minimum_selection_ele = (floorNumber: number): void => {
        // Initialize variables
        let minTime = Infinity;
        let nearest_ele = this.elevators[0];

        // Iterate through each elevator to find the nearest one
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
        if (
            !nearest_ele.queue.includes(floorNumber) &&
            nearest_ele.currentFloor !== floorNumber &&
            !this.elevators.some(elevator => elevator.queue.includes(floorNumber))
        ) {
            // Add floor to the elevator's queue, update estimated time, and initiate movement
            nearest_ele.updete_ele(floorNumber, minTime);

            // Update UI elements            
            this.floors[floorNumber].setButtonColor('green', minTime);
            this.floors[floorNumber].display_time(minTime);
        }
    };
}

export default BuildingStructure;
