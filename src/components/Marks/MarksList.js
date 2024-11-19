import React from "react";

const MarksList = ({ marks, onEdit, onDelete }) => {
  return (
    <div className="marks-list">
      <h2>Marks List</h2>
      <table>
        <thead>
          <tr>
            <th>Admission Number</th>
            <th>Maths</th>
            <th>English</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marks.map((mark) => (
            <tr key={mark.id}>
              <td>{mark.admission_number}</td>
              <td>{mark.maths}</td>
              <td>{mark.english}</td>
              <td>{mark.total}</td>
              <td>
                <button
                  className="edit-button"
                  onClick={() => onEdit(mark)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => onDelete(mark.id)}
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

export default MarksList;
