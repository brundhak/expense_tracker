import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  //let expContentDisplay = <p>No expenses found. </p>;
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amt={exp.amount}
          date1={exp.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
