import React from 'react';
import ReactDOM from 'react-dom';
import Base from './components/Base'
import Welcome from './components/Welcome/App';
import Startup from './components/Welcome/Startup';
import Signup from './components/Welcome/Signup';
import Login from './components/Welcome/Login';
import Quiz from './components/Quiz/QuizApp';
import Dashboard from './components/Dashboard/Dashboard';
import TrackChoosing from './components/Dashboard/TrackChoosing';
import Questions from './components/Dashboard/AdminQuestions';
import QuestionsList from './components/Dashboard/AdminQuestionsList';

import './index.css';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {Router, IndexRoute, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  userEmail,
  firstTime,
  flexPaper,
  auth,
  addOrEditQuestionAdmin,
  questionsAdmin,
  questionsQuiz,
  timeQuiz,
  currentQuestionQuiz
} from './reducers/index.js';
import {composeWithDevTools} from 'redux-devtools-extension';

injectTapEventPlugin();

const store = createStore(combineReducers({
  routing: routerReducer,
  userEmail,
  firstTime,
  flexPaper,
  auth,
  form: formReducer,
  addOrEditQuestionAdmin,
  questionsAdmin,
  questionsQuiz,
  timeQuiz,
  currentQuestionQuiz
}), composeWithDevTools(applyMiddleware(thunkMiddleware)));

const history = syncHistoryWithStore(browserHistory, store)

// function run(){   var state = store.getState();   console.log(state); }
// store.subscribe(run);

ReactDOM.render(
  <Provider store={store}>
  <MuiThemeProvider>
    <Router history={history}>
      <Route component={Base}>
        <Route path="/" component={Welcome}>
          <IndexRoute component={Startup}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/login" component={Login}/>
        </Route>
        <Route path="/app" component={Dashboard}>
          <IndexRoute component={TrackChoosing}/>
          <Route path="/app/questions" component={Questions}>
            <Route path="/app/questions/:type" component={QuestionsList}/>
          </Route>
          <Route path="/app/quiz/:q_type" component={Quiz}/>
        </Route>
      </Route>
    </Router>
  </MuiThemeProvider>
</Provider>, document.getElementById('root'));
