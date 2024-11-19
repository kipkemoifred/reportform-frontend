import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FeesManagement.css'; // Import the CSS file

const FeesManagement = () => {
  const [fees, setFees] = useState([]);
  const [formData, setFormData] = useState({
    admission_number: '',
    term: '',
    amount_paid: '',
    total_amount_paid: '',
    expected_amount: '',
    balance: '',
  });
  const [editingFee, setEditingFee] = useState(null);

  useEffect(() => {
    fetchFees();
  }, []);

  const fetchFees = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getFees');
      setFees(response.data);
    } catch (error) {
      console.error('Error fetching fees:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const addFee = async () => {
    try {
      const response = await axios.post('http://localhost:8080/newFees', formData);
      setFees((prev) => [...prev, response.data]);
      setFormData({
        admission_number: '',
        term: '',
        amount_paid: '',
        total_amount_paid: '',
        expected_amount: '',
        balance: '',
      });
    } catch (error) {
      console.error('Error adding fee:', error);
    }
  };

  const updateFee = async () => {
    try {
      const response = await axios.put(`http://localhost:8080/fees/${editingFee.id}`, formData);
      setFees((prev) =>
        prev.map((fee) => (fee.id === editingFee.id ? response.data : fee))
      );
      setEditingFee(null);
      setFormData({
        admission_number: '',
        term: '',
        amount_paid: '',
        total_amount_paid: '',
        expected_amount: '',
        balance: '',
      });
    } catch (error) {
      console.error('Error updating fee:', error);
    }
  };

  const deleteFee = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/fees/${id}`);
      setFees((prev) => prev.filter((fee) => fee.id !== id));
    } catch (error) {
      console.error('Error deleting fee:', error);
    }
  };

  const handleEdit = (fee) => {
    setEditingFee(fee);
    setFormData({
      admission_number: fee.admission_number,
      term: fee.term,
      amount_paid: fee.amount_paid,
      total_amount_paid: fee.total_amount_paid,
      expected_amount: fee.expected_amount,
      balance: fee.balance,
    });
  };

  return (
    <div className="container">
      <h1>Fees Management</h1>
      <div>
        <h2>{editingFee ? 'Edit Fee' : 'Add New Fee'}</h2>
        <form>
          <input
            type="text"
            name="admission_number"
            placeholder="Admission Number"
            value={formData.admission_number}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="term"
            placeholder="Term"
            value={formData.term}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="amount_paid"
            placeholder="Amount Paid"
            value={formData.amount_paid}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="total_amount_paid"
            placeholder="Total Amount Paid"
            value={formData.total_amount_paid}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="expected_amount"
            placeholder="Expected Amount"
            value={formData.expected_amount}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="balance"
            placeholder="Balance"
            value={formData.balance}
            onChange={handleInputChange}
          />
          <button type="button" onClick={editingFee ? updateFee : addFee}>
            {editingFee ? 'Update Fee' : 'Add Fee'}
          </button>
        </form>
      </div>
      <h2>Fees List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Admission Number</th>
            <th>Term</th>
            <th>Amount Paid</th>
            <th>Total Amount Paid</th>
            <th>Expected Amount</th>
            <th>Balance</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {fees.map((fee) => (
            <tr key={fee.id}>
              <td>{fee.id}</td>
              <td>{fee.admission_number}</td>
              <td>{fee.term}</td>
              <td>{fee.amount_paid}</td>
              <td>{fee.total_amount_paid}</td>
              <td>{fee.expected_amount}</td>
              <td>{fee.balance}</td>
              <td>
                <button onClick={() => handleEdit(fee)}>Edit</button>
                <button
                  className="delete"
                  onClick={() => deleteFee(fee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeesManagement;
