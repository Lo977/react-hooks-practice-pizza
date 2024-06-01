import React from "react";

function Pizza({ pizza, onSetFormData }) {
  const { topping, size, vegetarian } = pizza;
  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "YES" : "NO"}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => onSetFormData(pizza)}
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
