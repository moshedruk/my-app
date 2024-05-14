import React, { Component } from 'react';
import Elevator from './elevator';
import Floor from './floor';
import './buildingStructure.css'


interface BuildingStructureProps {
    numFloors: number;
    numElevators: number;
    number: number;
}
class BuildingStructure extends Component<BuildingStructureProps> {   
    number: number;    
    elevators: Elevator[];
    floors: Floor[];
    constructor(props: BuildingStructureProps) {
        super(props);
        this.elevators = [];
        this.floors = [];
        this.number = props.number;        
    }
    Minimum_selection_ele = (floorNumber: number): void => {           
        let minTime = Infinity;
        let nearest_ele = this.elevators[0];        
        this.elevators.forEach((elevator) => {   
        let time = elevator.estimatedTimeToDestination + elevator.calculate_ToFloor(floorNumber);
            if (time < minTime) {
                minTime = time;
                nearest_ele = elevator;
            } 
        });       
        if((!nearest_ele.queue.includes(floorNumber)) && (nearest_ele.currentFloor !== floorNumber)) {
            nearest_ele.updete_ele(floorNumber, minTime)
            nearest_ele.calculateMinus();
            this.floors[floorNumber].setButtonColor('green', minTime);        
            this.floors[floorNumber].display_time(minTime)       
        }          
    };
    render(): JSX.Element {
        return (
            <div className='BuildingStructure' id={'main' + this.number}>
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


