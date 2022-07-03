import { useState } from "react";

function NewExpense(props) {
  const [newExpense, setNewExpense] = useState({
    id: 0,
    title: "",
    amount: 0,
    date: "",
  });

  const [dateToShow, setDateToShow] = useState("");

  function setDate(dateToFormat) {
    setDateToShow(dateToFormat);
    let date = dateToFormat.replace(/-/g, ", ");
    setNewExpense({ ...newExpense, id: Math.floor(Math.random() * 10000), date: new Date(date) });
  }

  function addNew(event) {
    event.preventDefault();
    props.add(newExpense);
    setNewExpense({
      id: 0,
      title: "",
      amount: 0,
      date: "",
    });
    setDateToShow("");
  }

  return (
    <div>
      <h2>Add new expense</h2>
      <form action="submit">
        <input
          id="title"
          onChange={(event) => setNewExpense({ ...newExpense, title: event.target.value })}
          value={newExpense.title}
          required
        ></input>
        <input
          id="amount"
          onChange={(event) => setNewExpense({ ...newExpense, amount: +event.target.value })}
          value={newExpense.amount}
          required
        ></input>
        <input id="date" type="date" onChange={(event) => setDate(event.target.value)} value={dateToShow} />
        <button onClick={addNew}>Add Expense</button>
      </form>
    </div>
  );
}

export default NewExpense;
