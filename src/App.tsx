
import BuildingStructure from './classes/buildingStructure';
import { elevatorsConfig, numBuildings, floorsConfig, defaultConfigFloors, defaultConfigElevators } from './configuration/config';
import Factory from './factory/Factory';
import './style/App.css';
import Render_App from './render/render_App';


function createBuildingStructures() {
  let buildings: BuildingStructure[]
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
  buildings = Factory('bild', numBuildings);
  buildings.map((building, index) => {
    building.elevators = Factory('elevator', elevatorsConfig[index], building.number);
  })
  buildings.map((building, index) => {
    building.floors = Factory('floor', floorsConfig[index], building.number, building.Minimum_selection_ele);
  })
  return buildings
}

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

