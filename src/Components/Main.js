import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Helmet from 'react-helmet';
import Home from './pages/Home';
import Exercices from './pages/Exercices';
// import Workouts from './pages/Workouts';
import NotFound from './pages/NotFound.js';
import MyWorkouts from './pages/MyWorkouts'
import 'semantic-ui-css/semantic.min.css'; 
// import './Main.scss';
import Monday from'./days/monday.js'
import Tuesday from'./days/tuesday.js'
import Wednesday from'./days/wednesday.js'
import Thursday from'./days/thursday.js'
import Friday from'./days/friday.js'
import Saturday from'./days/saturday.js'
import Sunday from'./days/sunday.js'
import Login from'./pages/login.js'
import Apply from'./pages/signup.js'


import ResponsiveContainer from './ResponsiveContainer'


const Container = ({title, addExercise, exercises }) => (
  <div className="container-main">
    <Helmet titleTemplate={ `%s | `+title } defaultTitle={ title } />
    <ResponsiveContainer>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/home" component={ Home } />
        <Route path="/exercices" render={ () => <Exercices addExercise={addExercise}/> } />
        {/* <Route path="/workouts" component={ Workouts } /> */}
        <Route path="/myworkouts" component={ MyWorkouts } />
        <Route path="/login" component={ Login } />
        <Route path="/signup" component={ Apply } />
        <Route path="/monday" render={ () => <Monday exercises={exercises}/> } />
        <Route path="/tuesday" render={ () => <Tuesday exercises={exercises}/> } />
        <Route path="/wednesday" render={ () => <Wednesday exercises={exercises}/> } />
        <Route path="/thursday" render={ () => <Thursday exercises={exercises}/> } />
        <Route path="/friday" render={ () => <Friday exercises={exercises}/> } />
        <Route path="/saturday" render={ () => <Saturday exercises={exercises}/> } />
        <Route path="/sunday" render={ () => <Sunday exercises={exercises}/> } />
        <Route component={ NotFound }/>
        
      </Switch>
    </ResponsiveContainer>
  </div>
);

export default Container;
