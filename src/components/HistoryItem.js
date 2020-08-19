import React from "react";

function HistoryItem({ item, deleteItem }) {
  return (
    <li className={item.amount > 0 ? "list-item" : "list-item expense"}>
      <p className="item-title">{item.title}</p>
      <p>{item.amount}</p>
      <i onClick={() => deleteItem(item.id)} className="fas fa-trash-alt"></i>
    </li>
  );
}

export default HistoryItem;
