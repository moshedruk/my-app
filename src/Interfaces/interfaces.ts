import BuildingStructure from "../classes/buildingStructure";
import Elevator from "../classes/elevator";
import Floor from "../classes/floor";

// Interface for the properties of the BuildingStructure component
export interface BuildingStructureProps {
    numFloors: number;  // Number of floors in the building
    numElevators: number;  // Number of elevators in the building
    number: number;  // Building number
}

// Enum representing the status of an elevator
export enum Enum_status {
    notActive = "notActive",
    Active = "Active"
}

// Interface for the properties of the Elevator component
export interface ElevatorProps {
    currentFloor: number;  // Current floor of the elevator
    estimatedTimeToDestination: number;  // Estimated time to the destination floor
    queue: number[];  // Queue of floors the elevator needs to visit
    number: number;  // Elevator number
    last_floor: number;  // Last floor the elevator visited
    status: Enum_status;  // Status of the elevator (active or not active)
    blong_to: number;  // Building number to which the elevator belongs
}

// Interface for the properties of the Floor component
export interface FloorProps {
    floorNumber: number;  // Floor number
    handleClick: (floorNumber: number) => void;  // Function to handle button click
    blong_to_bild: number;  // Building number to which the floor belongs
}

// Interface for rendering a BuildingStructure object
export interface Render_by_Props_BuildingStructure {
    BuildingStructure: BuildingStructure;  // A BuildingStructure object to render
}

// Interface for rendering a Floor object
export interface Render_by_Props_Floor {
    floor: Floor;  // A Floor object to render
}

// Interface for rendering an Elevator object
export interface Render_by_Props_elevator {    
    elevator: Elevator;  // An Elevator object to render
}
