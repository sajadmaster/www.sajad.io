import './App.css';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

// icons
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';

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
        style={{ minHeight: '95vh' }}
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
        {/* Download Portfolio Button */}
        <Grid item xs={12}>
          <Button variant="contained" size="lg" active startIcon={<PictureAsPdfOutlinedIcon style={{ color: '#1672EC' }} />} style={{ maxWidth: '350px', maxHeight: '48px', minWidth: '350px', minHeight: '48px', color: '#0F56B3', backgroundColor: '#E2EDFC' }} sx={{ boxShadow: 0 }}>
            Download Portfolio
          </Button>
        </Grid>
      </Grid>

      {/* Bottom Section */}
      <Grid
        container
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        <Grid container
          alignItems="center"
          justifyContent="center"
          spacing={0.5}
        >
          {/* Address */}
          <Grid item >
            <FmdGoodOutlinedIcon sx={{ fontSize: 24, color: 'grey' }} />
          </Grid>
          <Grid item >
            <body1>Toronto, Ontario, Canada</body1>
          </Grid>
          <Box sx={{ m: 1 }} />
          {/* Email */}
          <Grid item >
            <EmailOutlinedIcon sx={{ fontSize: 24, color: 'grey' }} />
          </Grid>
          <Grid item>
            <body1 onClick={() => { navigator.clipboard.writeText('me@sajad.io') }}
            >me@sajad.io</body1>
          </Grid>
          <Box sx={{ m: 1 }} />
          {/* Phone number */}
          <Grid item >
            <PhoneAndroidOutlinedIcon sx={{ fontSize: 24, color: 'grey' }} />
          </Grid>
          <Grid item>
            <body1 onClick={() => { navigator.clipboard.writeText('0012899434731') }}>+1 (289) 943-4731</body1>
          </Grid>
        </Grid>


      </Grid>

    </div >
  );
}

export default App;
