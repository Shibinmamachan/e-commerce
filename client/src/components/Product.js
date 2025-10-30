// src/components/Product.js
import React from 'react';
import './Product.css';
import Nav from './Nav';

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
        image: "https://tse4.mm.bing.net/th/id/OIP.bZxvYrjQFGOEk7FeXUzMIgHaHa?pid=ImgDet&rs=1",
        price: "$110"
      }
    ]
  },
  {
    name: "Gold",
    items: [
      {
        name: "Gold Ring",
        image: "https://tse3.mm.bing.net/th/id/OIP.cVtP3O3YmFkztfIcd9az7gHaE8?pid=ImgDet&rs=1",
        price: "$500"
      },
      {
        name: "Gold Necklace",
        image: "https://tse2.mm.bing.net/th/id/OIP.H_f_Hi0RLuQp0XCeEVxslwHaHa?pid=ImgDet&rs=1",
        price: "$1500"
      }
    ]
  },
  {
    name: "Dress",
    items: [
      {
        name: "Floral Dress",
        image: "https://tse2.mm.bing.net/th/id/OIP.K2Wv6Qafck7Vk3A_FljVLgHaJQ?pid=ImgDet&rs=1",
        price: "$70"
      },
      {
        name: "Evening Gown",
        image: "https://tse3.mm.bing.net/th/id/OIP.91zyAvyOeKHwD08n_KLPaQHaLH?pid=ImgDet&rs=1",
        price: "$150"
      }
    ]
  },
  {
    name: "Bags",
    items: [
      {
        name: "Leather Handbag",
        image: "https://tse3.mm.bing.net/th/id/OIP.xWAEe6CopFB-oeFKbFa0nAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$90"
      },
      {
        name: "Travel Backpack",
        image: "https://tse1.mm.bing.net/th/id/OIP.EhAMDLZ7_qLg3UPozN6YRgHaHa?pid=ImgDet&rs=1",
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
        image: "https://tse4.mm.bing.net/th/id/OIP.Q-rKW5ZffbUnZhCSYoW5rAHaHa?pid=ImgDet&rs=1",
        price: "$899"
      }
    ]
  },
  {
    name: "Perfume",
    items: [
      {
        name: "Chanel No. 5",
        image: "https://tse1.mm.bing.net/th/id/OIP.SCoxpwTOkcWwRbCICj2H3wHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
        price: "$130"
      },
      {
        name: "Dior Sauvage",
        image: "https://tse1.mm.bing.net/th/id/OIP.eP1_pGr2DcbKAHnAcBfWhQHaHa?pid=ImgDet&rs=1",
        price: "$150"
      }
    ]
  }
];

function Product() {
  return (
    <div>
  <Nav></Nav>
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

export default Product;
