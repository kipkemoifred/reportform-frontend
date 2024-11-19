import React, { useState, useEffect } from "react";
import axios from "axios";
import AccountantForm from "./AccountantForm";
import AccountantList from "./AccountantList";

const AccountantManagement = () => {
  const [accountants, setAccountants] = useState([]);
  const [selectedAccountant, setSelectedAccountant] = useState(null);
  const [error, setError] = useState("");

  // Fetch all accountants
  const fetchAccountants = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getAccountants");
      setAccountants(response.data);
    } catch (err) {
      setError("Failed to fetch accountants");
    }
  };

  // Add or update accountant
  const saveAccountant = async (accountant) => {
    try {
      if (accountant.id) {
        // Update
        await axios.put(`http://localhost:8080/accountant/${accountant.id}`, accountant);
      } else {
        // Add
        await axios.post("http://localhost:8080/newAccountant", accountant);
      }
      fetchAccountants();
      setSelectedAccountant(null);
    } catch (err) {
      setError("Failed to save accountant");
    }
  };

  // Delete accountant
  const deleteAccountant = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/accountant/${id}`);
      fetchAccountants();
    } catch (err) {
      setError("Failed to delete accountant");
    }
  };

  useEffect(() => {
    fetchAccountants();
  }, []);

  return (
    <div className="accountant-management-container">
      <h1>Accountant Management</h1>
      {error && <div className="error-message">{error}</div>}
      <AccountantForm
        accountant={selectedAccountant}
        onSave={saveAccountant}
        onCancel={() => setSelectedAccountant(null)}
      />
      <AccountantList
        accountants={accountants}
        onEdit={(acc) => setSelectedAccountant(acc)}
        onDelete={deleteAccountant}
      />
    </div>
  );
};

export default AccountantManagement;
