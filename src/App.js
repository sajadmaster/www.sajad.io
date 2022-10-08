import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function App() {
  return (
    <div className="App">
      {/* Middle Section */}
      <Grid
        container
        direction="column"
        spacing={2}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <img src={require('./assets/sajad_rahmdel.png')} alt="sajad_rahmdel" width={266} height={266} />
        </Grid>
        <Grid item xs={12}>
          <h5>Sajad Rahmdel</h5>
        </Grid>
        <Grid item xs={12}>
          <body1>Senior Mobile Application Developer</body1>
        </Grid>
        <Grid item xs={12}>
          <body2>#Flutter &nbsp; #Android &nbsp; #iOS</body2>
        </Grid>
        <Box sx={{ m: 3 }} />
        <Grid item xs={12}>
          <Button variant="contained" size="lg" active>
            Download Portfolio
          </Button>
        </Grid>
      </Grid>
    </div >
  );
}

export default App;
