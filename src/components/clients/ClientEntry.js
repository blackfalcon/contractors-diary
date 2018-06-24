import React, { Component } from 'react';

class ClientEntry extends Component {
  render() {
    return (
      <li>{this.props.entry}</li>
    );
  }
}

export default ClientEntry
