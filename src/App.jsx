import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import GroceryList from './GroceryList'
import Footer from './Footer'

function App() {
  return (
    <>
      <Header></Header>
      <GroceryList></GroceryList>
      <Footer></Footer>
    </>
  )
}

export default App
