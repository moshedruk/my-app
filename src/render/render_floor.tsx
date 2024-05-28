import '../style/Floor.css'; 

// Interface for the props of the RenderFloor component
import { Render_by_Props_Floor } from "../Interfaces/interfaces";


// Functional component to render a floor
const RenderFloor: React.FC<Render_by_Props_Floor> = ({ floor }) => {    
    return (
        <div className='container-floor'>
            <div className="floor"></div>
            <div className='container-button'>
                <button 
                    className='metal' 
                    id={'metal' + floor.blong_to_bild + floor.floorNumber}
                    onClick={() => {
                        // Call the handleClick function passed in the floor's props
                        floor.props.handleClick(floor.props.floorNumber);
                    }}
                >
                    {floor.props.floorNumber}
                </button>
                <div 
                    className="time" 
                    id={'time' + floor.blong_to_bild + floor.props.floorNumber}
                >
                    {floor.Arrival_Time}  
                </div>                 
            </div>             
        </div>
    );
}

export default RenderFloor;
