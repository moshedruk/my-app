import React, { Component } from 'react';
import '../style/Floor.css'; 

interface FloorProps {
    floorNumber: number;   
    handleClick: (floorNumber: number) => void; 
    blong_to_bild: number;   
  } 

class Floor extends Component<FloorProps> {  
    floorNumber: number;  
    Arrival_Time : number | string;
    blong_to_bild: number;
    
    
    constructor(props: FloorProps) {
      super(props);  
      this.floorNumber = props.floorNumber;    
      this.Arrival_Time = ''; 
      this.blong_to_bild = props.blong_to_bild       
    }
    
    display_time(time: number): void {
        this.Arrival_Time = time; // Update Arrival_Time property
        const element = document.querySelector('#time' + this.blong_to_bild + this.floorNumber); // Find the HTML element
        if (element) {
            if (this.Arrival_Time !== 0) {
                element.innerHTML = this.Arrival_Time.toString(); // Update inner HTML to display arrival time
            } else {
                element.innerHTML = ''; // Clear content if arrival time is zero
            }
        }
        if (this.Arrival_Time <= 0) {
            return; // Exit function if arrival time is zero or negative
        } else {
            setTimeout(() => {
                this.display_time(time - 0.5); // Call function recursively after a delay
            }, 500);
        }
    }
    
    
    setButtonColor = (newColor: string ,time : number) => {
        const Img = document.querySelector('#metal' +this.blong_to_bild  +this.floorNumber) as HTMLElement;
        if (Img){            
            Img.style.backgroundColor = newColor;
            setTimeout(() => this.setBackToOriginal(), time * 1000); 
        }
    };    
    setBackToOriginal = () => {        
        const Img = document.querySelector('#metal' + this.blong_to_bild + this.props.floorNumber) as HTMLElement;
        if (Img){            
            Img.style.backgroundColor = 'white'; 
        }
    }     
}

export default Floor;
