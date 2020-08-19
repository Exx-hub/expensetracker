import React, { useContext } from "react";
import { ExpenseContext } from "../contexts/ExpenseContext";
import HistoryItem from "./HistoryItem";

function HistoryList() {
  const { history, setHistory, deleteItem } = useContext(ExpenseContext);
  return (
    <div className="history-container">
      <div className="history-header-btn">
        <h1>History</h1>
        <button onClick={() => setHistory([])}>Clear List</button>
      </div>
      <ul className="unordered-list">
        {history.map((item) => (
          <HistoryItem key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;
