import React from 'react';

function FilteredResponse({ response, filters }) {
    const filteredData = [];
  
    if (filters.includes('Alphabets')) filteredData.push(...response.alphabets);
    if (filters.includes('Numbers')) filteredData.push(...response.numbers);
    if (filters.includes('Highest lowercase alphabet')) filteredData.push(...response.highest_lowercase_alphabet);
  
    return (
      <div>
        <p>Filtered Response: {filteredData.join(', ')}</p>
      </div>
    );
}

export default FilteredResponse;
