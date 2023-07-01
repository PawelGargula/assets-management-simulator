import Button from './Button.jsx'
import Steps from './Steps.jsx'
import SimulationPopup from './SimulationPopup.jsx'
import { useState } from 'react'

export default function Main() {
    const [ simulationStarted, setSimulationStarted ] = useState(false);

    function exitPopupFunction() {
        setSimulationStarted(false);
    }

    return (
        <main>
            {
                !simulationStarted ? 
                <>
                    <Steps />
                    <Button onClick={() => setSimulationStarted(true)}>Start simulation</Button>
                </>
                :
                <SimulationPopup exitPopupFunction={exitPopupFunction}/>
            }
        </main>
    )
}