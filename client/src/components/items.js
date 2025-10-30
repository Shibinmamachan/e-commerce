// src/components/Product.js
import React from 'react';
import './Product.css';
//import Nav from './Nav';


const categories = [
  {
    name: "Shoes",
    items: [
      {
        name: "Nike Air Max",
        image: "https://tse3.mm.bing.net/th/id/OIP.ptR2U1aI_hJt7VR5VOVGXgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$120"
      },
      {
        name: "Adidas Runner",
        image: "https://preview.thenewsmarket.com/Previews/ADID/StillAssets/1920x1080/654572.jpg",
        price: "$110"
      }
    ]
  },
  {
    name: "Gold",
    items: [
      {
        name: "Gold Ring",
        image: "https://img.freepik.com/premium-photo/gold-rings_1173361-2210.jpg",
        price: "$500"
      },
      {
        name: "Gold Necklace",
        image: "https://tse4.mm.bing.net/th/id/OIP.91gpwCRGuxmG1wht6bpZrgHaKQ?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$1500"
      }
    ]
  },
  {
    name: "Dress",
    items: [
      {
        name: "Floral Dress",
        image: "https://th.bing.com/th/id/R.f35436533861387920d0187e4ff7c397?rik=PYXUaLUmwBuqig&riu=http%3a%2f%2fmenscraze.com%2fwp-content%2fuploads%2f2016%2f05%2fDavid-Gandy-Style.jpg&ehk=boua1Dz78BNmsgP1hebpkQYgugR2%2fzmRWN%2bGvDXAnk8%3d&risl=&pid=ImgRaw&r=0",
        price: "$70"
      },
      {
        name: "Evening Gown",
        image: "https://cdn.luxe.digital/media/2019/09/12085141/cocktail-attire-men-do-not-luxe.digital.jpg",
        price: "$150"
      }
    ]
  },
  {
    name: "Bags",
    items: [
      {
        name: "Leather Handbag",
        image: "https://tse3.mm.bing.net/th/id/OIP.voQEqkW4ptlx_1NkqnYNVwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$90"
      },
      {
        name: "Travel Backpack",
        image: "https://tse2.mm.bing.net/th/id/OIP.VnsIZDiZaEY3i7zgZQ8cMQHaHZ?rs=1&pid=ImgDetMain&o=&7rm=1",
        price: "$60"
      }
    ]
  },
  {
    name: "Phone",
    items: [
      {
        name: "iPhone 14",
        image: "https://wallpapers.com/images/hd/phone-pictures-87ww3inzi3arvlnk.jpg",
        price: "$999"
      },
      {
        name: "Samsung Galaxy S22",
        image: "https://i.ytimg.com/vi/KVwjGqKtGFg/maxresdefault.jpg",
        price: "$899"
      }
    ]
  },
  {
    name: "Perfume",
    items: [
      {
        name: "Chanel No. 5",
        image: "https://tse3.mm.bing.net/th/id/OIP.kX1wtcBHCDHh0DkfPnZzDgHaE3?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$130"
      },
      {
        name: "Dior Sauvage",
        image: "https://tse4.mm.bing.net/th/id/OIP.8j5ZZsD2eimpO22UCUddQwHaJ1?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$150"
      }
    ]
  }
];

function items() {
  return (
    <div>
  
    <div className="container py-4">
      <h1 className="text-center mb-4">Explore Our Products</h1>
      {categories.map((category) => (
        <div key={category.name} className="mb-5">
          <h3 className="mb-4">{category.name}</h3>
          <div className="row">
            {category.items.map((item, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div className="card h-100 product-card">
                  <img src={item.image} className="card-img-top" alt={item.name} />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.price}</p>
                    <button  className='btn btn-primary'>
                     { onclick=(item.id) ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                      <button className="btn btn-success">Buy Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default items;
