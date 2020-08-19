import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

function Form() {
  const {
    textInput,
    setTextInput,
    amountInput,
    setAmountInput,
    handleSubmit,
  } = useContext(ExpenseContext);
  return (
    <div className="form-container">
      <h2>add new transaction</h2>
      <form onSubmit={handleSubmit}>
        <p>text</p>
        <input
          type="text"
          placeholder="enter text"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
        />
        <p>amount (negative input for expense)</p>
        <input
          type="number"
          placeholder="enter value"
          value={amountInput}
          onChange={(e) => setAmountInput(e.target.value)}
        />

        <button style={{ display: "block" }} type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
}

export default Form;
