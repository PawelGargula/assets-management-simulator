import { employees } from "./employees"
import documentIcon from '../assets/document-svgrepo-com.svg'
import desktopIcon from '../assets/desktop-svgrepo-com.svg'
import emailIcon from '../assets/email-1-svgrepo-com.svg'

class Content {
    constructor(title, buttonName) {
        this.title = title;
        this.buttonName = buttonName;
    }

    body = "";
    animate = () => {};
}

let startSimulationDate

const createExcelFile = new Content("Create Excel file with Employee data (Admin)", "Create")
createExcelFile.body = <table>
    <thead>
        <tr className="excel">
            <th colSpan={5}>Excel</th>
        </tr>
        <tr>
            <th scope="col">Full name</th>
            <th scope="col">Email</th>
            <th scope="col">Contract type</th>
            <th scope="col">Salary</th>
            <th scope="col">Hire date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
createExcelFile.animate = () => {
    startSimulationDate = Date.now()

    const firstSevenAssets = employees.slice(0, 4);
    const employeesValuesArray = firstSevenAssets.reduce(
        (accumulator, currentEmployee) => accumulator.concat(Object.values(currentEmployee)), []
    )

    const td = document.querySelectorAll("body td")

    employeesValuesArray.forEach((value, index) => {
        td[index].textContent = "";
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                td[index].textContent += letter
            }, i * 100)
        })
    })
}

const importExcelFile = new Content("Import Excel file by Web App (Admin)", "Import")
importExcelFile.body = (
    <div className="center-child">
        <img src={documentIcon} alt="Document" />
        <div>
            <span className="animated-arrow first">›</span>
            <span className="animated-arrow second">›</span>
            <span className="animated-arrow third">›</span>
        </div>
        <img src={desktopIcon} alt="Desktop" />
    </div>
)
importExcelFile.animate = () => {
    const arrows = document.querySelectorAll('body .animated-arrow')
    arrows.forEach(arrow => arrow.style.display = "inline")
}

const addEmployeeManually = new Content("Add Employee manually (Admin)", "Add");
addEmployeeManually.body = (
    <>
        <div className="web-app">
            <h3>Web App</h3>
            <label htmlFor="full-name">Full name</label>
            <input id="full-name" type="text" disabled />
            <label htmlFor="email">Email</label>
            <input id="email" type="text" disabled />
            <label htmlFor="contract-type">Contract type</label>
            <input id="contract-type" type="text" disabled />
            <label htmlFor="salary">Salary</label>
            <input id="salary" type="text" disabled />
            <label htmlFor="hire-date">Hire date</label>
            <input id="hire-date" type="text" disabled />
        </div>
        <div className="stand"></div>
        <div></div>
    </>
)
addEmployeeManually.animate = () => {
    const lastEmployee = employees[employees.length - 1];
    const employeesValuesArray = Object.values(lastEmployee)

    const inputs = document.querySelectorAll("input")

    employeesValuesArray.forEach((value, index) => {
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                inputs[index].value += letter
            }, i * 100)
        })
    })
}


const employee = employees[0];
const enterEmail = new Content("Enter email to authenticate (User)", "Enter")
enterEmail.body = (
    <>
        <div className="android-app">
            <h3>Web App on mobile</h3>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" disabled value=""/>
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
        <div className="center-child margin-top-2">
            <img src={desktopIcon} alt="Document" />
            <div>
                <span className="animated-arrow first">›</span>
                <span className="animated-arrow second">›</span>
                <span className="animated-arrow third">›</span>
            </div>
            <img src={emailIcon} alt="Email" />
        </div>
    </>
)
enterEmail.animate = () => {
    const input = document.querySelector("input")

    const employeeEmail = employee.email;

    const timeout = 60;
    [...employeeEmail].forEach((letter, i) => {
        setTimeout(() => {
            input.value += letter
        }, i * timeout)
    })

    setTimeout(() => {
        const arrows = document.querySelectorAll('body .animated-arrow')
        arrows.forEach(arrow => arrow.style.display = "inline")
    }, timeout * employeeEmail.length)
}

const clickAuthLink = new Content("Click authentication link (User)", "Authenticate")
clickAuthLink.body = (
    <>
        <div className="android-app">
            <h3>Mail service</h3>
            <span className="link">Authenticate</span>
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
        <div className="center-child margin-top-2">
            <img src={emailIcon} alt="Email" />
            <div>
                <span className="animated-arrow first">›</span>
                <span className="animated-arrow second">›</span>
                <span className="animated-arrow third">›</span>
            </div>
            <img src={desktopIcon} alt="Desktop" />
        </div>
    </>
)
clickAuthLink.animate = () => {
    const arrows = document.querySelectorAll('body .animated-arrow')
    arrows.forEach(arrow => arrow.style.display = "inline")

    const timeElapsed = Date.now() - startSimulationDate
    let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000)

    seconds = `${seconds} ${seconds === 1 ? "second" : "seconds"}`
    const timeElapsedString = minutes
    ? `${minutes} ${minutes === 1 ? "minute" : "minutes"} and ${seconds}`
    : seconds

    simulationCompleted.body = (
        <>
            <h3>Congratulations, You have completed all steps of the simulation in {timeElapsedString}</h3>
            <div className="firework"></div>
        </>
    )
}

const displayMyInformation = new Content("Display my information (User)", "Display")
displayMyInformation.body = (
    <>
        <div className="android-app">
            <h3>Employee Self-Service</h3>
            <h4>Hi {employee.fullName}</h4>
            <p>Check your informations</p>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" disabled value="*********@domain.com"/>
            <label htmlFor="contract-type">Contract type</label>
            <input id="contract-type" type="text" disabled value="********* ********" />
            <label htmlFor="salary">Salary</label>
            <input id="salary" type="text" disabled value="$****" />
            <label htmlFor="hire-date">Hire date</label>
            <input id="hire-date" type="text" disabled value="**/**/****" />
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
    </>
)
displayMyInformation.animate = () => {
    const inputs = document.querySelectorAll("input")
    const employeeValues = [
        employee.email,
        employee.contractType,
        employee.salary,
        employee.hireDate
    ]
    inputs.forEach((input, index) => {
        input.value = "";
        [...employeeValues[index]].forEach((letter, i) => {
            setTimeout(() => {
                input.value += letter
            }, i * 100)
        })
    })

    const timeElapsed = Date.now() - startSimulationDate
    let minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000)

    seconds = `${seconds} ${seconds === 1 ? "second" : "seconds"}`
    const timeElapsedString = minutes
    ? `${minutes} ${minutes === 1 ? "minute" : "minutes"} and ${seconds}`
    : seconds

    simulationCompleted.body = (
        <>
            <h3>Congratulations, You have completed all steps of the simulation in {timeElapsedString}</h3>
            <div className="firework"></div>
        </>
    )
}

const simulationCompleted = new Content("Simulation completed", "Finish")

export const contents = [
    createExcelFile,
    importExcelFile,
    addEmployeeManually,
    enterEmail,
    clickAuthLink,
    displayMyInformation,
    simulationCompleted
]