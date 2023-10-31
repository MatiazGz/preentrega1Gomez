import { useState } from 'react'
import './App.css'
import { NavBar } from './components/NavBar'
import { CartWidget } from './components/CartWidget'
import { ItemListContainer } from './components/ItemListContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar>
    <CartWidget></CartWidget>
    </NavBar>
    <ItemListContainer greetin ></ItemListContainer>
    </>
  )
}

export default App
