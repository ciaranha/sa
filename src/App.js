import React, { Component } from 'react';
import Airtable from 'airtable';
import showdown from 'showdown';
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
  render() {
    return (
      <div className="App">
        {this.state.records.length > 0 ? (
          this.state.records.map((record, index) =>
            <div key={index}>
              <h2>{record.fields['Stop']}</h2>
              <p>{record.fields['Place Type']}</p>
              <p>{record.fields['Major Activity']}</p>
              <p>{record.fields['Country']}</p>
              <p>Activities: {record.fields['Activities available']}</p>
              <p>{record.fields['Will Stop']}</p>
              <div dangerouslySetInnerHTML={{__html: this.createHTML(record.fields['Description'])}} />
              <p>Days planned: {record.fields['Days (planned)']}</p>
              <p>{record.fields['Map Location']}</p>
              <p>Budget: {record.fields['Daily Budget']}</p>
              <p>When to go: {record.fields['When to go']}</p>
            </div>
          )
          ) : (
            <p>Loading...</p>
          )}
        </div>
    );
  }
}

export default App;
