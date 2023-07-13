import { assets } from "../data/assets";
import documentIcon from '../assets/document-svgrepo-com.svg'
import desktopIcon from '../assets/desktop-svgrepo-com.svg'
import printerIcon from '../assets/printer-svgrepo-com.svg'

class Content {
    constructor(title, buttonName) {
        this.title = title;
        this.buttonName = buttonName;
    }

    body = "";
    animate = () => {};
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
                td[index].textContent += letter
            }, i * 100)
        })
    })
}

const importExcelFile = new Content("Import excel file by Web App", "Import")
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
                inputs[index].value += letter
            }, i * 100)
        })
    })
}

const printLabels = new Content("Print labels for assets by Web App", "Print")
printLabels.body = (
    <div className="center-child">
        <img src={printerIcon} alt="printer" />
        <div>
            <span className="animated-arrow first">›</span>
            <span className="animated-arrow second">›</span>
            <span className="animated-arrow third">›</span>
        </div>
        <div className="label">
            <span></span>
            <div className="barcode">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <span></span>
        </div>
    </div>   
)
printLabels.animate = () => {
    const arrows = document.querySelectorAll('body .animated-arrow')
    arrows.forEach(arrow => arrow.style.display = "inline")

    const someAssets = assets.slice(0, 4);
    
    const labelFirstLineDOM = document.querySelector(".label > span:first-child")
    const labelLastLineDOM = document.querySelector(".label > span:last-child")
    const barcodeDOM = document.querySelector(".barcode")

    someAssets.forEach((asset, index) => {
        setTimeout(() => {
            labelFirstLineDOM.textContent = asset.name
            barcodeDOM.style.display = "flex"
            labelLastLineDOM.textContent = asset.id
        }, 800 * index)
    })
}

const labelAssets = new Content("Label assets", "Label");
labelAssets.body = (
    <div className="center-child">
        <div className="labels">
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div>
            <span className="animated-arrow first" style={{display: "none"}}>›</span>
            <span className="animated-arrow second" style={{display: "none"}}>›</span>
            <span className="animated-arrow third" style={{display: "none"}}>›</span>
        </div>
        <div className="asset center-child">
            <div className="label-on-asset">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <span>Asset</span>
        </div>
    </div>
)
labelAssets.animate = () => {
    const arrows = document.querySelectorAll('body .animated-arrow')
    arrows.forEach(arrow => arrow.style.display = "inline")

    const labelsDOM = document.querySelectorAll(".labels > div")
    const labelOnAssetDOM = document.querySelector(".label-on-asset")

    const timeout = 800;
    labelsDOM.forEach((label, index) => {
        setTimeout(() => {
            label.remove();
            labelOnAssetDOM.style.display = "flex";
            setTimeout(() => {
                if (index !== labelsDOM.length - 1) {
                    labelOnAssetDOM.style.display = "none"
                }
            }, timeout / 2)
        }, timeout * index)
    })
}

const createInventory = new Content("Create inventory", "Create")
createInventory.body = (
    <>
        <div className="web-app">
            <h3>Web App</h3>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" disabled />
            <label htmlFor="area">Area</label>
            <input id="area" type="text" disabled />
            <label htmlFor="team">Team</label>
            <input id="team" type="text" disabled />
        </div>
        <div className="stand"></div>
        <div></div>
    </>
)
createInventory.animate = () => {
    const inputs = document.querySelectorAll("input")

    const inventoryValues = [
        "Inventory 2023 - Nowy Sącz, Kraków",
        "Nowy Sącz, Kraków",
        "Jan Kowalski, Paweł Kowalski"
    ]

    inventoryValues.forEach((value, index) => {
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                inputs[index].value += letter
            }, i * 60)
        })
    })
}

export const contents = [
    createExcelFile,
    importExcelFile,
    addAssetManually,
    printLabels,
    labelAssets,
    createInventory,
    new Content("Inventory by Android App", "Inventory"),
    new Content("Inventory by Web App", "Inventory"),
    new Content("Generate inventory reports", "Generate"),
    new Content("Simulation completed", "Finish")
]