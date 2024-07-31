import React, { useState } from 'react';
import imageCompression from 'browser-image-compression';

const ImageUploader = ({ onUpload }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 10 * 1024 * 1024) { // Check file size limit
      console.error('File size exceeds limit');
      return;
    }

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
      // console.log("Image URL received:", base64String); // Debug line

      if (onUpload) onUpload(base64String);
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
