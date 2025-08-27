export default function Expense({ expense, budget, Category, setCategory, cost, setcost, arrow }) {
  return (
    <div className="final">
      <button onClick={budget} className="expense">Add Expense</button>
      {expense && (
        <div className="ex">
          <select
            value={Category}
            onChange={(e) => setCategory(e.target.value)}
            className="in"
          >
            <option value="">Select</option>
            <option value="Bill">Bill</option>
            <option value="Food">Food</option>
            <option value="Rent">Rent</option>
            <option value="Transport">Transport</option>
            <option value="Shopping">Shopping</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Others">Others</option>
          </select>
          <input
            type="text"
            placeholder="Enter your Expense"
            value={cost}
            onChange={(e) => setcost(e.target.value)}
            onKeyDown={arrow}
            className="in"
          />
        </div>
      )}
    </div>
  );
}
