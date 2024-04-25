import Elevator  from './elevator';
class Floor {
    
    floorNumber: number;
    elevatorsArriving: Elevator[];
    
    constructor(floorNumber: number) {
        this.floorNumber = floorNumber;
        this.elevatorsArriving = [];
    }  

    addElevatorArriving(elevator: Elevator): void {
        // להוספת מעלית שמתכננת להגיע לקומה
    }

    removeElevatorArriving(elevator: Elevator): void {
        // להסרת מעלית שמתכננת להגיע מהרשימה
    }
}
export default Floor