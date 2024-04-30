import React, { Component } from 'react';
import Elevator from './elevator';
import Floor from './floor';

// סוג ה-props של BuildingStructure
interface BuildingStructureProps {
    numFloors: number;
    numElevators: number;
}

// מחלקת המבנה של הבניין
class BuildingStructure extends Component<BuildingStructureProps> {
    // הגדרת התכונות של המבנה
    numFloors: number;
    numElevators: number;
    elevators: Elevator[];
    floors: Floor[];

    // הבנאי של המחלקה
    constructor(props: BuildingStructureProps) {
        super(props);
        this.numFloors = props.numFloors;
        this.numElevators = props.numElevators;
        this.elevators = [];
        this.floors = [];
        for (let i = 0; i <= this.numFloors; i++) {
            const floor = new Floor({floorNumber: i});
            this.floors.unshift(floor);
        }
        for (let i = 0; i < this.numElevators; i++) {
            const elevator = new Elevator({
                currentFloor: 0,
                destinationFloor: 0,
                status: 'stopped',
                estimatedTimeToDestination: 0
            });
            this.elevators.unshift(elevator)
        }
    }  

    findNearestElevator(floorNumber: number): Elevator {
        // לחיפוש למעלית הקרובה ביותר
        return this.elevators[0]; // זמני
    }
    Calling_the_elevator(): void {

    }

    render(): JSX.Element {
        return (
            <div className="building-structure">
                <div className="container-ele">
                    <div className='elevator-img'>
                        {this.elevators.map((elevator, index) => (
                        <Elevator key={index} />
                        ))}
                    </div>
                </div>

                <div className="container-floor">
                    {this.floors.map((floor, index) => (
                        <div key={index} className='floor'>                            
                        
                        <div className='container-button'>
                            <button className="metal linear">{index}</button>
                            </div>    
                            <Floor floorNumber={index} />
                        </div>                        
                    ))}
                </div>            
            </div>
        );
    }
}

export default BuildingStructure;
