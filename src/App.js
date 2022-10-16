import { useState } from "react";
import "./App.css";
import Expense from "./Components/Expenses/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";
// import ExpenseItem from "./Components/ExpenseItem";

const Dummy_Expenses = [
  {
    id: "e1",
    title: "Laptop ",
    amount: 45600,
    date: new Date(2022, 5, 14),
  },
  {
    id: "e2",
    title: "Mobile",
    amount: 15000,
    date: new Date(2022, 8, 4),
  },
  { id: "e3", title: "Ear Phone", amount: 1999, date: new Date(2021, 3, 12) },
  { id: "e4", title: "Jeans", amount: 999, date: new Date(2021, 9, 26) },
  { id: "e5", title: "Shirt", amount: 600, date: new Date(2020, 6, 22) },
];

function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    // console.log(expense);
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
