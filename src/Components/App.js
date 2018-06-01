import React, { Component } from 'react';
import Main from './Main'
import { getOne } from '../muscles'

class App extends Component{
  state = {
    exercises:[]
  }
  addExercise = (muscle_id, exercise_id) => {
    
    const exercise = getOne(muscle_id,exercise_id)
    const exercises = [...this.state.exercises, exercise ]
    this.setState({exercises})
  }
  render(){
    return (
      <Main exercises={this.state.exercises} addExercise={this.addExercise} title="MySite"/>
    );
  }
}


export default App;
