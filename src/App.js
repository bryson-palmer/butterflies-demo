import { Scroll, ScrollControls } from '@react-three/drei';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <>
      <color attach='background' args={['#000000']} />

      <ScrollControls pages={6} damping={0.25}>
        {/* 3D stuff */}
        <Scroll></Scroll>

        {/* HTML stuff */}
        <Scroll html style={{ width: '100%' }}>
          <Container style={{ height: '100px', position: 'relative' }}>
            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px' }}
            >
                <Col xs={6}>
                  <div>
                    <h1 style={{ marginBottom: '0px' }}>Life can be a struggle</h1>
                  </div>
                </Col>
            </Row>

            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '100vh' }}
            >
              <Col xs={6}>
                  <div>
                    <h1 style={{ marginBottom: '0px' }}>Sometimes you can feel</h1>
                  </div>
              </Col>
            </Row>

            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '200vh' }}
            >
              <Col xs={6}>
                  <div>
                    <h1 style={{ marginBottom: '0px' }}>Lost</h1>
                    <h1 style={{ marginBottom: '0px' }}>Overwhelmed</h1>
                    <h1 style={{ marginBottom: '0px' }}>Empty inside</h1>
                  </div>
              </Col>
            </Row>

            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '300vh' }}
            >
              <Col xs={6}>
                  <div>
                    <h1 style={{marginBottom: '0px'}}>Drifting through life <br />With no help or guidance</h1>
                  </div>
              </Col>
            </Row>   

            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '400vh' }}
            >
              <Col xs={8}>
                  <div>
                    <h1 style={{ marginBottom: '0px' }}>But there is hope...<br/> and people who can help</h1>
                  </div>
              </Col>
            </Row>  

            <Row
              className='text-center align-items-center justify-content-center'
              style={{ position: 'absolute', width: '100%', height: '100vh', padding: '0px 30px 0px', top: '500vh' }}
            >
              <Col xs={6}>
                  <div>
                    <h1 style={{ marginBottom: '0px' }}>It's time to get<br/> the support you need</h1>
                    <h2 style={{ marginBottom: '30px', marginTop: '-20px' }}>To get your life back</h2>
                    <Button variant="outline-light" size="lg">Get help now</Button>
                    {' '}
                  </div>
              </Col>
            </Row>
          </Container>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default App;
