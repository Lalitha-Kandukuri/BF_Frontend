import React, { useState } from 'react';
import JsonInput from './components/JsonInput';
import MultiSelectDropdown from './components/MultiSelectDropdown';
import FilteredResponse from './components/FilteredResponse';

function App() {
  const [apiResponse, setApiResponse] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleApiResponse = (response) => {
    setApiResponse(response);
  };

  const handleFiltersChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <div className="App">
      <JsonInput onResponse={handleApiResponse} />
      {apiResponse && (
        <>
          <MultiSelectDropdown onChange={handleFiltersChange} />
          <FilteredResponse response={apiResponse} filters={selectedFilters} />
        </>
      )}
    </div>
  );
}

export default App;
