import React from 'react';
import Floor from './cllasas/floor';
import BuildingStructure from './cllasas/buildingStructure';


function App(): JSX.Element {
  const buildingStructure = new BuildingStructure(8, 2);
  const floors: JSX.Element[] = [];  

  // פה אני יוצר את הקומות בהתאם לבקשה 
  for (let i = 0; i <= buildingStructure.numFloors; i++) {
    const floor = new Floor(i);    
    floors.unshift(      
      <div key={i} className="floor">
        <p> {floor.floorNumber}</p>
        
      </div>
    );
  }

  return (
    <div className='container'>
      {floors} {/* תצוגת כל הקומות */}
    </div>
  );
}

export default App;
