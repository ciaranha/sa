import React, { Component } from 'react';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import logo from './assets/logo.svg';
import Theroute from './views/theroute';
import Packinglist from './views/packinglist';
import Calendar from './views/calendar';
import Allstops from './views/allstops';
import Routemap from './views/routemap';
import Journal from './views/journal';
import Cameraroll from './views/cameraroll';
import Currentlocation from './views/currentlocation';
import Whentogo from './views/whentogo';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-header">
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
                  <a className="nav-link" href="/calendar">Calendar</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/whentogo">When to go</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/packinglist">Packing List</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/journal">Journal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/cameraroll">Camera Roll</a>
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
               <Route exact={true} path='/routemap' render={() => (
                 <Routemap />
               )}/>
               <Route exact={true} path='/allstops' render={() => (
                 <Allstops />
               )}/>
               <Route exact={true} path='/journal' render={() => (
                 <Journal />
               )}/>
               <Route exact={true} path='/cameraroll' render={() => (
                 <Cameraroll />
               )}/>
               <Route exact={true} path='/packinglist' render={() => (
                 <Packinglist />
               )}/>
               <Route exact={true} path='/calendar' render={() => (
                 <Calendar />
               )}/>
               <Route exact={true} path='/whentogo' render={() => (
                 <Whentogo />
               )}/>
             </div>
           </BrowserRouter>
        </div>

        <div className="footer">
          <div className="footer-img-container">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
