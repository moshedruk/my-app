import React, { Component } from 'react';
import '../css/Floor.css'; 



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
        this.Arrival_Time = time;        
        const element = document.querySelector('#time' +this.blong_to_bild+ this.floorNumber);
        if (element) {     
            if(this.Arrival_Time != 0) { 
                element.innerHTML = this.Arrival_Time.toString();
            }
            else{
                element.innerHTML = '';  }      
        
        }                
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
            setTimeout(() => this.setBackToOriginal(), time * 1000); 
        }
    };    
    setBackToOriginal = () => {        
        const Img = document.querySelector('#metal' + this.blong_to_bild + this.props.floorNumber) as HTMLElement;
        if (Img){            
            Img.style.backgroundColor = 'white'; 
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
                        <div 
                            className="time" 
                            id={'time' + this.blong_to_bild + this.props.floorNumber}                             
                        >
                              {this.Arrival_Time}
                        </div>
                 
                </div>             
            </div>           
        );
    }
}

export default Floor;
