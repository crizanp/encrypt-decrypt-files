import React, { useState } from 'react';

function PasswordInput({ mode, onPasswordChange }) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    onPasswordChange(newPassword);

    if (mode === 'encrypt') {
      if (newPassword.length < 8) {
        setError('Password must be at least 8 characters');
      } else {
        setError('');
      }
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (mode === 'encrypt') {
      if (newConfirmPassword !== password) {
        setError('Passwords do not match');
      } else {
        setError('');
      }
    }
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={handlePasswordChange}
      />
      {mode === 'encrypt' && (
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default PasswordInput;