import './style/ExitSimulationButton.css';

export default function ExitSimulationButton({ onClick }) {
    return (
        <button className='exit-simulation' aria-label="exit simulation" onClick={onClick}>✖</button>
    )
}