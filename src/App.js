import React, {Component} from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import ProjectDetails from './component/project/ProjectDetails';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import CreateProject from './component/project/CreateProject';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path='/' component={Dashboard} exact/>
            <Route path='/project/:id' component={ProjectDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/create' component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
