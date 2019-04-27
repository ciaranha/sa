import React, { Component } from 'react';
import Airtable from 'airtable';
import showdown from 'showdown';
const markdownConverter = new showdown.Converter();
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appu61KasWq0Muo66');


export default class Cameraroll extends Component {
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
    base('Camera Roll').select({
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
    if (element.images instanceof Array) {
      return element.images[0].thumbnails.large.url;
    }
    return '';
  }
  // parseImg(element) {
  //   if (element.images instanceof Array) {
  //     var x = element.images;
  //     var txt = "";
  //     var i;
  //     for (i = 0; i < x.length; i++) {
  //       txt = txt + x[i].thumbnails.large.url + "<br>";
  //     }
  //     return txt;
  //   }
  //   return '';
  // }

  render() {
    return (
      <div className="row mt-10">
        <div className="col-md-6 offset-md-3">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <div className="cameraroll-post" content={record.fields['Place']} key={index}>
                <div className="cameraroll-post-place">{record.fields['Place']}</div>
                <div className="cameraroll-post-image">
                  <img className="card-img" src={this.parseImg(record.fields)}></img>
                  <p className="journal-post-caption">{record.fields['Notes']}</p>
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
    );
  }
}
