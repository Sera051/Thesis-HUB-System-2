import React from 'react';
import './Date.css';

const DateModal = ({ isOpen, onClose, startDate, endDate, setStartDate, setEndDate, onApply }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Date Range</h2>
        <div className="modal-body">
          <label>Start Date:</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <label>End Date:</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
        <div className="modal-footer">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onApply}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default DateModal;
