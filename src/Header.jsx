import { useState } from "react";

function Header(){
    const[title, setTitle] = useState("My Title")
    const[counter, setCounter] = useState(0);

    function addItem(){
        setTitle("New Title");
        setCounter(counter+1);
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>Counter = {counter}</h2>
            <input type = "text"></input>
            <button onClick = {addItem}>Add</button>
        </>
    );
}

export default Header