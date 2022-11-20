import { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 2, 5);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 290894;

  const [title, setTitle] = useState(props.title); // react hook must only be called inside function and not in nested fuctions
  console.log(title);
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date2={props.date1} />
        <div className="expenseitem__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price">${props.amt}</div>
        {/*<button onClick={clickHandler}>Change Title</button>*/}
      </Card>
    </li>
  );
}

export default ExpenseItem;
