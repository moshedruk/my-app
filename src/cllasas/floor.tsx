import React, { Component } from 'react';
import './Floor.css'; // ייבוא קובץ CSS
import Elevator from './elevator';

// הגדרת אינטרפייס לפרופס של Floor
interface FloorProps {
    floorNumber: number;
}

// מחלקת קומה (Floor)
class Floor extends Component<FloorProps> {
    constructor(props: FloorProps) {
        super(props);
        this.state = {
            floorNumber: props.floorNumber,
            
        };
    }

    // פעולות
    addElevatorArriving(elevator: Elevator): void {
        // להוספת מעלית שמתכננת להגיע לקומה
    }

    removeElevatorArriving(): void {
        // להסרת מעלית שמתכננת להגיע מהרשימה
    }
    
    render(): JSX.Element {        
        return (
            <div className="floor">               
            </div>
                
            
        );
    }
}

export default Floor;
