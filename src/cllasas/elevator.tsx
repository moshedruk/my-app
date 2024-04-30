import './elevator.css';

class Elevator {    
    currentFloor: number;
    destinationFloor?: number;
    status?: string;
    estimatedTimeToDestination?: number;
    
    constructor(currentFloor: number, destinationFloor: number, status: string, estimatedTimeToDestination: number) {
        this.currentFloor = currentFloor;
        this.destinationFloor = destinationFloor;
        this.status = status;
        this.estimatedTimeToDestination = estimatedTimeToDestination;
    }

    
    moveToFloor(floorNumber: number): void {
        // אם המעלית כרגע נמצאת בקומה המבוקשת, לא נבצע תנועה
        if (this.currentFloor === floorNumber) {
            console.log(`המעלית כבר נמצאת בקומה ${floorNumber}`);
            return;
        }
    
        // הדפסת הודעה על התנועה לקומה המבוקשת
        console.log(`מעלית מתקדמת מקומה ${this.currentFloor} לקומה ${floorNumber}`);
    
        // עדכון מצב המעלית והקומה הנוכחית
        this.status = 'moving';
        this.destinationFloor = floorNumber;
    
        // חישוב זמן הגעה כאשר נניח שהמעלית מסתכלת 1 שנייה לכל קומה
        this.estimatedTimeToDestination = Math.abs(this.currentFloor - floorNumber) * 1000;
    
        // התחלת טיימר שידליק את הפונקציה stop() לאחר סיום תנועת המעלית
        setTimeout(() => {
            this.stop();
        }, this.estimatedTimeToDestination);
    }
    
    stop(): void {
        // עדכון מצב המעלית והקומה הנוכחית
        this.status = 'stopped';
        // this.currentFloor = this.destinationFloor;
    
        // הדפסת הודעה על הגעת המעלית לקומה הנוכחית
        console.log(`המעלית הגיעה לקומה ${this.currentFloor}`);
    
        // ניקוי הקומה שאליה הגיעה המעלית
        this.destinationFloor = undefined;
        this.estimatedTimeToDestination = undefined;
    }
    
    startWaitingTimer(): void {
        // להתחלת טיימר המתנה
    }
    
 }
export default Elevator;
