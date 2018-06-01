import React, { Component } from 'react'
// import { Button, Dimmer, Header, Image } from 'semantic-ui-react'

// export default class DimmerExampleEvents extends Component {
//   state = {
//     images: [
//       './images/chest/1_1.jpg',
//       './images/chest/1_2.jpg',
//       './images/chest/35_1.jpg',
//       './images/chest/12_2.jpg',
//     ],
  
//     // active: [
//     //   false,
//     //   false,
//     //   false,
//     //   false
//     // ]
//   }

//   handleShow = () => this.setState({ active: true })
//   handleHide = () => this.setState({ active: false })

//   render() {
//     const { active } = this.state
//     const content = (
//       <div>
//         <Header as='h2' inverted>Title</Header>

//         <Button primary>Add</Button>
//         <Button>View</Button>
//       </div>
//     )
//     const doubled = 
//       this.state.images.map((images, index) =>
//       <Dimmer.Dimmable
//         as={Image}
//         dimmed={active}
//         dimmer={{ active, content }}
//         onMouseEnter={this.handleShow}
//         onMouseLeave={this.handleHide}
//         size='medium'
//         src={this.state.images[index]}
//       />
//      );
    
//     return (
//       <div>{doubled}</div>
//     )
//   }
// }
import _ from 'lodash'
import './workout.css'
import { Grid, Image, Item, Rail, Sticky } from 'semantic-ui-react'

const Placeholder = () => <Image src='/assets/images/wireframe/paragraph.png' />

export default class StickyExampleOversized extends Component {
  state = {}

  handleContextRef = contextRef => this.setState({ contextRef })

  render() {
    const { contextRef } = this.state

    return (
      <Grid >
        <Grid.Column>
          <div ref={this.handleContextRef}>
            
              {_.times(0, i => <Placeholder key={i} />)}

              <Rail >
                <Sticky context={contextRef}>
                  <Item.Group divided>
                    {_.times(1, i => (
                      <Item key={i}>
                        <Item.Image size='medium' src={require('./how-to-lose-weight-fast.jpg')} />
                        <Item.Content>
                          <Item.Header as='a'>Lose weight</Item.Header>
                          <Item.Meta></Item.Meta>
                        </Item.Content>
                        <Item.Image size='medium' src={require('./how-to-lose-weight-fast.jpg')} />
                        <Item.Content>
                          <Item.Header as='a'>Lose weight</Item.Header>
                          <Item.Meta></Item.Meta>
                        </Item.Content>
                      </Item>
                    ))}
                  </Item.Group>
                </Sticky>
              </Rail>

              
          
          </div>
        </Grid.Column>
      </Grid>
    )
  }
}
