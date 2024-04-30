import React, { ReactNode } from 'react';
import Floor from './cllasas/floor';
import BuildingStructure from './cllasas/buildingStructure';
import Elevator from './cllasas/elevator';


function App(){
  // const buildingStructure = new BuildingStructure(8, 3);
  
  return (
    <div className='container'>  
    
    <BuildingStructure numFloors={6} numElevators={1}/>
     
    </div>
  );
}

export default App;



//   const handleFloorButtonClick = (floorNumber: number) => {
//     // קריאה לפונקציה שמבצעת את התנועה לקומה המתאימה באובייקט המעלית
//     elevator.moveToFloor(floorNumber);
//     console.log(elevator.currentFloor);
//     const elevatorImg = document.querySelector('.elevator-img') as HTMLElement;
//     if (elevatorImg) {
//         elevatorImg.style.transform = `translateY(-${floorNumber * 110 }px)`;
        
//         console.log(elevator.currentFloor)
//     }
// };



//   for (let i = 0; i < buildingStructure.numElevators; i++) {        
//     elevtars.unshift(      
//       <div key={i} >
//         <img className='elevator-img' src={'/elv.png'} alt="מעלית" />        
//       </div>
//     );
// }

  
//   for (let i = 0; i <= buildingStructure.numFloors; i++) {
//     const floor = new Floor(i);    
//     floors.unshift(      
//       <div key={i} className="floor">  
//       <div className='container-button'>     
//       <button className="metal linear" onClick={() => handleFloorButtonClick(floor.floorNumber)}> {floor.floorNumber} </button>
           
//         </div> 
//       </div>
//     );
// }


  
