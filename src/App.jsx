import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Result from "./Components/Result";
import TenureSelect from "./Components/TenureSelect";
import SliderSelect from "./Components/SliderSelect";
import { Lines } from "react-preloaders";

function App() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState({
    homeValue: 10000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });

  setTimeout(() => {
    setLoading(false)
  }, 1000);

  return (
    <div>
      <Lines customLoading={loading} />
      <Navbar />
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        <Grid container spacing={5} alignItems="center">
          <Grid item xs={12} md={6}>
            <SliderSelect data={data} setData={setData} />
            <TenureSelect data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Result data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
