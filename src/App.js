import React, { Component } from 'react';
import showdown from 'showdown';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import logo from './assets/logo.svg';
import Theroute from './views/theroute';
import Packinglist from './views/packinglist';
import {BrowserRouter, Route} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid mt-5">
          <div className="masthead d-flex justify-content-between">
            <img src={logo} alt="Logo" />

            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">The Route</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/packinglist">Packing List</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
        <div className="container-fluid mt-5">
          <BrowserRouter>
             <div>
               <Route exact={true} path='/' render={() => (
                 <div className="App">
                   <Theroute />
                 </div>
               )}/>
               <Route exact={true} path='/packinglist' render={() => (
                 <div className="App">
                   <Packinglist />
                 </div>
               )}/>
             </div>
           </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
