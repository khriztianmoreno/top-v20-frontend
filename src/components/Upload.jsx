import React, { useState } from 'react';

import axios from 'axios';

function UploadImage() {
  const [image, setImage] = useState(null);
  const handleChange = (evt) => {
    setImage(evt.target.files[0]);
  };

  const handleUploaImage = async () => {
    const formData = new FormData();

    formData.append('file', image);

    // const payload = {
    //   method: 'POST',
    //   body: formData,
    // };

    try {
      // const result = await fetch('http://localhost:8080/api/upload/image', payload);
      const result = await axios.post('http://localhost:8080/api/upload/image', formData);
      console.log('🚀 ~ file: Upload.jsx ~ line 22 ~ handleUploaImage ~ result', result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="file"
        name="file"
        id="file"
        accept="image/*"
        onChange={handleChange}
      />

      <button type="button" onClick={handleUploaImage}>
        Upload Image
      </button>
    </div>
  );
}

export default UploadImage;
