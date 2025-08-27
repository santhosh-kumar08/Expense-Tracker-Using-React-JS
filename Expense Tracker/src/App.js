import React, { useState } from "react";
import "./App.css";

// Components
import Header from "./components/Header";
import MonthSelector from "./components/Month";
import IncomeInput from "./components/Income";
import ExpenseForm from "./components/Expense";
import Transactions from "./components/Transactions";
import ExpenseChart from "./components/Piechart";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

function App() {
  //Month
  const [options, setoptions] = useState(false);
  const [selectedMonth, setselectedMonth] = useState("");
  const select = () => setoptions(true);

  //Income
  const [Amount, setAmount] = useState(false);
  const [salary, setsalary] = useState("");
  const [RealSalary, setRealSalary] = useState("");
  const Type = () => setAmount(true);
  const Key = (e) => {
    if (e.key === "Enter") setRealSalary(Number(salary));
  };

  //Expenses
  const [expense, setexpense] = useState(false);
  const [cost, setcost] = useState("");
  const [Category, setCategory] = useState("");
  const [info, setinfo] = useState([]);

  const budget = () => {
    if (!selectedMonth || !RealSalary) {
      alert("Please select a month and enter your income before adding expenses.");
      return;
    }
    setexpense(true);
  };

  const arrow = (e) => {
    if (e.key === "Enter" && cost && Category) {
      const newExpense = { category: Category, cost: Number(cost) };
      setinfo([...info, newExpense]);
      setcost("");
      setCategory("");
    }
  };

  //Pie chart colors
  const COLORS = [
    "rgba(84, 169, 244, 1)",
    "rgba(0, 196, 159, 1)",
    "rgba(255, 187, 40, 1)",
    "rgba(255, 129, 66, 1)",
    "rgba(132, 94, 194, 1)",
    "rgba(255, 111, 145, 1)",
    "rgba(176, 168, 185, 1)",
    "rgba(40, 235, 15, 1)",
    "rgba(36, 33, 222, 1)",
  ];

  // Summary 
  const totalExpenses = info.reduce((sum, item) => sum + item.cost, 0);
  const balance = RealSalary ? RealSalary - totalExpenses : 0;

  return (
    <div className="App">
      {/* Header */}
      <Header />

      <main className="container-fluid">
        <div className="row">
          {/* Left side */}
          <div className="col-lg-6">
            <div className="components">
              <MonthSelector
                options={options}
                selectedMonth={selectedMonth}
                setselectedMonth={setselectedMonth}
                select={select}
              />

              <IncomeInput
                Amount={Amount}
                salary={salary}
                RealSalary={RealSalary}
                Type={Type}
                setsalary={setsalary}
                Key={Key}
              />
            </div>

            <ExpenseForm
              expense={expense}
              budget={budget}
              Category={Category}
              setCategory={setCategory}
              cost={cost}
              setcost={setcost}
              arrow={arrow}
            />
          </div>

          {/* Right side */}
          <div className="col-lg-6">
            <div className="row mt-3">
              <div className="col-lg-5">
                <Transactions info={info} />
              </div>

              <div className="col-lg-6">
                <ExpenseChart info={info} COLORS={COLORS} />
              </div>
            </div>

            <Summary totalExpenses={totalExpenses} balance={balance} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
