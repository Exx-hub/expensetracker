import React from "react";
import "./App.css";
import Header from "./components/Header";
import ExpenseContextProvider from "./contexts/ExpenseContext";
import Balance from "./components/Balance";
import HistoryList from "./components/HistoryList";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <ExpenseContextProvider>
        <Header />
        <Balance />
        <HistoryList />
        <Form />
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
