function Item({item}){  
    var item = item.charAt(0).toUpperCase()+item.substring(1);
    return (
        <>
            <li>{item} <button>✏️</button> <button>🗑️</button></li>
        </>
    );
}

export default Item