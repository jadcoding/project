import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import './contact.css'
const  CardExampleCard = () => (
    <Card.Group>
        <Card>
    <Image src='/images/New Folder/images (2).jpeg' />
      <Card.Content>
          
        <Card.Header content='Jimmy' />
        <Card.Description content='Personal Trainer' />
        <Card.Description content='Contact:79192026' />

      </Card.Content>
    </Card>
    <Card>
     <Image src='/images/New Folder/6343f735b9ea440325c7c0511284b6db.jpg' />
      <Card.Content>
        <Card.Header>Cynthia</Card.Header>
        <Card.Meta>Personal Trainer</Card.Meta>
        <Card.Description>Contact:+22679160000</Card.Description>
      </Card.Content>
    </Card>
    

    

    <Card>
        <Image src='/images/New Folder/registered-dietitian.jpg' />
      <Card.Content
        header='Sam'
        meta='Dietitian'
        description='Contact:79458715'
      />
    </Card>
    <Card>
        <Image src='/images/New Folder/images (3).jpeg' />
      <Card.Content
        header='Natasha'
        meta='Dietitian'
        description='Contact:79458715'
      />
    </Card>
   
  </Card.Group>
)

export default CardExampleCard