import React from 'react'

export default function Bird({ bird, updateCart }) {

  return (
    <div className='card'>
      <h2>{bird.name}</h2>
      <p>Adoption Cost: ${bird.amount}</p>
      <img src={bird.img} alt={`face of ${bird.name}`}/>
      <button onClick={()=>updateCart(bird)}>Adopt</button>
    </div>
  )
}
