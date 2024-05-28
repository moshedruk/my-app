import React from 'react';
import BuildingStructure from '../classes/buildingStructure';
import '../style/buildingStructure.css';
import _Renderfloor from './render_floor';
import _Renderelevator from './render_elevator';


// Define the props interface for the Render_App component
interface RenderProps {
    BuildingStructure: BuildingStructure; // A BuildingStructure object to render
}

// Functional component for rendering the entire building structure
const Render_App: React.FC<RenderProps> = ({ BuildingStructure }) => {
    return (
        <div className='BuildingStructure' id={'main' + BuildingStructure.number}>
            <div className="container-ele">
                {BuildingStructure.elevators.map((elevator, index) => (
                    <_Renderelevator key={index} elevator={elevator} />
                ))}
            </div>
            <div className='container-floors'>
                {BuildingStructure.floors.map((floor, index) => (
                    <div key={index}>
                        <_Renderfloor floor={floor} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Render_App 
