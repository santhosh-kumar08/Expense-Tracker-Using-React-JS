export default function Summary({ totalExpenses, balance }) {
  return (
    <div className="result2 mt-5">
      <h3 style={{ color: "red" }}>Total Expenses : ₹{totalExpenses}</h3>
      <h3 className={balance < 0 ? "flash" : ""} style={{ color: balance < 0 ? "red" : "green" }}>
        Balance : ₹{balance}
      </h3>
    </div>
  );
}
