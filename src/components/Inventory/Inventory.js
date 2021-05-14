import {useEffect, useState} from "react";
import {getInventory} from "../../services/api.service";
import InventoryItem from "./Inventory-item";

export default function Inventory() {

    let [inventory, setInventory] = useState(null);
    useEffect(() => {
        getInventory().then(value => setInventory([...value.data]));
        console.log(inventory);
    }, [])

    return (
        <div>
            {
                inventory.map(value => <InventoryItem/>)
            }
        </div>
    );
}