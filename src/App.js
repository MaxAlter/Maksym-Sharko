import React, { Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//Servises
import routes from './helpers/routes';
//Components
import Contacts from './Contact/Contacts';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import Resume from './Resume/Resume';
import Projects from './Projects/Projects';
import NavMenu from './Menu/NavMenu';

function App() {
  return (
    <>
      <NavMenu />
      <div>
        <Suspense fallback={<h1>Loading.....</h1>}>
          <Switch>
            <Route exact path={routes.HOME} component={HomePage} />
            <Route path={routes.ABOUT_ME} component={About} />
            <Route path={routes.RESUME} component={Resume} />
            <Route path={routes.CONTACTS} component={Contacts} />
            <Route path={routes.PROJECTS} component={Projects} />
            <Redirect to={routes.HOME} />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
