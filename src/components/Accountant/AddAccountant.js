import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddAccountant.css"; 
import AccountantForm from "./AccountantForm";

function AddAccountant() {


    const [accountants, setAccountants] = useState([]);
    const [selectedAccountant, setSelectedAccountant] = useState(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();
  // Add or update accountant
  const saveAccountant = async (accountant) => {
    try {
      if (accountant.id) {
        // Update
        await axios.put(`http://localhost:8080/accountant/${accountant.id}`, accountant);
      } else {
        // Add
        await axios.post("http://localhost:8080/newAccountant", accountant);
        navigate("/");
        console.log("added parent")
      }
    //   fetchAccountants();
      setSelectedAccountant(null);
    } catch (err) {
      setError("Failed to save accountant"+err);
    }
  };


    return (
        <AccountantForm
        accountant={selectedAccountant}
        onSave={saveAccountant}
        onCancel={() => setSelectedAccountant(null)}
      />
    );
}

export default AddAccountant;
