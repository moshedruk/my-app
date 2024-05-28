import Elevator from "../classes/elevator";
import '../style/elevator.css'; // ייבוא קובץ CSS

interface RenderProps {    
    elevator : Elevator
}

const _Renderelevator: React.FC<RenderProps> = ({ elevator }) => {    
    return (
        <div className='elevator' id={'elevator' + elevator.blong_to + elevator.number} >
            <img className='elevator-img' src={'/elv.png'} alt="מעלית" />
        </div>
    );
}
    
    export default _Renderelevator