// import PropTypes from 'prop-types';
import React from 'react';
import BMIBox from './Bmi.js'
import './Home.css';
import './Bmi.css'

import {
//   Button,
   Container,
//   Divider,
//   Grid,
//   Header,
//   Icon,
//   Image,
//   List,
//   Menu,
//   Responsive,
   Segment,
//   Sidebar,
//   Visibility,
} from 'semantic-ui-react';


const HomepageHeading = ({ mobile }) => (
  <Container text>
  
  
      
      <div>
        <div>
        
       

          <div>
           <img alt='' className="w" src={require('./maxresdefault.jpg')}  />
          </div>
        </div>
        {/* <section>          
          <img className="imag" src={require('./sample2.png')} /> 
          <ul>
            <li> <a href="exercices.html">Neck</a></li> 
            <li> <a href="exercices.html">Traps</a></li> 
            <li> <a href="exercices.html">deltoids</a></li> 
            <li> <a href="exercices.html">Chest</a></li> 
            <li>  <a href="exercices.html">Biceps</a></li> 
            <li>  <a href="exercices.html">Foream</a></li> 
            <li>  <a href="exercices.html">Abs</a></li> 
            <li>  <a href="exercices.html">Quads</a></li> 
            <li>  <a href="exercices.html">Calves</a></li> 
          </ul>
        </section>  
        <section>
          <img className="imag" src={require('./sample1.png')} /> 
          <ol>
            <li className="z"> <a href="exercices.html">Traps</a></li> 
            <li className="z"> <a href="exercices.html">Triceps</a></li> 
            <li className="z"> <a href="exercices.html">Lats</a></li> 
            <li className="z">  <a href="exercices.html">MiddleBack</a></li> 
            <li className="z">  <a href="exercices.html">LowerBack</a></li> 
            <li className="z">  <a href="exercices.html">Glutes</a></li> 
            <li className="z">  <a href="exercices.html">Hamstrings</a></li> 
            <li className="z">  <a href="exercices.html">Quads</a></li> 
            <li className="z">  <a href="exercices.html">Calves</a></li> 
          </ol>
        </section> */}
      </div>
  
   
    {/* <Header
    
      as='h1'
      // content='Imagine-a-Company'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
     
    <Header
      as='h2'
      // content='Do whatever you want when you want to.'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    {/* <Button primary size='huge'>
      Get Started
      <Icon name='right arrow' />
    </Button> */}
   <BMIBox/>
  </Container>
)
// const Home = () => (
  
//         <div>
//           <img className="w" src={require('./maxresdefault.jpg')}/></div>
       
  
// )


const HomepageLayout = ({ mobile }) => (
  <div>
    <Segment inverted  style={{ padding: '1em 0em' }} vertical>
        <HomepageHeading />
    </Segment>
   
  </div>
)

export default HomepageLayout
