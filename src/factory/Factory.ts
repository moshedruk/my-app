
import Floor from '../classes/floor';
import BuildingStructure from '../classes/buildingStructure';
import { Enum_status } from '../Interfaces/interfaces';
import Elevator from '../classes/elevator';


//  Factory function to create instances of different classes based on the specified type and size.
//  The type of object to create ('bild' for building structures, 'elevator' for elevators, 'floor' for floors).
//  Blong_to Optional parameter specifying the building number to which the object belongs.
//  handleClick Optional parameter for the click event handler function for floors.
//  returns An array of instances of the specified type. 
function Factory(type: string, size: number, Blong_to?: number, handleClick?: (floorNumber: number) => void) {
    const defaultValue = 0;
    const defaultValueF = () => { }
    if (type === 'bild') {
        const buildings: any = [];
        for (let i = 0; i < size; i++) {
            buildings.push(new BuildingStructure({
                numFloors: size ,
                numElevators: size,
                number: i
            }));
        }
        return buildings;
    }
    if (type === 'elevator') {
        const elevators = [];
        for (let i = 0; i < size; i++) {
            elevators.push(new Elevator({
                currentFloor: 0,
                estimatedTimeToDestination: 0,
                queue: [],
                number: i,
                last_floor: 0,
                status: Enum_status.notActive,
                blong_to: Blong_to !== undefined ? Blong_to : defaultValue,
            }));
        }
        return elevators;
    }
    if (type === 'floor') {
        const floors = [];
        for (let i = 0; i <= size; i++) {
            const floor = new Floor({ floorNumber: i, handleClick: handleClick !== undefined ? handleClick : defaultValueF, blong_to_bild: Blong_to !== undefined ? Blong_to : defaultValue, });
            floors.push(floor);
        }
        return floors;
    }
}
export default Factory;