import React from 'react'
import Image from 'next/image'
const Scarves = () => {

const scarfData = [
  { id: 1, name: 'Maroon Scarf', price: 620.00, description: 'Smooth Crinkle Crimps', image: '/scarf1.jpg'},
  { id: 2, name: 'Soft Pink Scarf', price: 640.00, description: 'Georgette Hijab', image: '/scarf2.jpg'},
  { id: 3, name: 'Mustard Scarf', price: 699.00, description: 'Jersey', image: '/scarf3.jpg'},
  { id: 4, name: 'Tea Pink Scarf', price: 730.00, description: 'Turkish Lawn', image: '/scarf4.jpg'},
  { id: 5, name: 'Shocking Pink Scarf', price: 730.00, description: 'Turkish Lawn', image: '/scarf5.jpg'},
  { id: 6, name: 'Cream Scarf', price: 730.00, description: 'Turkish Lawn', image: '/scarf6.jpg'},
]
  return (
    <div>
      <div className='scarves h-screen'>
        {scarfData.map((scarf) => (
          <div key={scarf.id} className='scarf-card'>
            <Image src={scarf.image} alt={scarf.name}/>
            <h3>{scarf.name}</h3>
            <p>{scarf.description}</p>
            <div className='price'>${scarf.price}</div>
            <button>Add to Cart</button>
            </div>
        ))}
      </div>

    </div>
  )
}
export default Scarves;