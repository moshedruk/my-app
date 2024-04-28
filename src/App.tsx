import React from 'react';
import Floor from './cllasas/floor';
import BuildingStructure from './cllasas/buildingStructure';

function App(): JSX.Element {
  const buildingStructure = new BuildingStructure(3, 2);
  const floors: JSX.Element[] = [];

  // פה אני יוצר את הקומות בהתאם לבקשה 
  for (let i = 1; i <= buildingStructure.numFloors; i++) {
    const floor = new Floor(i);
    floors.push(
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
