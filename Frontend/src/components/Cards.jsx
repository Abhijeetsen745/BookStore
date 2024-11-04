import React from 'react'

function Cards({item}) {
    
    
  return (
    <>
    <div className='mt-5 p-2'>
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200  dark:text-white dark:bg-slate-900 dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between mt-5">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-500 hover:text-white duration-500">Buy Now</div>
    </div>
  </div>
</div>
     
</div>
    </>
  )
}

export default Cards
