import React, { useState } from 'react';
import axios from 'axios';

function JsonInput({ onResponse }) {
  const [jsonInput, setJsonInput] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    try {
      const parsedInput = JSON.parse(jsonInput);
      const response = await axios.post('/bfhl', parsedInput);
      onResponse(response.data);
      setError(null);
    } catch (err) {
      setError('Invalid JSON input or API error');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={jsonInput} 
        onChange={(e) => setJsonInput(e.target.value)} 
        placeholder='Enter JSON here'
      />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default JsonInput;
