import React, { useState } from 'react';

function FileInput({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div>
      <input 
        type="file" 
        onChange={handleFileChange}
      />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          <p>Size: {(selectedFile.size / 1024).toFixed(2)} KB</p>
        </div>
      )}
    </div>
  );
}

export default FileInput;