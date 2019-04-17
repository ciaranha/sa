import React, { Component } from 'react';
import Airtable from 'airtable';
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');

export default class Packinglist extends Component {
  state = {
  }

  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    base('Packing List').select({view: 'Packing List'})
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
    return '';
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="col">
          <div className="card-deck">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <div className="col-md-3 d-flex align-items-stretch" key={index}>
                <div className="card card-location">
                  <div className="card-body">
                    <div className="image-cover image-cover-packing-list">
                      <img className="card-img" src={this.parseImg(record.fields)}></img>
                      <span className="card-location-place-type badge badge-warning" content='{record.fields["Place Type"]}'>
                        {record.fields['Type']}
                      </span>
                    </div>

                    <div className="card-location-header">
                      <h3 className="card-title card-location-title">
                        {record.fields['Item']}
                      </h3>

                    </div>
                    <p><span className="card-brand text-muted">{record.fields['Brand']}</span></p>
                    <p>{record.fields['Description']}</p>

                  </div>

                  <div className="card-footer d-flex justify-content-between align-items-center">
                      <a className="btn btn-sm btn-light" href={record.fields['Link']}>
                        Buy it
                      </a>
                    <div><span className="text-muted">$</span>{record.fields['Price']}</div>
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
