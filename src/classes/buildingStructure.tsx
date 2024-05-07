import React, { Component } from 'react';
import Elevator from './elevator';
import Floor from './floor';
import './buildingStructure.css'

//props של BuildingStructure
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
    button_color: string;
    
    // הבנאי של המחלקה
    constructor(props: BuildingStructureProps) {
        super(props);
        this.numFloors = props.numFloors;
        this.numElevators = props.numElevators;
        this.elevators = [];
        this.floors = [];
        this.button_color = '';
        
        for (let i = 0; i <= this.numFloors; i++) {
            const floor = new Floor({floorNumber: i, handleClick: this.handleClick});
            this.floors.push(floor);
        }
        for (let i = 0; i < this.numElevators; i++) {
            const elevator = new Elevator({
                currentFloor: 0,
                destinationFloor: 0,
                status: 'stopped',
                estimatedTimeToDestination: 0,
                queue: [],
                number:i,
                last_floor : 0,
            });
            this.elevators.unshift(elevator)
        }
    }  
    // setClick = (newClick: string) => {
    //     this.button_color = newClick;
    // };
    
    handleClick = (floorNumber: number): void => { 
        // this.setClick('red');
        this.floors[floorNumber].setButtonColor('green');
        console.log(this.floors[floorNumber].buttonColor );
        
        let result = document.getElementById("metal linear") as HTMLElement  
        if (result){

            result.style.backgroundColor = 'red';
        }      
        
        // קליטת זמן וערכים ראשוניים
       
        let minTime = Infinity;
        let minele = 0;
    
        // לולאה על כל מעלית
        this.elevators.forEach((elevator, index) => {          
            
        let time = 0;           
        time = elevator.estimatedTimeToDestination + elevator.calculate_ToFloor(floorNumber);  
                              
        if (time < minTime) {
            minTime = time;
            minele = index;            
        }            
            
        });
        
        // עדכן את הערך המינימלי אם הזמן שחוזר הוא קטן יותר
        this.elevators[minele].add_to_queue(floorNumber)
    };       
   
    render(): JSX.Element {
        return (
            <div className='ee' >
                <div className="container-ele">                    
                        {this.elevators.map((elevator, index) => (
                         elevator.render()
                        ))}                    
                </div>
                <div className='container-floors'>
                    {this.floors.map((floor, index) => (                             
                        <div key={index} >
                            {floor._render()}                                                   
                        </div>
                    ))}
                </div>        
            </div>
        );
    }
}

export default BuildingStructure;


