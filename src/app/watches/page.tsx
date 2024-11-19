import React from 'react';


const Watches = () => {

  const watchData =[
    {id:1, name:"Rolex", price: 50000, description: 'Luxury watch', image: 'images/new5.jpg'},
    
    {id:2, name:"Omega", price: 28000, description: 'Sporty design', image: '/images/new1.jpg'},
    
    {id:3, name:"Patek Philippe", price: 23000, description: 'Elegant timepiece', image: '/images/new6.jpg'},
    
    {id:4, name:"Tag Heuer", price: 18000, description: 'Sporty and stylish', image: '/images/new2.jpg'},
    
    {id:5, name:"Breitling", price: 15000, description: 'Bold and rugged', image: '/images/new3.jpg'},
    
    {id:6, name:"Seiko", price: 10000, description: 'Affordable and reliable', image: '/images/silver.png'},
  ]
  return (
         <div>
         <div className='watches-container'>
          {watchData.map((watch) =>(
          <div key={watch.id} className='watch-card'> 
          <img src={watch.image} alt={watch.name} />
          <h3>{watch.name}</h3>
          <p>{watch.description}</p>
          <div className='price'>${watch.price}</div>
          <button>Add To Cart</button>

          </div>
          ))}
         </div>
        
        
        
        
          </div>
        
      
    
  );
}

export default Watches;
