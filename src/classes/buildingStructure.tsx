import React, { Component } from 'react';
import Elevator from './elevator';
import Floor from './floor';
import './buildingStructure.css'
import { Enum_status } from './elevator'

//props של BuildingStructure
interface BuildingStructureProps {
    numFloors: number;
    numElevators: number;
    number: number;
}
// מחלקת המבנה של הבניין
class BuildingStructure extends Component<BuildingStructureProps> {  // הגדרת התכונות של המבנה   
    elevators: Elevator[];
    floors: Floor[];
    number: number;
    // הבנאי של המחלקה
    constructor(props: BuildingStructureProps) {
        super(props);
        this.elevators = [];
        this.floors = [];
        this.number = props.number;        
    }
    Minimum_selection_ele = (floorNumber: number): void => {
        // קליטת זמן וערכים ראשוניים       
        let minTime = Infinity;
        let nearest_ele = this.elevators[0];
        // לולאה על כל מעלית
        this.elevators.forEach((elevator) => {
            let time = elevator.estimatedTimeToDestination + elevator.calculate_ToFloor(floorNumber);
            if (time < minTime) {
                minTime = time;
                nearest_ele = elevator;
            }
        });
        // עדכן את הערך המינימלי אם הזמן שחוזר הוא קטן יותר
        nearest_ele.updete_ele(floorNumber, minTime)
        nearest_ele.calculateMinus();
        this.floors[floorNumber].setButtonColor('green', minTime);
        // this.elevators[nearest_ele].updete_ele(floorNumber,minTime)
        this.floors[floorNumber].display_time(minTime)
    };

    render(): JSX.Element {
        return (
            <div className='ee' id={'main' + this.number}  >
                <div className="container-ele">
                    {this.elevators.map((elevator, index) => (
                        elevator.render()))}
                </div>
                <div className='container-floors'>
                    {this.floors.map((floor, index) => (
                        <div key={index}>
                            {floor._render()}
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
export default BuildingStructure;


