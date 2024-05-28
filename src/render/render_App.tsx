import React from 'react';
import BuildingStructure from '../classes/buildingStructure';
import '../style/buildingStructure.css';
import _Renderfloor from './render_floor';
import _Renderelevator from './render_elevator';
import { Render_by_Props_BuildingStructure } from "../Interfaces/interfaces";

// Define the props interface for the Render_App component


// Functional component for rendering the entire building structure
const Render_App: React.FC<Render_by_Props_BuildingStructure> = ({ BuildingStructure }) => {
    return (
        <div className='BuildingStructure' id={'main' + BuildingStructure.number}>
            <div className="container-ele">
                {/* Goes over the array and pushes to the renderer component */}
                {BuildingStructure.elevators.map((elevator, index) => (
                    <_Renderelevator key={index} elevator={elevator} />
                ))}
            </div>
            <div className='container-floors'>
                {BuildingStructure.floors.map((floor, index) => (
                    <div key={index}>
                        {/* Goes over the array and pushes to the renderer component */}
                        <_Renderfloor floor={floor} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Render_App 
