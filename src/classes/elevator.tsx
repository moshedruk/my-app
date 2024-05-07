import React, { Component } from 'react';
import './elevator.css'; // ייבוא קובץ CSS
interface ElevatorProps {
    currentFloor: number;
    destinationFloor: number;
    status: string;
    estimatedTimeToDestination: number;
    queue:number [];
    number: number
    last_floor: number;
}

class Elevator extends Component {
    currentFloor
    destinationFloor
    status 
    estimatedTimeToDestination     
    queue
    number
    last_floor

    constructor(props:ElevatorProps) {
        super(props);       
        this.currentFloor = props.currentFloor;
        this.destinationFloor = props.destinationFloor;
        this.status = props.status;
        this.estimatedTimeToDestination = props.estimatedTimeToDestination;
        this.queue = props.queue; 
        this.number = props.number  
        this.last_floor = props.last_floor;    
    }   
    move = () =>{

        let numfloor = this.queue[this.queue.length - 1];
        if (this.state === 'active' ) return;
        if( numfloor === undefined) return
        
        // find element byclassname
        const elevatorImg = document.getElementById('elevator ' +this.number) as HTMLElement;
        
        if (elevatorImg) {
            // calculate time
            const time = Math.abs(this.currentFloor - numfloor)/2
            const t = Math.abs(this.currentFloor - numfloor);
            elevatorImg.style.transitionDuration = `${time}s`;
            elevatorImg.style.transform = `translateY(-${numfloor * 117}px)`;           
            

            setTimeout(() => {
                var audio = new Audio('ding.mp3');
                audio.play();
                // play audio 
                this.queue.pop()
                // wait 2 seconds
                this.status = 'idle'                
                this.move() 

            }, time*1000)

            this.currentFloor = numfloor
            // console.log(this.currentFloor)
            this.status = 'active'
        }

    } 
    calculateTimeTarget(floorNumber:number) {   
        let v = this.calculate_ToFloor(floorNumber)  
            
        this.estimatedTimeToDestination += v 
        
        // return this.estimatedTimeToDestination;
    }
    calculateMinus =() =>{
        
        if (this.estimatedTimeToDestination <= 0) {
            return 
        }
        else{
            
            console.log(this.estimatedTimeToDestination)
            this.estimatedTimeToDestination -= 0.5;                 
            setTimeout(() => {                 
                this.calculateMinus()                
                // wait 2 seconds                
            }, 500)
            

        }}
    
    calculate_ToFloor(floorNumber: number) {
        const distance = Math.abs(this.last_floor - floorNumber)/2;                     
        return distance;
    }
    

    add_to_queue(floorNumber: number) {
        //הכנסה לתור 
        this.queue.unshift(floorNumber);  
        console.log(this.queue.length )
        //הוספה לזמן אמת את המרחק 
        this.calculateTimeTarget(floorNumber) 
        //שינוי המצביע למיקום הקומה האחרונה שנכנסה
        this.last_floor = floorNumber; 
        //חישוב זמן אמת של המעלית בשעת תנועה 
        this.calculateMinus();
        // כדי לא לקרוא שוב ושוב לפונקציה בכל לחיצת כפתור מחדש אלא לפי המוגדר לה הפונקציה
        if(this.queue.length ===1){
            this.move()  
        }          
      
    } 

    render() {
        return (                           
            <div className='elevator ' id={ 'elevator '+this.number} >
            <img className='elevator-img' src={'/elv.png'} alt="מעלית" />        
            </div>
        );
    }    
}

export default Elevator;
