import React from 'react';

export class Option extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      displayName: ""
    }
  }

  componentDidMount() {

    this.setState({displayName: this.props.displayName});
  }

  render() {

    return (
      <div className="dropdown-option">
        <a href="#">{this.state.displayName}</a>
      </div>

    )
  }
}


export default Option;
