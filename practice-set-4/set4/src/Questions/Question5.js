import React from 'react'
import '../Styles/Question5.css'
import birds from '../Images/birds.jpg'
export const Question5 = () => {
  return (
    <div className='containerq5'>
      <div className='mainq5'>
        <h2 className='heading'>Review Order</h2>
        <div className='item-detail'>
          <div className='item-img'>
            <p className='heads font-bold'>Item</p>
            <img src={birds} alt="product" width="50" height="50" />
          </div>
          <div className='qty-price-box'>

            <div className='item-qty'>
              <p className='heads font-bold'>Qty</p>
              <p className='data'>1</p>
            </div>
            <div className="total-price">
              <p className='heads font-bold'>Total</p>
              <p className='data'>INR 999</p>
            </div>
          </div>
        </div>
        <div className="item-description">
          <p className='desc'>Limited addition cactus print bag 1 litre, green color</p>
        </div>
        <div className='total-info'>
          <p>Subtotal</p>
          <p className='prices font-bold'>INR 999</p>
        </div>
        <div className='total-info'>
          <p>GST</p>
          <p className='prices font-bold'>INR 179</p>
        </div>
        <div className='total-info grand-total'>
          <p className='font-bold  grand-total'>Grand Total</p>
          <p className='prices font-bold grand-price'>INR 1178</p>
        </div>
        <button className='place-order-btn'>Place order</button>
        <p className='secured-by'>Cart Secured by Razorpay</p>
      </div>
    </div>
  )
}
