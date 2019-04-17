import React, { Component } from 'react';
import Airtable from 'airtable';
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');

export default class Journal extends Component {
  state = {
  }

  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    base('Journal').select({view: 'Grid view'})
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
    if (element.cover instanceof Array) {
      return element.cover[0].thumbnails.large.url;
    }
    return '';
  }

  render() {
    return (
      <div className="row mt-5">
        <div className="journal"/>
        <div className="col-md-9">
          <div className="row">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <div className="row journal-post" content={record.fields['Post Type']} key={index}>
                <div className="col-md-8">
                  <img className="card-img" src={this.parseImg(record.fields)}></img>
                  <p class="journal-post-caption">{record.fields['Body']}</p>
                </div>

                <div className="col-md-4">
                  <h1 className="journal-post-title">
                    {record.fields['Title']}
                  </h1>
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
