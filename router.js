import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import HeatMap from './HeatMap';
import Polygon from './Polygon';

export const Tabs = TabNavigator({
    Heat: {
        screen: HeatMap,
        navigationOptions: {
            tabBarLabel: 'Heat Map',
            tabBarIcon: <Icon name="wb-sunny" size={35} color="#FFCF5A" />
        },
    },
    Poly: {
        screen: Polygon,
        navigationOptions: {
            tabBarLabel: 'Draw a Polygon',
            tabBarIcon: <Icon name="create" size={35} color='#FFCF5A' />
        },
    },
});