import * as React from "react";
import "./App.css";

// MUI Components
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";

// icons
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

// etc imports
import PortfolioPdf from "./assets/sajad.pdf";
import ResumePdf from "./assets/sajad_resume.pdf";

function App() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      {/*  snackbar: Copied to clipboard  */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        message="Copied to clipboard"
        onClose={handleClose}
      />

      {/* Middle Section */}
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "95vh" }}
      >
        <Grid item xs={12}>
          <img
            src={require("./assets/sajad_rahmdel.png")}
            alt="sajad_rahmdel"
            width={266}
            height={266}
          />
        </Grid>
        <Grid item xs={12}>
          <h5>Sajad Rahmdel</h5>
        </Grid>
        <Grid item xs={12}>
          <body1>Mobile Application Developer</body1>
        </Grid>
        <Grid item xs={12}>
          <body2>#Flutter &nbsp; #Android &nbsp; #iOS</body2>
        </Grid>
        <Grid item xs={12} margin={2}>
          {/* algin text left */}
          <Alert severity="info">
            I'm currently in South Korea and will be in Canada on November 18th, 2022.
          </Alert>
        </Grid>

        <Box sx={{ m: 3 }} />
        {/* Download Resume Button */}
        <Grid item xs={12}>
          <a
            href={ResumePdf}
            download="sajad_resume.pdf"
            style={{ textDecoration: "none" }}
          >
            <Button
            
              variant="contained"
              size="lg"
              active
              startIcon={
                <PictureAsPdfOutlinedIcon style={{ color: "#FFFFFF" }} />
              }
              style={{
                maxWidth: "350px",
                maxHeight: "48px",
                minWidth: "350px",
                minHeight: "48px",
                color: "#FFFFFF",
                backgroundColor: "#1F8B24",             }}
              sx={{ boxShadow: 0 }}
            >
              Download Resume
            </Button>
          </a>
        </Grid>
        {/* Download Portfolio Button */}
        <Grid item xs={12}>
          <a
            href={PortfolioPdf}
            download="sajad.pdf"
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              size="lg"
              active
              startIcon={
                <PictureAsPdfOutlinedIcon style={{ color: "#1672EC" }} />
              }
              style={{
                maxWidth: "350px",
                maxHeight: "48px",
                minWidth: "350px",
                minHeight: "48px",
                color: "#0F56B3",
                backgroundColor: "#E2EDFC",
              }}
              sx={{ boxShadow: 0 }}
            >
              Download Portfolio
            </Button>
          </a>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        padding={3}
      >
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          spacing={0.5}
        >
          {/* Address */}
          {/* <Grid item>
            <FmdGoodOutlinedIcon sx={{ fontSize: 24, color: "grey" }} />
          </Grid> */}
          <Grid item>
            <Button
              variant="text"
              textTransform="none"
              style={{ color: "#000", fontWeight: "normal" }}
              // onClick={() => {
              //   navigator.clipboard.writeText("me@sajad.io");
              //   handleClick();
              // }}
              startIcon={<FmdGoodOutlinedIcon style={{ color: "#1672EC" }} />}
            >
              Toronto, Ontario, Canada
            </Button>
            {/* <body1>Toronto, Ontario, Canada</body1> */}
          </Grid>
          <Box sx={{ m: 1 }} />
          {/* Email */}
          <Tooltip title="Click to copy" arrow placement="top">
            <Button
              variant="text"
              textTransform="none"
              style={{ color: "#000", fontWeight: "normal" }}
              onClick={() => {
                navigator.clipboard.writeText("me@sajad.io");
                handleClick();
              }}
              startIcon={<EmailOutlinedIcon style={{ color: "#1672EC" }} />}
            >
              me@sajad.io
            </Button>
          </Tooltip>
          <Box sx={{ m: 1 }} />
          {/* Phone number */}
          <Tooltip title="Click to copy" arrow placement="top">
            <Button
              variant="text"
              textTransform="none"
              style={{ color: "#000", fontWeight: "normal" }}
              onClick={() => {
                navigator.clipboard.writeText("00821025081486");
                handleClick();
              }}
              startIcon={
                <PhoneAndroidOutlinedIcon style={{ color: "#1672EC" }} />
              }
            >
              +82 (10) 2508-1486
            </Button>
          </Tooltip>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
