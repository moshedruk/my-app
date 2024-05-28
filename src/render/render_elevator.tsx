import Elevator from "../classes/elevator";
import '../style/elevator.css'; // ייבוא קובץ CSS

interface RenderProps {    
    ele : Elevator
}

const _Renderelevator: React.FC<RenderProps> = ({ ele }) => {    
    return (
        <div className='elevator' id={'elevator' + ele.blong_to + ele.number} >
            <img className='elevator-img' src={'/elv.png'} alt="מעלית" />
        </div>
    );
}
    
    export default _Renderelevator