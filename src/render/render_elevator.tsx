import Elevator from "../classes/elevator";
import { Render_by_Props_elevator } from "../Interfaces/interfaces";
import '../style/elevator.css'; // ייבוא קובץ CSS



const _RenderElevator: React.FC<Render_by_Props_elevator> = ({ elevator }) => {    
    return (
        <div className='elevator' id={'elevator' + elevator.blong_to + elevator.number} >
            <img className='elevator-img' src={'/elv.png'} alt="מעלית" />
        </div>
    );
}
    
    export default _RenderElevator