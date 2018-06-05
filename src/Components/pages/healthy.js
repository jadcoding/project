import _ from 'lodash'
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './healthy.css'

export const  Healthy = () => (
  <Modal trigger={<Button>Healthy </Button>}>
    <Modal.Header>Get bigger muscles</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={require('./download.jpeg')} wrapped />

      <Modal.Description>
        <Header>These exercices will help you gain muscles quickly</Header>
        <p> Start This workout 3 days a week for 3 Months</p>
        <h1>Day1:</h1>
        <p>Run 10 mins, Chest 5 sets 10 reps, Biceps 5 sets 10 reps, Abs 3 sets 20 reps</p>
        <h2>Day2:</h2>
        <p>Run 10 mins, Back 5sets 10 reps, Triceps 5 sets 10 reps, Abs 3 sets 20 reps </p>
        <h3>Day3:</h3>
        <p>Run 10 mins Shoulders 5 sets 10 reps, Legs 5 sets 10 reps, Abs 3 sets 20 reps</p>
       <Image className="Imagess" size='small' src='/images/legs/653_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/legs/653_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/360_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/360_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/1_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/1_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/12_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/12_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/35_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/35_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/36_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/36_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/10_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/10_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/15_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/15_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/143_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/143_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/166_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/166_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/legs/69_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/legs/69_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/90_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/90_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/91_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/91_2.jpg'/>
        
        {_.times(8, i => (
          <Image
            key={i}
            // src='/assets/images/wireframe/paragraph.png'
            style={{ paddingBottom: 5 }}
          />
        ))}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      {/* <Button primary>
        Proceed <Icon name='chevron right' />
      </Button> */}
    </Modal.Actions>
  </Modal>
)

export default Healthy
