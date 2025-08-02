// src/components/UserPage.js
import React from 'react';

function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <h3>Book Your Flight</h3>
      <form>
        <label>
          Select Flight:
          <select>
            <option>Flight 101: New York to London - $500</option>
            <option>Flight 202: Paris to Tokyo - $850</option>
            <option>Flight 303: Sydney to Los Angeles - $700</option>
          </select>
        </label>
        <br />
        <label>
          Passenger Name:
          <input type="text" />
        </label>
        <br />
        <button type="submit">Book Ticket</button>
      </form>
    </div>
  );
}

export default UserPage;