import React, {Component} from 'react';
import { Container, Image, Header, Segment, Grid } from 'semantic-ui-react'
import './App.css'

class App extends Component {

  render() {

    return (
      <Container className='cont-main'>

        <Header as='h2'>Reliable, efficient delivery</Header>
        <Header as='h3'>Powered by Technology</Header>

        <Header as='h4'>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</Header>

          <Grid stackable centered columns={3}  className='main-grid'>
      <Grid.Row verticalAlign='middle'>
        <Grid.Column>
          <Segment className='cyan'>
            <Header as='h5'>Supervisor</Header>
            Monitors activity to identify project roadblocks
            <Image src='./images/icon-supervisor.svg' alt='Supervisor'/>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Grid >
            <Grid.Row>
            
  
          <Segment className='red'>
            <Header as='h5'>Team Builder</Header>
            Scans our talent network to create the optimal team for your project
            <Image src='./images/icon-team-builder.svg' alt='Supervisor'/>
          </Segment>
            </Grid.Row>
            <Grid.Row>
            
  
          <Segment className='orange'>
            <Header as='h5'>Karma</Header>
            Regularly evaluates our talent to ensure quality
            <Image src='./images/icon-karma.svg' alt='Supervisor'/>
          </Segment>
            </Grid.Row>
          </Grid>
        </Grid.Column>
        <Grid.Column>
        
  
          <Segment  className='blue'>
            <Header as='h5'>Calculator</Header>
            Uses data from past projects to provide better delivery estimates
            <Image src='./images/icon-calculator.svg' alt='Supervisor'/>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Container className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" >Frontend Mentor</a>. Coded by<a href="https://www.linkedin.com/in/paulohsz/" target="_blank" rel="noopener noreferrer" >Paulo Henrique Stocco Zancanaro</a>.
      </Container>
      </Container>
    );
  }
}

export default App;
