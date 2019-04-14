import React, { Component } from 'react';
import Airtable from 'airtable';
import showdown from 'showdown';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import logo from './assets/logo.svg'; // Tell Webpack this JS file uses this image
const markdownConverter = new showdown.Converter();
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    base('Stops').select({view: 'Grid view'})
    .eachPage(
      (records, fetchNextPage) => {
        this.setState({
          records
        });
        console.log(records);
        fetchNextPage();
      }
    );
  }
  createHTML(markdown){
    return(
      markdownConverter.makeHtml(markdown)
    )
  }
  parseImg(element) {
    if (element.imageURL instanceof Array) {
      return element.imageURL[0].thumbnails.large.url;
    }
    return ''; // FIXME add default image
  }
  render() {
    return (
      <div className="App">
        <div className="container-fluid mt-5">
          <img src={logo} alt="Logo" />
          <div className="row mt-5">
            <div className="col">
              <div className="card-deck">
              {this.state.records.length > 0 ? (
                this.state.records.map((record, index) =>
                  <div className="col-md-4 d-flex align-items-stretch" key={index}>
                    <div className="card card-location">
                      <div className="card-body">
                        <div className="image-cover">
                          <img className="card-img" src={this.parseImg(record.fields)}></img>
                        </div>

                        <div class="card-location-header">
                          <h3 className="card-title card-location-title">
                            {record.fields['Stop']}
                            <small className="text-muted card-location-days">
                              {record.fields['Days (planned)']} days
                            </small>
                          </h3>
                          <span className="card-location-place-type badge badge-warning" content='{record.fields["Place Type"]}'>
                            {record.fields['Place Type']}
                          </span>
                        </div>
                        <div className="card-text" dangerouslySetInnerHTML={{__html: this.createHTML(record.fields['Description'])}} />
                      </div>

                      <div className="card-footer">
                        <p><span className="">{record.fields['Activities available']}</span></p>
                        <p><span className="text-muted">Planned Stop: </span>{record.fields['Planned Stop']}</p>
                        <p><span className="text-muted">Budget: $</span>{record.fields['Daily Budget']}</p>
                      </div>
                    </div>
                  </div>
          )
          ) : (
            <div className="d-flex justify-content-center loading">
              <div class="text-center">
                <div className="spinner-border text-warning" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          )}
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
