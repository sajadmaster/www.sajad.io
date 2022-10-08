import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <img
              alt='sajad rahmdel'
              width={266}
              height={266}
              src=
              {require('./assets/sajad_rahmdel.png')}
            />
          </Col>
          <Col>
            <h5>Sajad Rahmdel</h5>
          </Col>
          <Col>
            <body1>Senior Mobile Application Developer</body1>
          </Col>

          <Col>
            <body2>#Flutter &nbsp; #Android &nbsp; #iOS</body2>
          </Col>
          {/* Col > Blue Button with text "Download Portfolio" with pdf icon*/}
          <Col>
            <Button variant="primary" size="lg" active>
              Download Portfolio
            </Button>
          </Col>
          
        </Row>
      </Container>

    </div>
  );
}

export default App;
