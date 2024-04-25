import Elevator  from './elevator';
import Floor  from './floor';

class BuildingStructure {    
    numFloors: number;
    numElevators: number;
    elevators: Elevator[];
    floors: Floor[];
    
    constructor(numFloors: number, numElevators: number) {
        this.numFloors = numFloors;
        this.numElevators = numElevators;
        this.elevators = [];
        this.floors = [];
    }


    addElevator(elevator: Elevator): void {
        // להוספת מעלית למערכת
    }

    removeElevator(elevator: Elevator): void {
        // להסרת מעלית מהמערכת
    }

    addFloor(floor: Floor): void {
        // להוספת קומה למערכת
    }

    removeFloor(floor: Floor): void {
        // להסרת קומה מהמערכת
    }

    findNearestElevator(floorNumber: number): Elevator {
        // לחיפוש למעלית הקרובה ביותר
        return this.elevators[0]; // זמני
    }
}
export default BuildingStructure;
