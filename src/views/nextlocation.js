import React, { Component } from 'react';
import Airtable from 'airtable';
import { LazyImage } from "react-lazy-images";
import placeholder from '../assets/placeholder@2x.png';
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');

export default class Nextlocation extends Component {
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
      filterByFormula: '{current stop}="Current"',
      maxRecords: 1
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
      <div class="app-header-half-container">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <div class="current-location app-header-half" key={index}>
                <div className="app-header-half-image">
                  <LazyImage
                    src={this.parseImg(record.fields)}
                    class="card-img"
                    placeholder={({ imageProps, ref }) => (
                      <img ref={ref} src={placeholder} alt={imageProps.alt} width="100%"/>
                    )}
                    actual={({ imageProps }) => <img {...imageProps} />}
                  />
                </div>
                <div>
                  <div className="app-header-half-pretitle">
                    Next Stop
                  </div>
                  <div class="d-flex">
                    <div className="app-header-half-title">
                      {record.fields['Stop']}
                    </div>
                    <small className="app-header-half-subtitle text-muted">
                      for {record.fields['Days planned']} days
                    </small>
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
    );
  }
}
