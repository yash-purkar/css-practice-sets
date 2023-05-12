import React from 'react'
import '../Styles/Question5.css'
import birds from '../Images/birds.jpg'
export const Question5 = () => {
  return (
    <div>
      <h2>Review Order</h2>
      <div className='item-detail'>
        <div className='item-img'>
          <h4>Item</h4>
          <img src={birds} alt="product" width="50" height="50" />
        </div>
        <div className='item-qty'>
          <h4>Qty</h4>
          <p>1</p>
        </div>
        <div className="total-price">
          <h4>Total</h4>
          <p>INR 999</p>
        </div>
      </div>
      <div className="item-description">
        <p>Limited addition cactus print bag 1 litre, green color</p>
      </div>
      <div>
        <p>Subtotal</p>
        <p>INR 999</p>
      </div>
      <div>
        <p>GST</p>
        <p>INR179</p>
      </div>
      <div>
        <p>Grand Total</p>
        <p>INR 1178</p>
      </div>
      <button>Place order</button>
      <p>Cart Secured by Razorpay</p>
    </div>
  )
}
