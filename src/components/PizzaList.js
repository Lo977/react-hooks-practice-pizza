import React from "react";
import Pizza from "./Pizza";

function PizzaList({ pizzas, onSetFormData }) {
  const displayPizzas = pizzas.map((pizza) => {
    return <Pizza key={pizza.id} pizza={pizza} onSetFormData={onSetFormData} />;
  });
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>{displayPizzas}</tbody>
    </table>
  );
}

export default PizzaList;
