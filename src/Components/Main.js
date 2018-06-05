import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import Exercices from './pages/Exercices';
import Workouts from './pages/Workouts';
import NotFound from './pages/NotFound.js';
import MyWorkouts from './pages/MyWorkouts'
import 'semantic-ui-css/semantic.min.css'; 
import './Main.scss';


import ResponsiveContainer from './ResponsiveContainer'


const Container = ({title, addExercise, exercises }) => (
  <div className="container-main">
    <Helmet titleTemplate={ `%s | `+title } defaultTitle={ title } />
    <ResponsiveContainer>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/exercices" render={ () => <Exercices addExercise={addExercise}/> } />
        <Route path="/workouts" component={ Workouts } />
        <Route path="/myworkouts" render={ () => <MyWorkouts exercises={exercises}/> } />
        <Route component={ NotFound }/>
      </Switch>
    </ResponsiveContainer>
  </div>
);

export default Container;
