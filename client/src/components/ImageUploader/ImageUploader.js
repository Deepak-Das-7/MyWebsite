import React, { useState } from 'react';
import axios from 'axios';
import imageCompression from 'browser-image-compression';

const ImageUploader = ({ onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));

    try {
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1024,
        useWebWorker: true,
      };

      const compressedFile = await imageCompression(file, options);
      setSelectedImage(compressedFile);
      setPreview(URL.createObjectURL(compressedFile));
    } catch (error) {
      console.error('Image compression error:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedImage) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedImage);
    reader.onloadend = async () => {
      const base64String = reader.result;

      try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/upload`, { image: base64String });
        const imageUrl = response.data.image; // Adjust this according to your backend response
        // console.log("Image URL received:", imageUrl); // Debug line

        if (onUpload) onUpload(response.data); // Pass the entire response
      } catch (error) {
        console.error('Upload error', error);
      }
    };

    reader.onerror = (error) => {
      console.error('File reading error', error);
    };
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Selected" style={{ width: '100px', height: '100px' }} />}
      <button type="button" onClick={handleSubmit}>Upload</button>
    </div>
  );
};

export default ImageUploader;
