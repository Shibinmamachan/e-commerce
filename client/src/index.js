import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';

import CartProvider from './components/CartContext'; // your existing context
import { ItemProvider } from './components/ItemContext'; // new context for Add/Home

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <ItemProvider>
        <RouterProvider router={router} />
      </ItemProvider>
    </CartProvider>
  </React.StrictMode>
);
