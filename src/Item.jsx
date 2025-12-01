export default function Item({item, quantity, onEdit, onDelete}){  
    var item = item.charAt(0).toUpperCase()+item.substring(1);
    if(!quantity) quantity = 1;

    return (
        <>
            <li>{item} - {quantity} <button onClick={onEdit}>✏️</button> <button onClick={onDelete}>🗑️</button></li>
        </>
    );
}