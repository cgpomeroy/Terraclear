import React from 'react';
import { WebView } from 'react-native';

const polygon = require('./polygon.html')

export default class Polygon extends React.Component {
    render() {
        return (
            <WebView
                source={polygon}
            />
        );
    }
}

