import React, { useState } from 'react';
import './DashboardContent.css';

const DashboardContent = () => {
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [termYear, setTermYear] = useState('');
  const [examName, setExamName] = useState('');
  const [fees, setFees] = useState(null);
  const [marks, setMarks] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!admissionNumber) {
      alert('Please enter an admission number.');
      return;
    }

    if (!termYear) {
      alert('Please enter an Term - Year.');
      return;
    }

    if (!examName) {
      alert('Please enter exam name.');
      return;
    }

    setLoading(true);
    
    try {
      const feesResponse = await fetch(`http://localhost:8080/fees_by_admNo/${admissionNumber}/${termYear}`);
      const marksResponse = await fetch(`http://localhost:8080/marks_by_admNo/${admissionNumber}/${termYear}/${examName}`);

      if (!feesResponse.ok || !marksResponse.ok) {
        throw new Error('Error fetching data');
      }

      const feesData = await feesResponse.json();
      const marksData = await marksResponse.json();

      setFees(feesData);
      setMarks(marksData);
    } catch (error) {
      console.error(error);
      alert('Failed to fetch data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-content">
      {/* <div className="card">
        <h3>Total Sales</h3>
        <p>$30,000</p>
      </div>
      <div className="card">
        <h3>New Users</h3>
        <p>1,200</p>
      </div>
      <div className="card">
        <h3>Revenue</h3>
        <p>$50,000</p>
      </div>
      <div className="card">
        <h3>Monthly Active Users</h3>
        <p>8,000</p>
      </div> */}

      {/* Search for Admission Number */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Enter Admission Number"
          value={admissionNumber}
          onChange={(e) => setAdmissionNumber(e.target.value)}
        />

      <input
          type="text"
          placeholder="Enter Term-Year e.g 2-2024"
          value={termYear}
          onChange={(e) => setTermYear(e.target.value)}
        />

<input
          type="text"
          placeholder="Enter Exam Name"
          value={examName}
          onChange={(e) => setExamName(e.target.value)}
        />

        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Loading...' : 'Search'}
        </button>
      </div>

      {/* Displaying Results */}
      {fees && marks && (
        <div className="results-section">
          <div className="result-card">
            <h4>Fees Information</h4>
            <p><strong>Admission Number:</strong> {fees.admission_number}</p>
            <p><strong>Term:</strong> {fees.term}</p>
            <p><strong>Amount Paid:</strong> ${fees.amount_paid}</p>
            <p><strong>Total Amount Paid:</strong> ${fees.total_amount_paid}</p>
            <p><strong>Expected Amount:</strong> ${fees.expected_amount}</p>
            <p><strong>Balance:</strong> ${fees.balance}</p>
          </div>
          <div className="result-card">
            <h4>Marks Information</h4>
            {/* Assuming marks data has properties you want to display */}
            <p><strong>Admission Number:</strong> {marks.admission_number}</p>
            <p><strong>Term:</strong> {marks.term}</p>
            <p><strong>Exam:</strong> {marks.exam}</p>
            <p><strong>Maths:</strong> {marks.maths}</p>
            <p><strong>English:</strong> {marks.english}</p>
            <p><strong>Kiswahili:</strong> {marks.kiswahili}</p>
            <p><strong>Science:</strong> {marks.science}</p>
            <p><strong>Social Studies:</strong> {marks.social_studies}</p>
            <p><strong>CRE:</strong> {marks.cre}</p>
            <p><strong>Insha:</strong> {marks.insha}</p>
            <p><strong>Composition:</strong> {marks.composition}</p>
            <p><strong>Marks Total:</strong> {marks.total}</p> {/* Update according to the actual structure */}
          </div>
        </div>
      )}
    </div>
  );
}

export default DashboardContent;
