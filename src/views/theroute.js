import React, { Component } from 'react';
import Airtable from 'airtable';
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');

export default class Theroute extends Component {
  state = {
  }

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
  parseImg(element) {
    if (element.imageURL instanceof Array) {
      return element.imageURL[0].thumbnails.large.url;
    }
    return ''; // FIXME add default image
  }
  render() {
    return (
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

                    <div className="card-location-header">
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
                    <p><span className="text-muted">{record.fields['Activities available']}</span></p>
                    <p>{record.fields['Description']}</p>
                  </div>

                  <div className="card-footer d-flex justify-content-between">
                    <p><span className="text-muted">Planned Stop: </span>{record.fields['Planned Stop']}</p>
                    <p><span className="text-muted">$</span>{record.fields['Daily Budget']} <span className="text-muted">p/day</span></p>
                  </div>
                </div>
              </div>
      )
      ) : (
        <div className="d-flex justify-content-center loading">
          <div className="text-center">
            <div className="spinner-border text-warning" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      )}
            </div>
          </div>
        </div>
    );
  }
}
