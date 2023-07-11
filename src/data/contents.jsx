import { assets } from "../data/assets";

class Content {
    constructor(title, buttonName) {
        this.title = title;
        this.buttonName = buttonName;
    }

    body;
    animate = () => {};
}

const createExcelFile = new Content("Create excel file", "Create")
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
    const assetsValuesArray = assets.reduce(
        (accumulator, currentAsset) => accumulator.concat(Object.values(currentAsset)), []
    )

    const td = document.querySelectorAll("body td")

    assetsValuesArray.forEach((value, index) => {
        td[index].textContent = "";
        [...value].forEach((letter, i) => {
            setTimeout(() => {
                td[index].textContent += letter;
            }, i * 100 + index)
        })
    })
}

export const contents = [
    createExcelFile,
    new Content("Import excel file", "Import"),
    new Content("Add asset manually", "Add"),
    new Content("Label assets", "Label"),
    new Content("Create inventory", "Create"),
    new Content("Inventory by Android App", "Inventory"),
    new Content("Inventory by Web App", "Inventory"),
    new Content("Generate inventory reports", "Generate"),
    new Content("Simulation completed", "Finish")
]