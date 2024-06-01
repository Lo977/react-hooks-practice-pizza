import React, { useEffect, useState } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const [formData, setFormData] = useState({
    topping: "",
    size: "",
    vegetarian: "",
  });
  // console.log(formData);
  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
      .then((r) => r.json())
      .then((data) => setPizzas(data));
  }, []);
  function handleFormInput(key, value) {
    setFormData({ ...formData, [key]: value });
  }
  function handleUpdate(data) {
    const updatedData = pizzas.map((pizza) =>
      pizza.id === data.id ? data : pizza
    );
    setPizzas(updatedData);
  }
  return (
    <>
      <Header />
      <PizzaForm
        formData={formData}
        onHandleInput={handleFormInput}
        onHandleUpdate={handleUpdate}
      />
      <PizzaList pizzas={pizzas} onSetFormData={setFormData} />
    </>
  );
}

export default App;
