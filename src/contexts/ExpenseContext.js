import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ExpenseContext = createContext();

function ExpenseContextProvider({ children }) {
  const localData = JSON.parse(localStorage.getItem("history")) || [];

  const [history, setHistory] = useState(localData);

  const [balance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [textInput, setTextInput] = useState("");
  const [amountInput, setAmountInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput && amountInput) {
      setHistory((prevHistory) => {
        return [
          ...prevHistory,
          { title: textInput, amount: parseInt(amountInput), id: uuidv4() },
        ];
      });
    }

    setTextInput("");
    setAmountInput("");
  };

  const deleteItem = (id) => {
    let filtered = history.filter((item) => item.id !== id);
    setHistory([...filtered]);
  };

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history));

    const getIncome = history
      .filter((item) => item.amount > 0)
      .reduce((acc, cv) => {
        return acc + cv.amount;
      }, 0);

    const getExpense = history
      .filter((item) => item.amount < 0)
      .reduce((acc, cv) => {
        return acc + cv.amount;
      }, 0);

    setIncome(getIncome);
    setExpense(getExpense);
  }, [history]);

  return (
    <ExpenseContext.Provider
      value={{
        balance,
        income,
        expense,
        history,
        setHistory,
        textInput,
        setTextInput,
        amountInput,
        setAmountInput,
        handleSubmit,
        deleteItem,
      }}
    >
      {children}
    </ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
