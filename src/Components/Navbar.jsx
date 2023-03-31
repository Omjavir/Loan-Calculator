import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Fab } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignContent: "center",
              width: "100%",
            }}
          >
            <h2>Loan Calculator</h2>
            <div style={{ paddingTop: "20px" }}>
              <a href="https://github.com/Omjavir/Loan-Calculator" style={{color:"inherit"}} target="_blank" rel="noopener noreferrer">
                <GitHubIcon fontSize="large" />
              </a>
            </div>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
