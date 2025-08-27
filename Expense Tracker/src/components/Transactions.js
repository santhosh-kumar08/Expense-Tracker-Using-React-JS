export default function Transactions({ info }) {
  return (
    <div className="result">
      <h2>Transactions</h2>
      <ul>
        {info.map((item, index) => (
          <li key={index}>
            {item.category} : ₹{item.cost}
          </li>
        ))}
      </ul>
    </div>
  );
}
