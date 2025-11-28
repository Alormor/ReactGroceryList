import { useState } from "react";
import Item from "./Item";

function GroceryList({listItems}){ 
    
    function borrar(){
        
    }

    let itemSequence = listItems.map((item, index) => 
        <Item 
            key={index} 
            item={item.name}
            quantity={item.quantity}
            onDelete={()=>borrar()}
        ></Item>);
    

    return (
        <ul>
            {itemSequence}
        </ul>
    )
}

export default GroceryList