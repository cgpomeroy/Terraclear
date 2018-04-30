import React, { Component } from 'react';
import { Tabs } from './router';

const hotspot = require('./hotspot.html')

export default class App extends Component {
  render() {
    return (
        <Tabs showIcon={true} />
    );
  }
}

