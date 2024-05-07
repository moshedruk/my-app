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
    
  }
  interface FloorState {
    buttonColor: string;
}
  

// מחלקת קומה (Floor)
class Floor extends Component<FloorProps,FloorState> {
    buttonColor: string;
    constructor(props: FloorProps) {
      super(props);
      this.buttonColor = 'a';      
    }
    
    setButtonColor = (newColor: string) => {
        this.buttonColor = newColor;
        console.log(this.buttonColor + 'lllllllllllll')
        ;
    };
    _render(): JSX.Element {  
              
        return (
            <div className='container-floor'>
            <div className="floor"/> 
            <div className='container-button'>
            <button 
            className={`metal`}
            onClick={() => {
            this.props.handleClick(this.props.floorNumber);}}>
            {this.props.floorNumber}
            </button>
            </div>             
            </div>           
        );
    }
}

export default Floor;
