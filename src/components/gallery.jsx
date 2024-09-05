import React, { useState } from 'react';
import '../App.css';

const Gallery = () => {
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => URL.createObjectURL(file));
    setImages(prevImages => [...prevImages, ...newImages]);
  };

  return (
    <div className="gallery-container">
         <div className="container">
         <div className="add-image" >
        <label htmlFor="imageUpload" className="add-image-button">
          Gallery
        </label>
        <input
          type="file"
          id="imageUpload"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
        <div className="add-image">
        <label htmlFor="imageUpload" className="add-image-button">
          + Add Image
        </label>
        <input
          type="file"
          id="imageUpload"
          multiple
          accept="image/*"
          onChange={handleImageUpload}
        />
      </div>
         </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
       
            <img src={image} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
