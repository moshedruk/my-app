import React from 'react';
import './Floor.css'; // ייבוא קובץ CSS
import Elevator from './elevator'

class Floor extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {
            elevatorsArriving: [],
        };
    }

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

    render() {
        const  floorNumber  = this.props;
        const  elevatorsArriving  = this.state;

        return (
            <div className="floor">
               
                
                {/* <div className="floor-number">Floor Number: {floorNumber}</div> */}
                <div className="elevators">
                    {/* {elevatorsArriving.map(elevator => (
                        <div className="elevator" key={elevator.id}>Elevator {elevator.id}</div>
                    ))} */}
                </div>
            </div>
        );
    }
}

export default Floor;
