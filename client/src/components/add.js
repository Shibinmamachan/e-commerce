// components/Add.js
import React, { useState, useContext, useRef } from 'react';
import { ItemContext } from './ItemContext';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

function Add() {
  const { addItem } = useContext(ItemContext);
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [itemrs, setrs] = useState('');
  const [pending, setPending] = useState(null);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const categories = ['Clothes', 'Books', 'Shoes', 'Electronics', 'Sports', 'Toys'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName.trim() || !category || !imageUrl.trim() || !itemrs.trim()) return;

    setPending({
      name: itemName.trim(),
      category,
      image: imageUrl.trim(),
      rs: itemrs.trim(),
    });

    const modal = window.bootstrap.Modal.getOrCreateInstance(modalRef.current);
    modal.show();
  };

  const handleConfirm = () => {
    if (pending) {
      addItem(pending.name, pending.category, pending.image,pending.rs);
    }

    clearForm();
    window.bootstrap.Modal.getOrCreateInstance(modalRef.current).hide();

    // Navigate to Home
    navigate('/');
  };

  const handleCancel = () => {
    window.bootstrap.Modal.getOrCreateInstance(modalRef.current).hide();
    setPending(null);
  };

  const clearForm = () => {
    setItemName('');
    setCategory('');
    setImageUrl('');
    setrs('')
    setPending(null);
  };

  return (
    <div>
      <Nav />
      <div className="container mt-4">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              placeholder="Enter item name"
            />
          </div>

          <div className="mb-3">
            <label>Category</label>
            <select
              className="form-select"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">-- Select category --</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label>Image URL</label>
            <input
              type="text"
              className="form-control"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="Enter image URL"
            />
          </div>
          <div className="mb-3">
            <label>Amount</label>
            <input
              type="text"
              className="form-control"
              value={itemrs}
              onChange={(e) => setrs(e.target.value)}
              placeholder="Enter Amount"
            />
          </div>

          <button type="submit" className="btn btn-success">
            Add
          </button>
        </form>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="confirmModal"
        tabIndex="-1"
        ref={modalRef}
        aria-labelledby="confirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="confirmModalLabel">Confirm Add</h5>
              <button type="button" className="btn-close" onClick={handleCancel}></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to add this item?</p>
              {pending && (
                <div>
                  <strong>Name:</strong> {pending.name} <br />
                  <strong>Category:</strong> {pending.category} <br />
                  <strong>Image URL:</strong> {pending.image}
                  <strong>RS:</strong> {pending.rs}
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
              <button className="btn btn-primary" onClick={handleConfirm}>Confirm</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add;
