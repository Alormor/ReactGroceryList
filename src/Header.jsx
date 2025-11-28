import { useState } from "react";
import GroceryList from './GroceryList'

export default function Header(){
    let dataTest = { "items":[
        {
            "name": "bread",
            "quantity": "3"
        },
        {
            "name": "milk",
            "quantity": "5"
        },
        {
            "name": "beer",
            "quantity": "2"
        }]
    }

    const [list, setList] = useState(dataTest.items);

    const [inputValue, setInputValue] = useState("");
    const [newItem, setNewItem] = useState("");

    function clickButton (e) {
        let nuevo = {
            "name": inputValue,
            "quantity": "2"
        }
       setList([...list, nuevo])
        setInputValue("");
    };

    return (
        <>
            <h1>Grocery List</h1>
            <input 
                type = "text" 
                placeholder="e.g. eggs"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />

            <button onClick={clickButton}>Add</button>
            <GroceryList listItems={list}/>
        </>
    );
}