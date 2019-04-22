import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.scss';
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

        <div className="container-fluid mt-5">
          <div className="masthead d-flex justify-content-between">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
        </div>

        <div className="container-fluid mt-5">
          <BrowserRouter>
             <div>
               <Route exact={true} path='/' render={() => (
                 <Theroute />
               )}/>
               <Route exact={true} path='/allstops' render={() => (
                 <Allstops />
               )}/>
               <Route exact={true} path='/journal' render={() => (
                 <Journal />
               )}/>
               <Route exact={true} path='/packinglist' render={() => (
                 <Packinglist />
               )}/>
               <Route exact={true} path='/calendar' render={() => (
                 <Calendar />
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
