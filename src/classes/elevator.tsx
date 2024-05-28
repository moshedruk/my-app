import React, { Component } from 'react';
import '../style/elevator.css'; // ייבוא קובץ CSS
import { floorHeightConfig } from '../configuration/config';

// Enum representing the status of an elevator
export enum Enum_status {
    notActive = "notActive",
    Active = "Active"
}
interface ElevatorProps {
    currentFloor: number;
    estimatedTimeToDestination: number;
    queue: number[];
    number: number
    last_floor: number;
    status :  Enum_status
    blong_to: number;
}
class Elevator extends Component<ElevatorProps> {
    currentFloor
    estimatedTimeToDestination
    queue
    number
    last_floor
    status 
    blong_to
    constructor(props: ElevatorProps) {
        super(props);
        this.currentFloor = props.currentFloor;
        this.estimatedTimeToDestination = props.estimatedTimeToDestination;
        this.queue = props.queue;
        this.number = props.number
        this.last_floor = props.last_floor;
        this.status = props.status;
        this.blong_to = props.blong_to;        
    }
    // Moves the elevator to the next floor in the queue
    move() {        
        let numfloor = this.queue[this.queue.length - 1];        
        if (numfloor === undefined) return
        if (this.status=== 'Active') return  
        this.status = Enum_status.Active      
        // find element byclassname
        const elevatorImg = document.getElementById('elevator' + this.blong_to + this.number) as HTMLElement;
        if (elevatorImg) {
            // calculate time            
            const time = Math.abs(this.currentFloor - numfloor) / 2          
            elevatorImg.style.transitionDuration = `${time}s`;
            elevatorImg.style.transform = `translateY(-${numfloor * floorHeightConfig}px)`;
            setTimeout(() => {
                var audio = new Audio('ding.mp3');
                audio.play();
                this.queue.pop();
                setTimeout(() => {                    
                    this.status = Enum_status.notActive;                  
                    this.move();
                }, 2000);             
            }, time * 1000);
            this.currentFloor = numfloor;
        }
    }
    calculateTimeTarget(floorNumber: number) {
        // Calculate the time required to reach the target floor
        let timeToTargetFloor = this.calculate_ToFloor(floorNumber);
        // Update the estimated time to destination
        this.estimatedTimeToDestination += timeToTargetFloor;
    }
    calculateMinus() {        
        if (this.estimatedTimeToDestination <= 0) {
            return; // Destination reached, exit the function
        } else {            
            this.estimatedTimeToDestination -= 0.5; // Decrement the estimated time
            setTimeout(() => {
                this.calculateMinus(); // Call the function recursively
                // wait 2 seconds                
            }, 500);
        }
    }
    

    calculate_ToFloor(floorNumber: number) {
        const distance = Math.abs(this.last_floor - floorNumber) / 2;
        return distance;
    }
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
