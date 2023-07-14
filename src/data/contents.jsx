import { assets } from "../data/assets";
import documentIcon from '../assets/document-svgrepo-com.svg'
import desktopIcon from '../assets/desktop-svgrepo-com.svg'
import printerIcon from '../assets/printer-svgrepo-com.svg'
import monitorIcon from '../assets/monitor-svgrepo-com.svg'

class Content {
    constructor(title, buttonName) {
        this.title = title;
        this.buttonName = buttonName;
    }

    body = "";
    animate = () => {};
}

const createExcelFile = new Content("Create Excel file with assets' data", "Create")
createExcelFile.body = <table>
    <thead>
        <tr className="excel">
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

const importExcelFile = new Content("Import Excel file by Web App", "Import")
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

const addAssetManually = new Content("Add asset manually", "Add");
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
            <label htmlFor="areas">Areas</label>
            <input id="areas" type="text" disabled />
            <label htmlFor="teams">Teams</label>
            <input id="teams" type="text" disabled />
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
        "Team NS: Jan Kowalski"
    ]

    inventoryValues.forEach((value, index) => {
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                inputs[index].value += letter
            }, i * 60)
        })
    })
}
const inventoryByAndroidApp = new Content("Inventory by Android App", "Login")
inventoryByAndroidApp.body = (
    <>
        <div className="android-app">
            <h3>Android App</h3>
            <label htmlFor="login">Login</label>
            <input id="login" type="text" disabled value=""/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" disabled value=""/>
            <label htmlFor="inventory-name">Inventory name</label>
            <input id="inventory-name" type="text" disabled value=""/>
            <label htmlFor="team">Team</label>
            <input id="team" type="text" disabled value=""/>
            <label htmlFor="area">Area</label>
            <input id="area" type="text" disabled value=""/>
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
    </>
)
inventoryByAndroidApp.animate = () => {
    const inputs = document.querySelectorAll("input")

    const androidValues = [
        "jkowalski",
        "12345678",
        "Inventory 2023 - Nowy Sącz, Kraków",
        "Team NS",
        "Nowy Sącz"
    ]

    androidValues.forEach((value, index) => {
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                inputs[index].value += letter
            }, i * 60)
        })
    })
}

const firstAsset = assets[0]
const scanByCamera = new Content("Scan by camera", "Scan")
scanByCamera.body = (
    <>
        <img src={desktopIcon} alt="Desktop" />
        <div className="android-app">
            <h3>Android App</h3>
            <div className="camera">
                <h4>Camera</h4>
                <div className="label center-vertically">
                    <span>{firstAsset.name}</span>
                    <div className="barcode display-flex">
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
                    <span>{firstAsset.id}</span>
                </div>
            </div>
            <label htmlFor="id">Id</label>
            <input id="id" type="text" disabled value="" />
            <label htmlFor="name">Name</label>
            <input id="name" type="text" disabled value="" />
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
    </>
)
scanByCamera.animate = () => {
    const labelDOM = document.querySelector(".camera .label");
    const duration = 2000
    labelDOM.animate(
        [
            { opacity: 0 },
            { opacity: 1 },
            { opacity: 0 }
        ],
        {
            duration: duration
        }
    )
    
    setTimeout(() => {
        const inputs = document.querySelectorAll("input")
        const firstAssetValues = Object.values(firstAsset);
        inputs.forEach((input, index) => {
            [...firstAssetValues[index]].forEach((letter, i) => {
                setTimeout(() => {
                    input.value += letter
                }, i * 100)
            })
        })
    }, duration / 2)
}

const secondAsset = assets[1];
const scanByScaner = new Content("Scan by 1D/2D scanner", "Scan")
scanByScaner.body = (
    <>
        <img src={monitorIcon} alt="Monitor" />
        <div className="label center-vertically">
            <span>{secondAsset.name}</span>
            <div className="barcode display-flex">
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
            <span>{secondAsset.id}</span>
        </div>
        <div className="cone center-vertically" aria-label="scanning laser"></div>
        <div className="android-app">
            <h3>Android App</h3>
            <label htmlFor="id">Id</label>
            <input id="id" type="text" disabled value="" />
            <label htmlFor="name">Name</label>
            <input id="name" type="text" disabled value="" />
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
    </>
)
scanByScaner.animate = () => {
    const cubeDOM = document.querySelector(".cone")

    const duration = 1000
    cubeDOM.animate(
        [
            { opacity: 0 },
            { opacity: .6 },
            { opacity: 0 }
        ],
        {
            duration: duration
        }
    )

    setTimeout(() => {
        const inputs = document.querySelectorAll("input")
        const secondAssetValues = Object.values(secondAsset);
        inputs.forEach((input, index) => {
            [...secondAssetValues[index]].forEach((letter, i) => {
                setTimeout(() => {
                    input.value += letter
                }, i * 100)
            })
        })
    }, duration / 2)
}

const readByRFID = new Content("Read by RFID reader", "Read")
readByRFID.body = (
    <>
        <img src={printerIcon} alt="Printer" />
        <div className="cone center-vertically radio-wave" aria-label="radio wave"></div>
        <div className="android-app">
            <h3>Android App</h3>
            <label htmlFor="id">Id</label>
            <input id="id" type="text" disabled value="" />
            <label htmlFor="name">Name</label>
            <input id="name" type="text" disabled value="" />
        </div>
        <div>
            <div>◁</div>
            <div>◯</div>
            <div>◻</div>
        </div>
    </>
)
readByRFID.animate = () => {
    const thirdAsset = assets[2]
    const cubeDOM = document.querySelector(".cone.radio-wave")

    const duration = 1000
    cubeDOM.animate(
        [
            { opacity: 0 },
            { opacity: .1 },
            { opacity: 0 }
        ],
        {
            duration: duration
        }
    )

    setTimeout(() => {
        const inputs = document.querySelectorAll("input")
        const thirdAssetValues = Object.values(thirdAsset);
        inputs.forEach((input, index) => {
            [...thirdAssetValues[index]].forEach((letter, i) => {
                setTimeout(() => {
                    input.value += letter
                }, i * 100)
            })
        })
    }, duration / 2)
}

const pawelAssets = assets.filter(a => a.responsiblePerson === "Paweł Kowalski")
const inventoryByWebApp = new Content("Inventory by Web App", "Check")
inventoryByWebApp.body = (
    <>
    <div className="web-app">
            <h3>Web App</h3>
            <h4>Your assets</h4>
            <div className="overflow-auto">
                <table>
                    <thead>
                        <tr className="dark">
                            <th scope="col">Status</th>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>-</td>
                            <td>{pawelAssets[0].id}</td>
                            <td>{pawelAssets[0].name}</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>{pawelAssets[1].id}</td>
                            <td>{pawelAssets[1].name}</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>{pawelAssets[2].id}</td>
                            <td>{pawelAssets[2].name}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="stand"></div>
        <div></div>
    </>
)
inventoryByWebApp.animate = () => {
    const statusesDOM = document.querySelectorAll("tr > td:first-child")

    statusesDOM.forEach((status, index) => {
        setTimeout(() => {
            status.textContent = index === 2 ? "❌" : "✅"
        }, 600 * index)
    });
}

export const contents = [
    createExcelFile,
    importExcelFile,
    addAssetManually,
    printLabels,
    labelAssets,
    createInventory,
    inventoryByAndroidApp,
    scanByCamera,
    scanByScaner,
    readByRFID,
    inventoryByWebApp,
    new Content("Generate inventory reports", "Generate"),
    new Content("Simulation completed", "Finish")
]