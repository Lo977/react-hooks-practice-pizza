import React from "react";

function PizzaForm({ formData, onHandleInput, onHandleUpdate }) {
  const { id, topping, size, vegetarian } = formData;
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pizzas/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => onHandleUpdate(data));
  }
  function handleOnChange(e) {
    const key = e.target.name;
    const value =
      e.target.type === "radio"
        ? e.target.value === "Vegetarian"
        : e.target.value;
    onHandleInput([key], value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleOnChange}
          />
        </div>
        <div className="col">
          <select
            className="form-control"
            name="size"
            value={size}
            onChange={handleOnChange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleOnChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleOnChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
