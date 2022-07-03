import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  return (
    <Card>
      {props.expenses.map((item) => {
        return <ExpenseItem title={item.title} amount={item.amount} date={item.date} key={item.id}></ExpenseItem>;
      })}
    </Card>
  );
}

export default Expenses;
