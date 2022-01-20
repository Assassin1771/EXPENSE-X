import React from "react";

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: "center", padding: "0 10%" }}>
      Try saying: <br />
      Add {isIncome ? "Income " : "Expense "}
      for {isIncome ? "₹1000 " : "₹500 "}
      in Category {isIncome ? "Salary " : "Travel "}
      for {isIncome ? "Monday " : "Sunday "}
      <br /> <br />
      <b>Hold the Spacebar Key to Record Transaction</b>
    </div>
  );
};

export default InfoCard;
