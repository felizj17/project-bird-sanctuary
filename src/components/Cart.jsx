export default function Cart({ cart,total, bonus, onDelete }) {
  return (
    <div>
      <h2>Cart</h2>
      <p>Discount: {cart.length>3?10:0}%</p>
      <h4>Total: ${total}</h4>
      <ol>
        {cart.map((item,i) => (
          <li key={`cart-${item.id}${i}`} >{item.name} - ${item.amount}  <button className="delete" onClick={()=>onDelete(item)}>❌</button></li>
        ))}
      </ol>
      <ul>
        {bonus?
            bonus.map((bonus,i)=>(
                <li key={`bonus-${i}`}>{bonus}</li>
            )):null
        }
      </ul>
    </div>
  )
}
