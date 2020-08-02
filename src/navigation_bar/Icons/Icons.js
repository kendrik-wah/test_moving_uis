import React from 'react';
import Icon from './Icon.js';
import './Icons.css';

var iconData = require('./imageJSON.json');
var names = iconData['names'];
var links = iconData['links'];
var hoverText = iconData['hoverText'];
var vals = [];

for (var i = 0; i < names.length; i++) {
  vals.push({'name': names[i],
             'link': links[i],
             'hoverText': hoverText[i]})
}

export class Icons extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      icons: []
    }

    this.importicons = this.importicons.bind(this);
  }

  importicons(r) {
    return r.keys().map(r);
  }

  componentDidMount() {

    var lst = [];
    for (var i = 0; i < vals.length; i++) {
      lst.push(<Icon label={vals[i].name} link={vals[i].link} hoverText={vals[i].hoverText} className="icon"/>);
    }

    this.setState({icons: lst});
  }

  render() {

    return (
      <div className='icons'>
        {this.state.icons}
      </div>
    )
  }
}

export default Icons;
