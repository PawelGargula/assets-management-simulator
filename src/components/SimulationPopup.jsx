import './style/SimulationPopup.css'
import './style/Progress.css'
import './style/Table.css'
import './style/Spinner.css'
import './style/AnimatedArrow.css'
import './style/WebApp.css'
import ExitSimulationButton from './ExitSimulationButton';
import StepBackButton from './StepBackButton';
import Button from './Button'
import { useState } from 'react'
import { contents } from '../data/contents'

export default function SimulationPopup({ exitSimulation }) {
    const [ simulationStep, setSimulationStep ] = useState(0);
    const [ animating, setAnimating ] = useState(false);

    const stepsLength = contents.length;

    return (
        <div className='popup'>
            {!animating && <ExitSimulationButton onClick={exitSimulation} />}
            {simulationStep !== 0 && !animating && <StepBackButton onClick={() => setSimulationStep(simulationStep -1)}/>}
            <progress max={stepsLength - 1} value={simulationStep} aria-label='simulation progress'></progress>
            <h2>{contents[simulationStep].title}</h2>
            <div className='body'>{contents[simulationStep].body}</div>
            {!animating 
            ? <Button onClick={
                () => {
                    if (simulationStep === stepsLength - 1) {
                        exitSimulation()
                    } else {
                        setAnimating(true)
                        contents[simulationStep].animate()
                        setTimeout(() => {
                            setSimulationStep(simulationStep + 1)
                            setAnimating(false)
                        }, 3000)
                    }
                }
            }>{contents[simulationStep].buttonName}</Button>
            : <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>}   
        </div>
    )
}