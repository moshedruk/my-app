import React, { Component } from 'react';
import './elevator.css'; // ייבוא קובץ CSS
import { floorHeightConfig } from '../config';

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
class Elevator extends Component {
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
    move = () => {
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
        let v = this.calculate_ToFloor(floorNumber)
        this.estimatedTimeToDestination += v;
    }
    calculateMinus = () => {
        if (this.estimatedTimeToDestination <= 0) {
            return
        }
        else {            
            this.estimatedTimeToDestination -= 0.5;
            setTimeout(() => {
                this.calculateMinus()
                // wait 2 seconds                
            }, 500)
        }
    }

    calculate_ToFloor(floorNumber: number) {
        const distance = Math.abs(this.last_floor - floorNumber) / 2;
        return distance;
    }
    updete_ele(floorNumber: number, time_to_target_floor: number) {        
        this.queue.unshift(floorNumber);
        this.estimatedTimeToDestination += time_to_target_floor + 2
        this.last_floor = floorNumber;
        this.move()
    }
    render() {
        return (
            <div className='elevator' id={'elevator' + this.blong_to + this.number} >
                <img className='elevator-img' src={'/elv.png'} alt="מעלית" />
            </div>
        );
    }
}
export default Elevator;
