import { useState } from 'react'
import Navbar from './components/Navbar'
import Store from './components/Store'


function App() {

  const storeName = 'SkateShop'

  const skateboards = [
    {
      id: 1,
      name: "Street Cruiser",
      size: "8.0",
      style: "Street",
      design: "Classic Black",
      price: 75.99
    },
    {
      id: 2,
      name: "Pro Trickster",
      size: "8.25",
      style: "Park",
      design: "Flame Graphics",
      price: 89.99
    },
    {
      id: 3,
      name: "Vert Master",
      size: "8.5",
      style: "Vert",
      design: "Skull and Bones",
      price: 95.00
    },
    {
      id: 4,
      name: "Longboard Cruiser",
      size: "9.0",
      style: "Cruising",
      design: "Palm Trees",
      price: 120.49
    }
  ];

  return (
    <>
      <Navbar name = {storeName} />
      <Store name={storeName} skateboards={skateboards}/>
    </>
  )
}

export default App
