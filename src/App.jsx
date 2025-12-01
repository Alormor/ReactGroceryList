import { useState } from 'react'
import './App.css'
import GroceryList from './GroceryList'


export default function App() {
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

  const [newItem, setNewItem] = useState("");
  const [quantity, setQuantity] = useState("");

  function clickButton () {
    let itemToList = {
      "name": newItem,
      "quantity": quantity
    }
    setList([...list, itemToList])
    setNewItem("");
    setQuantity("");
  };

  function handleEdit(index) {

  }

  function handleRemove(index) {
    setList(currentList => currentList.filter((item, i) => i !== index));
  }

  function handleDeleteAll(){
    setList([]);
  }

  return (
    <>
      <h1>Grocery List</h1>
      <input 
        id = "product"
        type = "text" 
        placeholder="e.g. eggs"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <input 
        id = "quantity"
        type = "text" 
        placeholder="e.g. 3"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />

      <button 
        id="add"
        onClick={clickButton}
      >Add</button>

      <GroceryList listItems={list} onEdit={handleEdit} onRemove={handleRemove}/>

      <button 
        id='removeAll'
        onClick={handleDeleteAll}
      >Remove all</button>
    </>
  )
}