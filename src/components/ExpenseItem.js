import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "./Card";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);

  let newTitle = title;

  const updateTitle = (ev) => {
    console.log(ev.target.value);
    newTitle = ev.target.value;
  };

  const clickHandler = () => {
    setTitle(newTitle);
  };

  return (
    <Card>
      {/* <div>{props.date.toISOString()}</div> */}
      <div>
        <ExpenseDate date={props.date} />
        <div>
          <h3>{title}</h3>
        </div>
        <div>${props.amount}</div>
      </div>

      <div>
        <input type="text" placeholder={newTitle} onChange={updateTitle} />
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;
