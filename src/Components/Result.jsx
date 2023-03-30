import React, {  useState } from "react";
import { Stack, TextField, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Result = ({ data }) => {
  const [monthlyPayment, SetmonthlyPayment] = useState(20000);
  const { homeValue, loanAmount, loanTerm, interestRate } = data;
  const totalLoanMonths = loanTerm * 12;
  function handleChange(event) {
    setTimeout(() => SetmonthlyPayment(event.target.value), 1500);
  }
  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  const pieChartData = {
    labels: ["Principle", "Interest"],
    datasets: [
      {
        label: "Ratio of Principle and Interest",
        data: [homeValue, totalInterestGenerated],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div>
      <Stack gap={3}>
        <Typography textAlign="center" variant="h5">
          Monthly Payment: ₹{monthlyPayment} <br />
          <TextField style={{marginTop: 8}} id="outlined-basic" onChange={handleChange} type={"number"} label="Edit Monthly Payment" variant="outlined" />
        </Typography>
        <Stack direction="row" justifyContent="center">
          <div>
            <Pie data={pieChartData} />
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default Result;
