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
        <p>Start this workout by doing 3 sets 10 reps for 3 weeks</p>
        <Image className="Imagess" size='small' src='/images/abs/90_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/90_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/91_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/abs/91_2.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/360_1.jpg'/>
        <Image className="Imagess" size='small' src='/images/chest/360_2.jpg'/>

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
