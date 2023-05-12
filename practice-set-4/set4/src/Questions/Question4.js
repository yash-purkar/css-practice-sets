import React from 'react'
import '../Styles/Question4.css'


const data = [
  {
    trial: 1,
    plan: "Basic Plan",
    price: "$9.99/mo",
    features: ["Ad-free music listening", "Download 10k songs/device", "Login from 3 devices"]
  },
  {

    trial: 1,
    plan: "Pro Plan",
    price: "$19.99/mo",
    features: ["Ad-free music listening", "Download 20k songs/device", "Login from 5 devices"]
  },
  {

    trial: 1,
    plan: "Enterprise Plan",
    price: "$19.99/mo",
    features: ["Ad-free music listening", "Download 40k songs/device", "Login from unlimited devices"]
  }
]


export const Question4 = () => {
  return (
    <div className='mainq4'>
      {
        data.map(data => <SingleCard data={data} key={data.price} />)
      }
    </div>
  )
}


const SingleCard = ({ data }) => {
  const { trial, plan, price, features } = data;
  return (
    <div className='cardq4'>
      <div className='info'>
        <p className='free-trial'>{trial} month Free</p>
        <h3 className='plan'>{plan}</h3>
        <p className='price'>{price}</p>
      </div>

      <ul className='features'>
        {
          features.map(item => <li key={item} className='list-itemq4'>{item}</li>)
        }

      </ul>
      <button className='signUpQ4'>Sign Up</button>
    </div>
  )
}

