import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Footer from './Pages/Footer';
import Team from './Pages/Team';
import GetInvolved from './Pages/GetInvolved';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/About" component={About} />
            <Route exact path="/Team" component={Team} />
            <Route exact path="/GetInvolved" component={GetInvolved} />
          </Switch>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
