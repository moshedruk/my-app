import React, { Component } from 'react';
import '../style/Floor.css';
import { FloorProps } from '../Interfaces/interfaces';

// Floor component class
class Floor extends Component<FloorProps> {
    floorNumber: number;  // The floor number
    Arrival_Time: number | string;  // Estimated time of elevator arrival
    blong_to_bild: number;  // Building number to which the floor belongs

    // Constructor of the class
    constructor(props: FloorProps) {
        super(props);
        this.floorNumber = props.floorNumber;  // Initialize floor number
        this.Arrival_Time = '';  // Initialize estimated arrival time
        this.blong_to_bild = props.blong_to_bild;  // Initialize building number
    }
    
    // Function to display the estimated arrival time
    display_time(time: number): void {
        this.Arrival_Time = time;  // Update Arrival_Time property
        const element = document.querySelector('#time' + this.blong_to_bild + this.floorNumber);  // Find the HTML element
        if (element) {
            if (this.Arrival_Time !== 0) {
                element.innerHTML = this.Arrival_Time.toString();  // Update inner HTML to display arrival time
            } else {
                element.innerHTML = '';  // Clear content if arrival time is zero
            }
        }
        if (this.Arrival_Time <= 0) {
            return;  // Exit function if arrival time is zero or negative
        } else {
            setTimeout(() => {
                this.display_time(time - 0.5);  // Call function recursively after a delay
            }, 500);
        }
    }

    // Function to set the button color and reset it after a delay
    setButtonColor = (newColor: string, time: number) => {
        const Img = document.querySelector('#metal' + this.blong_to_bild + this.floorNumber) as HTMLElement;
        if (Img) {
            Img.style.backgroundColor = newColor;
            setTimeout(() => this.setBackToOriginal(), time * 1000); 
        }
    };

    // Function to reset the button color to the original color
    setBackToOriginal = () => {        
        const Img = document.querySelector('#metal' + this.blong_to_bild + this.props.floorNumber) as HTMLElement;
        if (Img) {            
            Img.style.backgroundColor = 'white'; 
        }
    }     
}

export default Floor;
