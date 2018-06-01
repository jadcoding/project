import React from 'react';
// import { Route, Switch, Link } from 'react-router-dom';
import { Tab, Image, } from 'semantic-ui-react';
import muscles from '../../muscles'
import './About.css';




const TabExamplePointing = ({addExercise}) => {
  

  const panes = muscles.map(({title, id:muscle_id, exercises })=>{
  
    const exercicesHTML = exercises.map(({id:exercise_id,title,image})=>
  
      <Image className="qw" key={exercise_id} src={'./images/'+image} onClick={()=>addExercise(muscle_id,exercise_id)}/>
     
    )
    
  
    const render = () => (
      <Tab.Pane attached={false}>
        <Image.Group size='small'>
       
          { exercicesHTML }
        </Image.Group>
      </Tab.Pane>
      
    )
  
    return { menuItem: title, render }
  })

  return <Tab menu={{ pointing: true }} panes={panes} />
}


export default TabExamplePointing
