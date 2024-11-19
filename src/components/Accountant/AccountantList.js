import React from "react";

const AccountantList = ({ accountants, onEdit, onDelete }) => {
  return (
    <div className="accountants-list">
      <h2>Accountants List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>National ID</th>
            <th>Employee Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {accountants.map((acc) => (
            <tr key={acc.ID}>
              <td>{acc.name}</td>
              <td>{acc.national_id}</td>
              <td>{acc.employee_number}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => onEdit(acc)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(acc.id)}
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

export default AccountantList;
