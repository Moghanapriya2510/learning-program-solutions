import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState(0);
  const [euros, setEuros] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Conversion rate: 1 Euro = 90 Rupees (example rate)
    setEuros(rupees / 90);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Indian Rupees:
          <input 
            type="number" 
            value={rupees} 
            onChange={(e) => setRupees(e.target.value)} 
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {euros > 0 && <p>{rupees} INR = {euros.toFixed(2)} EUR</p>}
    </div>
  );
}

export default CurrencyConverter;