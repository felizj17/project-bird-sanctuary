import React, { useState } from 'react'
import birdData from './data/birds'
import bonusItems from './data/bonusItems'
import Bird from './components/Bird'
import Cart from './components/Cart'
import Checkout from './components/Checkout'
import './App.css'
function App() {
  const [bonus, setBonus] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const updateCart = bird => {
    if (cart.includes(bird)) {
      const newBird = {
        ...bird,
        id: parseInt(`${bird.id}${cart.length - 1}`),
      }
      setCart([...cart, newBird])
    } else {
      setCart([...cart, bird])
    }
    setTotal(total + bird.amount)
    if (total + bird.amount >= 100 && total + bird.amount < 300) {
      setBonus([bonusItems[0]])
    } else if (total + bird.amount >= 300 && total + bird.amount < 500) {
      setBonus([bonusItems[0], bonusItems[1]])
    } else if (total + bird.amount >= 500 && total + bird.amount < 1000) {
      setBonus([bonusItems[0], bonusItems[1], bonusItems[2]])
    } else if (total + bird.amount >= 1000) {
      setBonus(bonusItems)
    }
  }

  const submit = ({ first, last, email, zip }) => {
    setCart([])
    alert(
    `You have adopted birds. Thank you!`
    )
  }

  const onDelete = bird => {
    const newCart = cart.filter(item => item.id !== bird.id)
    const newTotal = total - bird.amount
    let newBonus
    if (newTotal >= 100 && newTotal < 300) {
      newBonus = [bonusItems[0]]
    } else if (newTotal >= 300 && newTotal < 500) {
      newBonus = [bonusItems[0], bonusItems[1]]
    } else if (newTotal >= 500 && newTotal < 1000) {
      newBonus = [bonusItems[0], bonusItems[1], bonusItems[2]]
    } else if (newTotal >= 1000) {
      newBonus = bonusItems
    }
    setBonus(newBonus)
    setCart(newCart)
    setTotal(newTotal)
  }
  return (
    <div id='app'>
      <section className='cart-checkout'>
        <aside className='Cart'>
          <Cart cart={cart} total={total} bonus={bonus} onDelete={onDelete} />
        </aside>
        <aside className='checkout'>
          <Checkout onSubmit={submit} />
        </aside>
      </section>
      <div className='birds'>
        {birdData.map(bird => (
          <Bird key={`bird-${bird.id}`} bird={bird} updateCart={updateCart} />
        ))}
      </div>
    </div>
  )
}

export default App
