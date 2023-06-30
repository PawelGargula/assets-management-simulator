import { useState } from 'react'
import './SimulationPopup.css'

export default function SimulationPopup() {
    const [ step, setStep ] = useState(1);

    return (
        <>
            <progress max="7" value={step} aria-label='simulation progress'></progress>
            <h2>Step {step}</h2>
            
        </>
    )
}