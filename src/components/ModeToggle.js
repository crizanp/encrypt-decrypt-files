import React from 'react';

function ModeToggle({ mode, onModeChange }) {
  return (
    <div>
      <button 
        onClick={() => onModeChange('encrypt')}
        style={{ 
          backgroundColor: mode === 'encrypt' ? '#4CAF50' : '#f0f0f0',
          color: mode === 'encrypt' ? 'white' : 'black'
        }}
      >
        Encrypt
      </button>
      <button 
        onClick={() => onModeChange('decrypt')}
        style={{ 
          backgroundColor: mode === 'decrypt' ? '#2196F3' : '#f0f0f0',
          color: mode === 'decrypt' ? 'white' : 'black'
        }}
      >
        Decrypt
      </button>
    </div>
  );
}

export default ModeToggle;