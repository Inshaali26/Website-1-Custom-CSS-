import React from 'react'

const Bags = () => {
  
  const bagData = [
    { id: 1, name: 'GUCCI', price: 80000, description: 'Luxurious bag', image: '/GUCCI.jpg' },
    { id: 2, name: 'CHRISTIAN DIOR', price: 100000, description: 'Fashionable bag', image: '/CHRISTIAN DIOR.jpg' },
    { id: 3, name: 'LOUIS VUITTON', price: 200000, description: 'iconic bag', image: '/LOUIS VUITTON.jpg' },
    { id: 4, name: 'PRADA', price: 30000, description: 'Elegent bag', image: '/PRADA.jpg' },
    { id: 5, name: 'CHANEL', price: 70000, description: 'Attractive bag', image: '/CHANEL.jpg' },
    { id: 6, name: 'adidas', price: 10000, description: 'timeless bag', image: '/adidas.jpg' },
  ]  

  return (
    <div>
      <div className="bags">
        {bagData.map((bag) => (
          <div key={bag.id} className="bag-card">
            <img src={bag.image} alt={bag.name} />
            <h3>{bag.name}</h3>
            <p>{bag.description}</p>
            <div className="price">${bag.price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Bags