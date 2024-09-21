import React, { useState } from 'react';
import axios from 'axios';
// import 
import './App.css'


function App() {
  const [selectedDate, setSelectedDate] = useState('');
  const [procurementPlan, setProcurementPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const generateProcurementPlan = async () => {
    if (!selectedDate) {
      alert('Please select a date.');
      return;
    }
    
    setLoading(true);
    
    // Dummy procurement plan data
    const dummyProcurementPlan = {
      items: [
        { item_id: 1, item_name: 'Item A', quantity: 100, supplier_name: 'Supplier X' },
        { item_id: 2, item_name: 'Item B', quantity: 50, supplier_name: 'Supplier Y' },
        { item_id: 3, item_name: 'Item C', quantity: 200, supplier_name: 'Supplier Z' }
      ]
    };

    // Simulate server response delay
    setTimeout(() => {
      setProcurementPlan(dummyProcurementPlan);
      setLoading(false);
    }, 1000);  // Simulates a 1-second delay
  };

  const downloadExcel = () => {
    alert('Excel download functionality coming soon!');
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Procurement Plan Generator</h1>
        <div className="input-group">
          <label>Select Date:</label>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
          <button onClick={generateProcurementPlan} className="generate-btn">Generate Plan</button>
        </div>

        {loading && <p className="loading">Loading...</p>}

        {procurementPlan && (
          <div className="plan-container">
            <h2>Procurement Plan as of {selectedDate}</h2>
            <table>
              <thead>
                <tr>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Supplier</th>
                </tr>
              </thead>
              <tbody>
                {procurementPlan.items.map((item) => (
                  <tr key={item.item_id}>
                    <td>{item.item_name}</td>
                    <td>{item.quantity}</td>
                    <td>{item.supplier_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button onClick={downloadExcel} className="download-btn">Download as Excel</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
