import React, { Component } from 'react';
import Airtable from 'airtable';
import { LazyImage } from "react-lazy-images";
import placeholder from '../assets/placeholder@2x.png';
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
    base('Stops').select({
      view: 'Grid view',
      filterByFormula: '{Planned Stop}="Yes"'
     //  sort: [
     //     {field: 'Country', direction: 'asc'}
     // ],
    })
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
          <ol className="card-deck">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <li className="col-md-4 d-flex align-items-stretch" key={index}>
                <div class="card-location-country">
                  {record.fields['country lookup']}
                </div>
                <div className="card card-location">
                  <div className="card-body">
                    <div className="image-cover">
                      <LazyImage
                        src={this.parseImg(record.fields)}
                        class="card-img"
                        placeholder={({ imageProps, ref }) => (
                          <img ref={ref} src={placeholder} alt={imageProps.alt} width="100%"/>
                        )}
                        actual={({ imageProps }) => <img {...imageProps} />}
                      />
                      <span className="card-location-place-type badge badge-warning" content={record.fields["Place Type"]}>
                        {record.fields['Place Type']}
                      </span>
                    </div>

                    <div class="card-location-header">
                      <h3 className="card-title card-location-title">
                        {record.fields['Stop']}
                        <small className="text-muted card-location-days">
                          {record.fields['Days planned']} days
                        </small>
                      </h3>
                    </div>
                    <p><span className="text-muted">{record.fields['Activities available']}</span></p>
                    <p>{record.fields['Description']}</p>
                  </div>

                  <div className="card-footer d-flex justify-content-between">
                      <div><span className="text-muted">$</span>{record.fields['Daily Budget']} <span className="text-muted">p/day </span></div>
                      <div><span className="text-muted">Total $</span>{record.fields['Total Cost']}</div>
                  </div>
                </div>
              </li>
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
            </ol>
          </div>
        </div>
    );
  }
}
