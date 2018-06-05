import _ from 'lodash'
import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import './modal.css'

export const  ModalExampleScrollingContent = () => (
  <Modal trigger={<Button>Overweight </Button>}>
    <Modal.Header>Lose Weight Fast</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src={require('./how-to-lose-weight-fast.jpg')} wrapped />

      <Modal.Description>
        <Header>These exercices will help you lose weight and gain muscles</Header>
        <p>This workout is 3 days a week for two months</p>
       <h1>Day1:</h1>
        <p>Run or walk for 20 mins, Chest 3 sets 10 reps, Biceps 3 sets 10 reps, Abs 3 sets 10 to 15 reps</p>
      <h2>Day2:</h2>
      <p>Run or walk for 20 mins, Back 3sets 10 reps, Triceps 3sets 10 reps, Abs 3 sets 10 to 15 reps </p>
      <h3>Day3:</h3>
      <p>Run or walk for 20 mins, Shoulders 3 sets 10 reps, Legs 3 stes 10 reps, Abs 3 sets 10 to 15 reps</p>
        <Image className="Imagess" size='small' src='/images/legs/653_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/legs/653_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/360_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/360_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/3311_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/3311_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/1_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/1_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/12_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/12_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/biceps/169_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/biceps/169_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/biceps/8_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/biceps/8_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/biceps/204_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/biceps/204_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/10_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/10_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/15_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/back/15_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/143_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/143_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/166_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/triceps/166_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/legs/32_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/legs/32_2.jpg'/>
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

export default ModalExampleScrollingContent
