import React from 'react';
import './Floor.css'; // ייבוא קובץ CSS
import Elevator from './elevator'

// מחלקת קומה (Floor)
class Floor {
    // תכונות
    floorNumber: number;
    // elevatorsArriving: Elevator[];

    // בנאי
    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
        // this.elevatorsArriving = [];
    }

    // פעולות
    addElevatorArriving(elevator: Elevator): void {
        // להוספת מעלית שמתכננת להגיע לקומה
    }

    removeElevatorArriving() {
        // להסרת מעלית שמתכננת להגיע מהרשימה
        return (
          <div className='floor'>
            
            {/* <p>Current Floor: {elevator.currentFloor}</p>
            <p>Destination Floor: {elevator.destinationFloor}</p>
            <p>Status: {elevator.status}</p>
            <p>Estimated Time To Destination: {elevator.estimatedTimeToDestination}</p> */}
          </div>
        );
    }
}


// const elevator = new Elevator(0, 5, 'moving', 10);


    // addElevatorArriving(elevator:Elevator) {
    //     this.setState(prevState => ({
    //         elevatorsArriving: [...prevState.elevatorsArriving, elevator],
    //     }));
    // }

    // removeElevatorArriving(elevator:Elevator) {
    //     this.setState(prevState => ({
    //         elevatorsArriving: prevState.elevatorsArriving.filter(e => e !== elevator),
    //     }));
    // }

    // render() {
    //     const  floorNumber  = this.props;
    //     const  elevatorsArriving  = this.state;

//         return (
//             <div className="floor">
               
                
//                 {/* <div className="floor-number">Floor Number: {floorNumber}</div> */}
//                 <div className="elevators">
//                     {/* {elevatorsArriving.map(elevator => (
//                         <div className="elevator" key={elevator.id}>Elevator {elevator.id}</div>
//                     ))} */}
//                 </div>
//             </div>
//         );
//     }
// }

export default Floor;
