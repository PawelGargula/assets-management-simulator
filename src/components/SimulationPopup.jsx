import './SimulationPopup.css'
import PopupContent from './PopupContent';
import ExitSimulationButton from './ExitSimulationButton';

export default function SimulationPopup({ exitPopupFunction }) {
    return (
        <>
            <ExitSimulationButton onClick={exitPopupFunction} />
            <PopupContent />
        </>
    )
}