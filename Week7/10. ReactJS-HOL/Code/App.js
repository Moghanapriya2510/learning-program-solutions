import React from 'react';
import './App.css';

function App() {
  const offices = [
    {
      id: 1,
      name: "Downtown Executive Suite",
      rent: 55000,
      address: "123 Main St, City Center",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      name: "Tech Hub Workspace",
      rent: 75000,
      address: "456 Innovation Ave, Tech District",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      name: "River View Offices",
      rent: 65000,
      address: "789 Riverside Drive",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="App">
      <h1>Office Space Rental</h1>
      <div className="office-list">
        {offices.map(office => (
          <div key={office.id} className="office-item">
            <img src={office.image} alt={office.name} className="office-image" />
            <h2>{office.name}</h2>
            <p>Address: {office.address}</p>
            <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
              Rent: ${office.rent.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;