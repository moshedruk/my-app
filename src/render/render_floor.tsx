import Floor from "../classes/floor";
import '../style/Floor.css'; 
interface RenderProps {
    floor: Floor;    
}

const _Renderfloor: React.FC<RenderProps> = ({ floor }) => {    
return (
    <div className='container-floor'>
        <div className="floor"></div>
        <div className='container-button'>
            <button 
                className='metal' 
                id={'metal' + floor.blong_to_bild + floor.floorNumber}
                onClick={() => {
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
export default _Renderfloor