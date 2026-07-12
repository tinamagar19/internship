import React, { useState } from 'react';
import axios from 'axios';

function HandleForm() {
  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: ''
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value
    });
    console.log(product)
  }

  function handleSubmit(e) {
    e.preventDefault();

    const productData = {
      title: product.title,
      price: parseFloat(product.price), 
      description: product.description,
      category: product.category,
      image: product.image
    };

    console.log("Submitting with Axios:", productData);

    
    axios.post('https://fakestoreapi.com/products', productData)
      .then(response => {
        
        if (response.status === 201) {
          alert("Success! Product created (Status 201).");
          
        
          setProduct({
            title: '',
            price: '',
            description: '',
            category: '',
            image: ''
          });
        } else {
          alert(`Product added but status was ${response.status}`);
        }
      })
      .catch(error => {
        console.error("Axios Error:", error);
        alert("Failed to add product. Check console for details.");
      });
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 antialiased font-sans">
      <div className="w-full max-w-lg bg-blue-200 squaregit commit -m "you"-2xl border border-slate-900 shadow-sm p-8 transition-all hover:shadow-md">
        
        <h2 className="text-2xl font-semibold text-slate-800 text-center mb-8 tracking-tight">
          Add New Product
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Title</label>
            <input 
              type="text" 
              name="title" 
              value={product.title} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2.5 bg-gray-200 border border-slate-200 rectangle-lg text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
              

            />
          </div>

          
          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Price ($)</label>
            <input 
              type="number" 
              step="0.01" 
              name="price"
              value={product.price} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2.5 bg-gray-200 border border-slate-200 rectangle-lg text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Description</label>
            <textarea 
              name="description"
              value={product.description} 
              onChange={handleInputChange} 
              rows="3"
              className="w-full px-4 py-2.5 bg-gray-200 border border-slate-200 rectangle-lg text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all resize-none"
          
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Category</label>
            <input 
              type="text" 
              name="category"
              value={product.category} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2.5 bg-gray-200 border border-slate-200 rectnagle-lg text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
              
              
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-600 mb-1.5">Image URL</label>
            <input 
              type="text" 
              name="image"
              value={product.image} 
              onChange={handleInputChange} 
              className="w-full px-4 py-2.5 bg-gray-200 border border-slate-200 rectangle-lg text-slate-800 text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
              
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              className="w-full py-3 bg-orange-400 hover:bg-indigo-700 text-white font-medium text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all cursor-pointer"
            >
              Submit Product
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default HandleForm;