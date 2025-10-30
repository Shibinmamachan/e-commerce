// ItemContext.js
import React, { createContext, useState } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (name, category, image) => {
    const newItem = {
      id: Date.now(), // unique ID
      name,
      category,
      image,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <ItemContext.Provider value={{ items, addItem }}>
      {children}
    </ItemContext.Provider>
  );
};
