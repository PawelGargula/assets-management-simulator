import { assets } from "../data/assets";
import documentIcon from '../assets/document-svgrepo-com.svg'
import desktopIcon from '../assets/desktop-svgrepo-com.svg'

class Content {
    constructor(title, buttonName) {
        this.title = title;
        this.buttonName = buttonName;
    }

    body = "";
    animate = () => {console.log("hi")};
}

const createExcelFile = new Content("Create excel file with assets' data", "Create")
createExcelFile.body = <table>
    <thead>
        <tr>
            <th colSpan={4}>Excel</th>
        </tr>
        <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Localization</th>
            <th scope="col">Reposible person</th>
        </tr>
    </thead>
    <tbody>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
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
        </tr>
        <tr>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
        </tr>
    </tbody>
</table>
createExcelFile.animate = () => {
    const firstSevenAssets = assets.slice(0, 7);
    const assetsValuesArray = firstSevenAssets.reduce(
        (accumulator, currentAsset) => accumulator.concat(Object.values(currentAsset)), []
    )

    const td = document.querySelectorAll("body td")

    assetsValuesArray.forEach((value, index) => {
        td[index].textContent = "";
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                td[index].textContent += letter;
            }, i * 100)
        })
    })
}

const importExcelFile = new Content("Import excel file by Web App", "Import")
importExcelFile.body = (
    <div className="center-child">
        <img src={documentIcon} alt="Document" />
        <span className="animated-arrow first">›</span>
        <span className="animated-arrow second">›</span>
        <span className="animated-arrow third">›</span>
        <img src={desktopIcon} alt="Desktop" />
    </div>
)
importExcelFile.animate = () => {
    const arrows = document.querySelectorAll('body .animated-arrow');
    arrows.forEach(arrow => arrow.style.display = "inline")
}

const addAssetManually = new Content("Add asset manually by Web App", "Add");
addAssetManually.body = (
    <>
        <div className="web-app">
            <h3>Web App</h3>
            <label htmlFor="id">Id</label>
            <input id="id" type="text" disabled />
            <label htmlFor="name">Name</label>
            <input id="name" type="text" disabled />
            <label htmlFor="Localization">Localization</label>
            <input id="Localization" type="text" disabled />
            <label htmlFor="responsible-person">Responsible person</label>
            <input id="responsible-person" type="text" disabled />
        </div>
        <div className="stand"></div>
        <div></div>
    </>
)
addAssetManually.animate = () => {
    const lastAsset = assets[assets.length - 1];
    const assetsValuesArray = Object.values(lastAsset)

    const inputs = document.querySelectorAll("input")

    assetsValuesArray.forEach((value, index) => {
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                inputs[index].value += letter;
            }, i * 100)
        })
    })
}

export const contents = [
    createExcelFile,
    importExcelFile,
    addAssetManually,
    new Content("Label assets", "Label"),
    new Content("Create inventory", "Create"),
    new Content("Inventory by Android App", "Inventory"),
    new Content("Inventory by Web App", "Inventory"),
    new Content("Generate inventory reports", "Generate"),
    new Content("Simulation completed", "Finish")
]