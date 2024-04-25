
class Elevator {    
    currentFloor: number;
    destinationFloor: number;
    status: string;
    estimatedTimeToDestination: number;
    
    constructor(currentFloor: number, destinationFloor: number, status: string, estimatedTimeToDestination: number) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destinationFloor;
        this.status = status;
        this.estimatedTimeToDestination = estimatedTimeToDestination;
    }

    
    moveToFloor(floorNumber: number): void {
        // תנועה לקומה מסוימת
    }

    stop(): void {
        // לעצירת המעלית
    }

    startWaitingTimer(): void {
        // להתחלת טיימר המתנה
    }
    
 }
export default Elevator;
