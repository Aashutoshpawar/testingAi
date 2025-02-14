import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value); // Update state with input value
  };

  return (
    <>
      <input type="text" name="text" onChange={handleChange} />
      <h2 style={{ backgroundColor: "black", color: "white" }}>{name}</h2>
    </>
  );
}

export default App;
