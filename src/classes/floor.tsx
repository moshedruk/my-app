import React, { Component, useState } from 'react';
import './Floor.css'; // ייבוא קובץ CSS
import Elevator from './elevator';

// הגדרת אינטרפייס לפרופס של Floor
// interface FloorProps {
//     floorNumber: number;
//     Click: string;
// }
interface FloorProps {
    floorNumber: number;   
    handleClick: (floorNumber: number) => void; 
    blong_to_bild: number;   
  } 

// מחלקת קומה (Floor)
class Floor extends Component<FloorProps> {  
    floorNumber: number;  
    Arrival_Time : number;
    blong_to_bild: number;
    
    constructor(props: FloorProps) {
      super(props);  
      this.floorNumber = props.floorNumber;    
      this.Arrival_Time = 0; 
      this.blong_to_bild = props.blong_to_bild 
    }

    display_time(time: number): void {
        this.Arrival_Time = time;
        const element = document.querySelector('#time' +this.blong_to_bild+ this.floorNumber);
        if (element) {            
        element.innerHTML = this.Arrival_Time.toString();
        }
        this.Arrival_Time = time;         
        if (this.Arrival_Time <= 0) {            
            return;
        } else {            
            setTimeout(() => {                
            this.display_time(time - 0.5);
            }, 500);
        }
    }
    
    setButtonColor = (newColor: string ,time : number) => {
        const Img = document.querySelector('#metal' +this.blong_to_bild  +this.floorNumber) as HTMLElement;
        if (Img){            
            Img.style.backgroundColor = newColor;
            setTimeout(() => this.setBackToOriginal(), time * 1000); // קריאה לפונקציה setBackToOriginal בתוך פונקציה קולטת
        }
    };    
    setBackToOriginal = () => {        
        const Img = document.querySelector('#metal' + this.blong_to_bild + this.props.floorNumber) as HTMLElement;
        if (Img){            
            Img.style.backgroundColor = 'white'; // שינוי הצבע לערך המקורי
        }
    }     
    _render() {                
        return (
            <div className='container-floor'>
            <div className="floor"/> 
            <div className='container-button'>
            <button 
            className={`metal`} id={'metal' +this.blong_to_bild + this.props.floorNumber}
            onClick={() => {
            this.props.handleClick(this.props.floorNumber)}}>
            {this.props.floorNumber}
            </button>            
            <div className="time" id={'time'+ this.blong_to_bild+ this.props.floorNumber} style={{ /* הסגנונות שלך כאן */ }}>
                {this.Arrival_Time}
            </div>
            </div>             
            </div>           
        );
    }
}

export default Floor;
