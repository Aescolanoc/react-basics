import { useEffect, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: "Car insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 2, title: "Toilet Paper", amount: 2.05, date: new Date(2021, 2, 21) },
    { id: 3, title: "Food", amount: 54.9, date: new Date(2020, 3, 2) },
  ]);

  function addNewExpense(expense) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <NewExpense add={addNewExpense}></NewExpense>
        <Expenses expenses={expenses} />
      </header>
    </div>
  );
}

export default App;
