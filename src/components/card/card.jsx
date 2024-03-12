import React from 'react'

export const Card = ({description, id, title, image}) => {
  return (
    <div>
        <img src={image} alt="img" />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
  )
}
