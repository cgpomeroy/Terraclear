import React from 'react';
import { WebView } from 'react-native';

const hotspot = require('./hotspot.html')

export default class HeatMap extends React.Component {
    render() {
        return (
            <WebView
                source={hotspot}
            />
        );
    }
}
