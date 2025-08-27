export default function Month({ options, selectedMonth, setselectedMonth, select }) {
  return (
    <div className="month">
      <button onClick={select} className="btn">Select Month</button>
      {options && (
        <select
          value={selectedMonth}
          onChange={(e) => setselectedMonth(e.target.value)}
          className="in"
        >
          <option value="">Select Month</option>
          {[
            "January","February","March","April","May","June",
            "July","August","September","October","November","December"
          ].map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      )}
      {selectedMonth && <p className="out">Month : {selectedMonth}</p>}
    </div>
  );
}
