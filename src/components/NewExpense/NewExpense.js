import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const formSaveHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onExpenseAdd(expenseData);
    setIsEditing(false);
  };
  let [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //Changing form content conditionally
  let formContent = (
    <button onClick={startEditingHandler}>Add new expense</button>
  );
  //If adding new expense
  if (isEditing) {
    formContent = (
      <ExpenseForm onSaveForm={formSaveHandler} onCancel={stopEditingHandler} />
    );
  }
  //on cancel or submition of form or on default start screen
  else {
    formContent = (
      <button onClick={startEditingHandler}>Add new expense</button>
    );
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
