import Item from "./Item";

function GroceryList({}){  
    let list = ["eggs", "milk", "bread", "tomatoes"];

    let itemSequence = list.map((item, i) => <Item item={item}></Item>)
     
    return (
        <>
            {itemSequence}
        </>
    )
}

export default GroceryList