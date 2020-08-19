import React, { useContext, Fragment } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";

function Balance() {
  const { income, expense } = useContext(ExpenseContext);
  return (
    <Fragment>
      <div className="balance">
        <p>YOUR BALANCE:</p>
        <h2> ${(income + expense).toFixed(2)}</h2>
      </div>
      <div className="income-expense">
        <div className="income">
          <p>INCOME:</p>
          <h2 style={{ color: "#3ac427" }}>${income}</h2>
        </div>
        <div className="expense">
          <p>EXPENSE:</p>
          <h2 style={{ color: "#c71829" }}>${Math.abs(expense)}</h2>
        </div>
      </div>
    </Fragment>
  );
}

export default Balance;
