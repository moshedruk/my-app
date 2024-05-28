import BuildingStructure from './classes/buildingStructure';
import { elevatorsConfig, numBuildings, floorsConfig, defaultConfigFloors, defaultConfigElevators } from './configuration/config';
import Factory from './factory/Factory';
import './style/App.css';
import Render_App from './render/render_App';

// Function to create building structures based on configuration
function createBuildingStructures() {
  let buildings: BuildingStructure[];
  
  // Check if the configuration arrays are not set or not matching the number of buildings
  if (!elevatorsConfig || elevatorsConfig.length < numBuildings) {
    // Fill elevatorsConfig with default values if needed
    while (elevatorsConfig.length < numBuildings) {
      elevatorsConfig.push(defaultConfigElevators);
    }
  }
  if (!floorsConfig || floorsConfig.length < numBuildings) {
    // Fill floorsConfig with default values if needed
    while (floorsConfig.length < numBuildings) {
      floorsConfig.push(defaultConfigFloors);
    }
  }

  // Create building structures using Factory function
  buildings = Factory('bild', numBuildings);

  // Map through each building and create elevators for each building
  buildings.map((building, index) => {
    building.elevators = Factory('elevator', elevatorsConfig[index], building.number);
  });

  // Map through each building and create floors for each building
  buildings.map((building, index) => {
    building.floors = Factory('floor', floorsConfig[index], building.number, building.Minimum_selection_ele);
  });

  return buildings;
}

// Main App component
function App() {
  const buildings = createBuildingStructures();
  return (
    <div className='main' id={'main'}>
      {buildings.map((building, index) => (
        <Render_App BuildingStructure={building} key={index} />
      ))}
    </div>
  );
}

export default App;
