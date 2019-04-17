import React, { Component } from 'react';
import showdown from 'showdown';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import logo from './assets/logo.svg';
import Theroute from './views/theroute';
import Packinglist from './views/packinglist';
import Calendar from './views/calendar';
import Allstops from './views/allstops';
import Journal from './views/journal';
import Currentlocation from './views/currentlocation';
import Nextlocation from './views/nextlocation';
import People from './views/people';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="app-header">
          <Currentlocation />
          <People />
        </div>

        <div className="container-fluid mt-5">
          <div className="masthead d-flex justify-content-between">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>

            <nav className="navbar navbar-expand-lg navbar-light">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">Planned Route</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/allstops">All Stops</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/journal">Journal</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/calendar">Calendar</a>
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
               <Route exact={true} path='/allstops' render={() => (
                 <div className="App">
                   <Allstops />
                 </div>
               )}/>
               <Route exact={true} path='/journal' render={() => (
                 <div className="App">
                   <Journal />
                 </div>
               )}/>
               <Route exact={true} path='/packinglist' render={() => (
                 <div className="App">
                   <Packinglist />
                 </div>
               )}/>
               <Route exact={true} path='/calendar' render={() => (
                 <div className="App">
                   <Calendar />
                 </div>
               )}/>
             </div>
           </BrowserRouter>
        </div>

        <div class="footer">
          <div class="footer-img-container">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
