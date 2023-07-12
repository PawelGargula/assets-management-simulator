import './style/StepBackButton.css';

export default function StepBackButton({ onClick }) {
    return (
        <button className='step-back' aria-label="step back in simulation" onClick={onClick}>‹</button>
    )
}