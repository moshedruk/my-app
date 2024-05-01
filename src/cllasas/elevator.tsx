import React, { Component } from 'react';
import './elevator.css'; // ייבוא קובץ CSS
interface ElevatorProps {
    currentFloor: number;
    destinationFloor?: number;
    status: string;
    estimatedTimeToDestination?: number;
}


class Elevator extends Component {
    constructor(props:ElevatorProps) {
        super(props);
        this.state = {
            currentFloor: props.currentFloor,
            destinationFloor: props.destinationFloor,
            status: props.status,
            estimatedTimeToDestination: props.estimatedTimeToDestination
        };
    }

    moveToFloor(floorNumber: number) {
      
        // הוסף כאן את הלוגיקה של התנועה לקומה הרצויה
    }

    stop() {
        // הוסף כאן את הלוגיקה של העצירה בקומה הנוכחית
    }

    render() {
        return (                           
            <div>
            <img className='elevator-img' src={'/elv.png'} alt="מעלית" />        
            </div>
        );
    }    
}


export default Elevator;
