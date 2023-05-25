import React from 'react'

function Card({image, title, text}) {


  return (
    <section>
    <img src={image} alt="logo" />
    <h3>{title}</h3>
    <p>{text}</p>
    </section>
  )
}

export default Card