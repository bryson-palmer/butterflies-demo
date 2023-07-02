import { Environment, Float, Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Butterfly } from './models/Butterfly';
import { Bloom, DepthOfField, EffectComposer, Vignette } from '@react-three/postprocessing';

/*
  tutorial example uses version "^0.148.0" of three
  consider switching versions if an bugs persist
*/

function App() {
  return (
    <>
      {/* Background color */}
      <color attach='background' args={['#000000']} />

      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <spotLight
        castShadow
        position={[0, 25, 0]}
        angle={1.3}
        penumbra={1}
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset='warehouse' />

      {/* Postprocessing effects */}
      <EffectComposer>
        <Bloom intensity={2} luminanceThreshold={0.9} height={1000} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={5} height={480} />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />
      </EffectComposer>

      <ScrollControls pages={6} damping={0.25}>
        {/* 3D butterfly stuff */}

        <Scroll>
          {/* Top */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly rotation-x={Math.PI * 0.05} scale={0.05} position={[0,-2.5,0]}/>
            <Butterfly scale={0.05} position={[-10,-3,-6]}/>
            <Butterfly scale={0.05} position={[10,-4,-10]}/>   
          </Float>
          {/* Top */}

          {/* Middle */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly scale={0.05} position={[-1,-12.5,0]}/>
            <Butterfly scale={0.05} position={[12,-14,-10]}/>   
          </Float>        
          {/* Middle */}

          {/* Bottom */}
          <Float
            speed={1} // Animation speed, defaults to 1
            rotationIntensity={2} // XYZ rotation intensity, defaults to 1
            floatIntensity={0.2} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
            floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
          >
            <Butterfly scale={0.05} position={[-3, -19.5, 2]}/>
            <Butterfly scale={0.05} position={[8, -23, -10]}/>
            <Butterfly scale={0.05} position={[4, -24, 2]}/>  
          </Float>  
          {/* Bottom */}      

          {/* Sparkles */}
          <Sparkles noise={0} count={500} speed={0.01} size={0.6} color={"#FFD2BE"} opacity={10} scale={[20,100,20]}></Sparkles>
          <Sparkles noise={0} count={50} speed={0.01} size={10} color={"#FFF"} opacity={2} scale={[30,100,10]} ></Sparkles>
        </Scroll>

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
