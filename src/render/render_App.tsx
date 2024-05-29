import React from 'react';
import '../style/buildingStructure.css';
import _Renderfloor from './render_floor';
import _RenderElevator from './render_elevator';
import { Render_by_Props_BuildingStructure } from "../Interfaces/interfaces";
import RenderFloor from './render_floor';

// Define the props interface for the Render_App component


// Functional component for rendering the entire building structure
const Render_App: React.FC<Render_by_Props_BuildingStructure> = ({ BuildingStructure }) => {
    return (
        <div className='BuildingStructure' id={'main' + BuildingStructure.number}>
            <div className="container-ele">
                {/* Goes over the array and pushes to the renderer component */}
                {BuildingStructure.elevators.map((elevator, index) => (
                    <_RenderElevator key={index} elevator={elevator} />
                ))}
            </div>
            <div className='container-floors'>
                {BuildingStructure.floors.map((floor, index) => (
                    <div key={index}>
                        {/* Goes over the array and pushes to the renderer component */}
                        <RenderFloor floor={floor} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Render_App 
