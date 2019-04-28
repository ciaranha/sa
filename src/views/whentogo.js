import React, { Component } from 'react';
import Airtable from 'airtable';
import { LazyImage } from "react-lazy-images";
import showdown from 'showdown';
import placeholder from '../assets/placeholder@2x.png';
const markdownConverter = new showdown.Converter();
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');

export default class Whentogo extends Component {
  state = {
  }
  createHTML(markdown){
    return(
      markdownConverter.makeHtml(markdown)
    )
  }
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    base('Countries').select({
      view: 'Grid view'
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
          <div className="card-deck">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <div className="col-md-4 d-flex align-items-stretch card-whentogo" key={index}>
                <div className="card card-location">
                  <div className="card-body">

                    <div className="card-location-header">
                      <h3 className="card-title card-location-title">
                        {record.fields['Country']}
                      </h3>
                    </div>
                    <p><div className="journal-post-body" dangerouslySetInnerHTML={{__html: this.createHTML(record.fields['Best time to go'])}} /></p>
                  </div>

                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <div><span className="text-muted">Best months.. </span></div>
                    <div className="d-flex" dangerouslySetInnerHTML={{__html: record.fields['Best months']}}/>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <div><span className="text-muted">We'll be there.. </span></div>
                    <div className="d-flex" dangerouslySetInnerHTML={{__html: record.fields['Will be there']}}/>
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
