import { useState } from "react";

export default function Item({item, quantity, onDelete}){  
    var item = item.charAt(0).toUpperCase()+item.substring(1);
    
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(item);


    const handleEdit = () => {

    }
    
    return (
        <>
            <li>{item} - {quantity} <button onClick={handleEdit}>✏️</button> <button onClick={onDelete}>🗑️</button></li>
        </>
    );
}