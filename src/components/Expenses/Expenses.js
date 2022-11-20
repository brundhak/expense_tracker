import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const saveSelectedYear = (enteredSelectedYear) => {
    console.log("Expenses.js");
    setFilteredYear(enteredSelectedYear);
    console.log(enteredSelectedYear);
  };

  const selectedYearExpenseFilter = props.items.filter((incomingData) => {
    return incomingData.date.getFullYear().toString() === filteredYear;
  });

  //console.log(selectedYearExpenseFilter);
  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          selectedYear={filteredYear}
          onSaveSelectedYear={saveSelectedYear}
        />
        <ExpensesChart expense={selectedYearExpenseFilter} />

        <ExpensesList items={selectedYearExpenseFilter} />
        {/*expContentDisplay*/}

        {/* {selectedYearExpenseFilter.length === 0 ? (
          <p>No Expenses Found.</p>
        ) : (
          selectedYearExpenseFilter.map((exp) => {
            console.log(exp.title);
            return (
              <ExpenseItem
                key={exp.id}
                title={exp.title}
                amt={exp.amount}
                date1={exp.date}
              />
            );
          })
        )} */}
        {/* <ExpenseItem
            title={props.items[0].title}
            amt={props.items[0].amount}
            date1={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amt={props.items[1].amount}
            date1={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            amt={props.items[2].amount}
            date1={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            amt={props.items[3].amount}
            date1={props.items[3].date}
          /> */}
        {/* {selectedYearExpenseFilter.length === 0 && <p>No Expense.</p>}
        {selectedYearExpenseFilter.length > 0 &&
          selectedYearExpenseFilter.map((exp) => {
            console.log(exp.title);
            return (
              <ExpenseItem
                key={exp.id}
                title={exp.title}
                amt={exp.amount}
                date1={exp.date}
              />
            );
          })} */}
      </div>
    </Card>
  );
}

export default Expenses;
