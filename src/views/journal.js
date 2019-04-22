import React, { Component } from 'react';
import Airtable from 'airtable';
import showdown from 'showdown';
const markdownConverter = new showdown.Converter();
const base = new Airtable({ apiKey: 'keyNxi8D57wMKr4Ge' }).base('appKL8Umn96W3lcVd');


export default class Journal extends Component {
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
    base('Journal').select({
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
    if (element.cover instanceof Array) {
      return element.cover[0].thumbnails.large.url;
    }
    return '';
  }

  render() {
    return (
      <div className="row mt-10">
        <div className="journal"/>
        <div className="col-md-6 offset-md-3">
          {this.state.records.length > 0 ? (
            this.state.records.map((record, index) =>
              <div className="journal-post" content={record.fields['Post Type']} key={index}>
                <div className="journal-post-image">
                  <img className="card-img" src={this.parseImg(record.fields)}></img>
                  <p class="journal-post-caption">{record.fields['caption']}</p>
                </div>

                <div className="journal-post-title">
                  <h1>
                    {record.fields['Title']}
                  </h1>
                  <div className="journal-post-body" dangerouslySetInnerHTML={{__html: this.createHTML(record.fields['Body'])}} />

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
