import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import ResearchProjects from './Pages/ResearchProjects';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Team from './Pages/Team';
import GetInvolved from './Pages/GetInvolved';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/ResearchProjects" component={ResearchProjects} />
            <Route path="/about" component={About} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/getInvolved" component={GetInvolved} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
