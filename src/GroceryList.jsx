import { useState } from "react";
import Item from "./Item";

function GroceryList({listItems, onEdit, onRemove}){ 
    

    function edit(index){
        onEdit(index);
    }

    function remove(index){
        onRemove(index);
    }

    let itemSequence = listItems.map((item, index) => 
        <Item 
            key={index} 
            item={item.name}
            quantity={item.quantity}
            onEdit={()=>edit(index)}
            onDelete={()=>remove(index)}
        ></Item>);
    

    return (
        <ul>
            {itemSequence}
        </ul>
    )
}

export default GroceryList