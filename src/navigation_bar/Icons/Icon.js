import React from 'react';
import './Icon.css';
import {Wordpress} from '@styled-icons/boxicons-logos/Wordpress';
import {Github} from '@styled-icons/boxicons-logos/Github';
import {Google} from '@styled-icons/boxicons-logos/Google';
import {Person} from '@styled-icons/evaicons-solid/Person';
import {Linkedin} from '@styled-icons/boxicons-logos/Linkedin';
import {Map} from '@styled-icons/boxicons-solid/Map';

const sz = "30";

export class Icon extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      label: "",
      link: "",
      hoverText: ""
    }

    this.associateIcon = this.associateIcon.bind(this);
  }

  associateIcon(label) {

    if (label === 'Wordpress') {
      return <Wordpress size={sz}/>
    }
    else if (label === 'Github') {
      return <Github size={sz}/>
    }
    else if (label === 'Google') {
      return <Google size={sz}/>
    }
    else if (label === 'PersonOutline') {
      return <Person size={sz}/>
    }
    else if (label === 'Linkedin') {
      return <Linkedin size={sz}/>
    }
    else if (label === 'Map') {
      return <Map size={sz}/>
    }
  }

  render() {

    this.state.label = this.props.label;
    this.state.link = this.props.link;
    this.state.hoverText = this.props.hoverText;

    return (
      <div className="one-icon">
        <a href={this.state.link} id="icon-link" className="icon-link">
          {this.associateIcon(this.state.label)}
          <span>{this.state.hoverText}</span>
        </a>
      </div>
    )
  }
}

export default Icon;
