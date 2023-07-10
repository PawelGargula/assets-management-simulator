import './SimulationPopup.css'
import PopupContent from './PopupContent';
import ExitSimulationButton from './ExitSimulationButton';

export default function SimulationPopup({ exitSimulation }) {
    return (
        <div className='popup'>
            <ExitSimulationButton onClick={exitSimulation} />
            <PopupContent />
        </div>
    )
}