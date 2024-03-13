import React from 'react'

export const Card = ({description, id, title, image,price}) => {
  return (
    <div className=' border flex flex-col justify-between border-emerald-600 p-5 mb-5'>
        <div className=''>
        <div className='w-[200px] h-[300px]'>
        <img className='w-full h-full object-contain' src={image} alt="img" />
        </div>
        <h2>{title}</h2>
        <strong>{price}</strong>
        <p>{description.length > 50 ? description.slice(0,50) + "..." : description}</p>
        </div>
        <button className='w-full py-2 bg-violet-500 hover:bg-violet-700 text-bold leading-6 text-white'>Add</button>
    </div>
  )
}
