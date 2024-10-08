import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState(new Date().getFullYear().toString());

  const selectYearHandler = (year) => {
    setFilteredYear(year);
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  // We can assign html code to a variable too
  
  return (
    <div>
      {/* To send data from child to parent we make a custom attribute that points to a function.This function is called in the child with the data to be fetched as an argument */}

      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectYear={selectYearHandler}
        />
        <ExpensesChart expenses={ filteredExpenses} />
        {/* We use map to display all the items in the array dynamically */}
        {/* Always add a key when mapping items */}
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
