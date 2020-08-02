import React from 'react';
import logo from './logo.svg';
import './Title.css';

export class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isDimmed: false};

    this.changeDim = this.changeDim.bind(this);
  }

  changeDim() {
    if (this.state.isDimmed === false) {
      this.setState({isDimmed: true});
    }
    else {
      this.setState({isDimmed: false});
    }
  }

  componentDidMount() {
    setInterval(this.changeDim, 3000);
  }

  render() {

    if (!this.state.isDimmed) {
      return (
        <div className="title">
          <img src={logo} className="titleStylefadeIn"/>
          <h2 className="text">REACT
            <span className="span">EXPERIMENTS</span>
          </h2>
        </div>
      )
    }
    else {
      return (
        <div className="title">
          <img src={logo} className="titleStylefadeOut"/>
            <h2 className="text">REACT
              <span className="span">EXPERIMENTS</span>
            </h2>
        </div>
      )
    }
  }
}

export default Title;
