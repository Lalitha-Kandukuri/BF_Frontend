import React from 'react';

function MultiSelectDropdown({ onChange }) {
  const options = ['Alphabets', 'Numbers', 'Highest lowercase alphabet'];

  const handleSelection = (selectedOptions) => {
    onChange(Array.from(selectedOptions.target.selectedOptions, option => option.value));
  };

  return (
    <select multiple onChange={handleSelection}>
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default MultiSelectDropdown;
