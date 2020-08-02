import React from 'react';
import OptionDropdown from './OptionDropdown.js';
import './Options.css';

var optionsData = require('./optionsJSON.json');
var optionRows = optionsData.display;

export class Options extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: []
    }
  }

  componentDidMount() {

    var opts = [];
    for (var i=0; i < optionRows.length; i++) {
      opts.push(<OptionDropdown optionHeader={optionRows[i]} optionNames={optionsData[optionRows[i]]['optionNames']}/>)
    }

    this.setState({options: opts});
  }

  render() {
    return (
      <div className="options">
        {this.state.options}
      </div>

    )
  }

}

export default Options;
