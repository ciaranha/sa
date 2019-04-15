import React, { Component } from 'react';

import Iframe from './iframe.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://airtable.com/embed/shr6pzT5ofBNzpzbw?backgroundColor=tealLight'
        };
    }

    render() {
        return (
            <div className="App">
              <Iframe source={this.state.src} />
            </div>
        );
    }
}

export default App;
