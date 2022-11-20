import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY = [
  {
    id: "e1",
    title: "Fried rice",
    amount: 170,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Momos",
    amount: 120,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Noodles",
    amount: 150,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Fries",
    amount: 50,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY);

  const saveExpenseAppDataHandler = (expense) => {
    //console.log(dataFromNewExpense);
    //console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  console.log(expenses);
  return (
    <div>
      <NewExpense onSaveData={saveExpenseAppDataHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
