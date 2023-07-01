import Button from './Button'
import { useState } from 'react'

export default function PopupContent() {
    const [ simulationState, setSimulationState ] = useState(0);

    return (
        <>
            <h2>{simulationState}</h2>
            <progress max="7" value={simulationState} aria-label='simulation progress'></progress>
            <Button onClick={() => setSimulationState(simulationState + 1)}>Button {simulationState}</Button>   
        </>
    )
}