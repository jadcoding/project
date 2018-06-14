import React from 'react';

import { Tab, Image,Header, Modal,Button,Dropdown} from 'semantic-ui-react';
import muscles from '../../muscles';
import './About.css';
const options = [
  { key: 'Monday', icon: 'Monday', text: 'Monday', value: 'Monday' },
  { key: 'Tuesday', icon: 'Tuesday', text: 'Tuesday', value: 'Tuesday' },
  { key: 'Wednesday', icon: 'Wednesday', text: 'Wednesday', value: 'Wednesday' },
  { key: 'Thursday', icon: 'Thursday', text: 'Thursday', value: 'Thursday' },
  { key: 'Friday', icon: 'Friday', text: 'Friday', value: 'Friday' },
  { key: 'Saturday', icon: 'Saturday', text: 'Saturday', value: 'Saturday' },
  { key: 'Sunday', icon: 'Sunday', text: 'Sunday', value: 'Sunday' },
]




const TabExamplePointing = ({addExercise}) => {
  

  const panes = muscles.map(({title, id:muscle_id, exercises })=>{
  
    const exercicesHTML = exercises.map(({id:exercise_id,title,image})=>
   
    
   <Modal trigger={<Image  className="qw" key={exercise_id} src={'./images/'+image}></Image>} closeIcon>
   <Header content="Selecet A Day" />
   <Modal.Content>
     
     
     
   </Modal.Content>
   <Modal.Actions>
   <Button.Group color='teal'>
    <Button onClick={()=>addExercise(muscle_id,exercise_id)}>ADD</Button>
    <Dropdown options={options} floating button className='icon' />
  </Button.Group>
    
   </Modal.Actions>
 </Modal>
)
   
    
  
    const render = () => (
      <Tab.Pane >
      
        <Image.Group size='small'>
    
          { exercicesHTML }
      
        </Image.Group>
      </Tab.Pane>
      
    )
  
    return { menuItem: title, render }
  })

  return <Tab menu={{ fluid: true, vertical: true, tabular: 'right' }} panes={panes} />
} 


export default TabExamplePointing
