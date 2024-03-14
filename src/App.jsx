import { useState } from 'react'
import './App.css'
import Books from './components/Books/Books'
import Aside from './components/Aside/Aside'

function App() {
  const [carts, setCarts] = useState([]);


  const handleAddToCart = (book) => {
    const newCart = [...carts, book];
    setCarts(newCart);
  }

  return (
    <>
      <h1>Book Store</h1>
      <div style={{display:'flex', justifyContent:'space-between'}}>
        <div style={{width:'75%'}}>
            <Books handleAddToCart={handleAddToCart}></Books>
        </div>
        <div style={{width:'23%', border:'2px solid aqua', padding:'10px'}}>
          {
            carts.map((cart) => <Aside key={cart.id} cart={cart}></Aside>)
          }
        </div>
      </div>
    </>
  )
}

export default App
