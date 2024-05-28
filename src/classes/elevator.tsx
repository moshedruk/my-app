import React, { Component } from 'react';
import '../style/elevator.css'; // Import CSS file
import { floorHeightConfig } from '../configuration/config';
import { ElevatorProps, Enum_status } from '../Interfaces/interfaces';

// Elevator component class
class Elevator extends Component<ElevatorProps> {
    currentFloor: number;
    estimatedTimeToDestination: number;
    queue: number[];
    number: number;
    last_floor: number;
    status: Enum_status;
    blong_to: number;

    // Constructor of the class
    constructor(props: ElevatorProps) {
        super(props);
        this.currentFloor = props.currentFloor;  // Initialize current floor
        this.estimatedTimeToDestination = props.estimatedTimeToDestination;  // Initialize estimated time to destination
        this.queue = props.queue;  // Initialize queue
        this.number = props.number;  // Initialize elevator number
        this.last_floor = props.last_floor;  // Initialize last floor visited
        this.status = props.status;  // Initialize status
        this.blong_to = props.blong_to;  // Initialize building number
    }

    // Moves the elevator to the next floor in the queue
    move() {        
        let numfloor = this.queue[this.queue.length - 1];  // Get the next floor to visit from the queue
        if (numfloor === undefined) return;  // If the queue is empty, exit the function
        if (this.status === 'Active') return;  // If the elevator is already moving, exit the function
        
        this.status = Enum_status.Active;  // Set the status to active

        // Find the elevator image element by ID
        const elevatorImg = document.getElementById('elevator' + this.blong_to + this.number) as HTMLElement;
        if (elevatorImg) {
            // Calculate the time required to reach the next floor
            const time = Math.abs(this.currentFloor - numfloor) / 2;
            elevatorImg.style.transitionDuration = `${time}s`;
            elevatorImg.style.transform = `translateY(-${numfloor * floorHeightConfig}px)`;

            // A function to reduce time from arrival as long as the elevator is running
            this.calculateMinus();
            //Sleep function
            setTimeout(() => {
                var audio = new Audio('ding.mp3');
                audio.play();
                this.queue.pop();  // Remove the visited floor from the queue
                setTimeout(() => {                    
                    this.status = Enum_status.notActive;  // Set the status to not active
                    this.move();  // Move to the next floor in the queue
                }, 2000);             
            }, time * 1000);
            this.currentFloor = numfloor;  // Update the current floor
        }
    }

    // A function that reduces the arrival time by seconds
    calculateMinus() {        
        if (this.estimatedTimeToDestination <= 0) {
            return;  // Destination reached, exit the function
        } else {            
            this.estimatedTimeToDestination -= 0.5;  // Decrement the estimated time
            setTimeout(() => {
                this.calculateMinus();  // Call the function recursively
            }, 500);
        }
    } 
    
    // A function that calculates the distance from the last place of the elevator to the new floor
    calculate_ToFloor(floorNumber: number) {
        const distance = Math.abs(this.last_floor - floorNumber) / 2;
        return distance;
    }

    // A function to update the elevator's state and initiate movement
    updete_ele(floorNumber: number, time_to_target_floor: number) {   
        // Add the new destination to the beginning of the queue
        this.queue.unshift(floorNumber);
        // Set the estimated time to destination
        this.estimatedTimeToDestination = time_to_target_floor + 2;
        // Update the last floor visited
        this.last_floor = floorNumber;
        // Initiate the elevator movement
        this.move();
    }   
}

export default Elevator;
