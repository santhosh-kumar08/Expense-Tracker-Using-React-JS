export default function Income({ Amount, salary, RealSalary, Type, setsalary, Key }) {
  return (
    <div className="income">
      <button onClick={Type} className="btn">Income</button>
      {Amount && (
        <input
          type="text"
          placeholder="Enter your Income"
          value={salary}
          onChange={(e) => setsalary(e.target.value)}
          onKeyDown={Key}
          className="in"
        />
      )}
      {RealSalary && <p className="out">Income : {RealSalary}</p>}
    </div>
  );
}
