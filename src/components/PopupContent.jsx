import Button from './Button'
import { useState } from 'react'

class Content {
    constructor(title, buttonName) {
        this.title = title;
        this.buttonName = buttonName;
    }
}

export default function PopupContent({ exitSimulation }) {
    const [ simulationStep, setSimulationStep ] = useState(0);

    const contents = [
        new Content("Create excel file", "Create"),
        new Content("Import excel file", "Import"),
        new Content("Add asset manually", "Add"),
        new Content("Label assets", "Label"),
        new Content("Create inventory", "Create"),
        new Content("Inventory by Android App", "Inventory"),
        new Content("Inventory by Web App", "Inventory"),
        new Content("Generate inventory reports", "Generate"),
        new Content("Simulation completed", "Finish")
    ]

    const stepsLength = contents.length;

    return (
        <>
            <h2>{contents[simulationStep].title}</h2>
            <progress max={stepsLength - 1} value={simulationStep} aria-label='simulation progress'></progress>
            <Button onClick={() => simulationStep === stepsLength - 1 ? exitSimulation() : setSimulationStep(simulationStep + 1)}>{contents[simulationStep].buttonName}</Button>   
        </>
    )
}