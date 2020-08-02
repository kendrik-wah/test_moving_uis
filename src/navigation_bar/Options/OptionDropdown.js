import React from 'react';
import './OptionDropdown.css';
import Option from './Option.js';

export class OptionDropdown extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      optionHeader: "",
      options: [],
      showOptions: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {

  }

  componentDidMount() {

    var opts = [];
    for (var i=0; i < this.props.optionNames.length; i++) {
      opts.push(<Option displayName={this.props.optionNames[i]} />);
    }

    this.setState({optionHeader: this.props.optionHeader,
                   options: opts});
  }

  render() {
    return (
      <div className="dropdown">
        <button className="dropbtn" onClick={this.handleClick}>{this.props.optionHeader}</button>
        <div className="dropdown-content">
          {this.state.options}
        </div>
      </div>
    )
  }
}

export default OptionDropdown;
