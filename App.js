'use strict'
import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    ScrollView,
    Dimensions
} from 'react-native'

import {
    DrawerNavigator,
    DrawerItems,
    DrawerView
} from 'react-navigation';

import Icon                     from 'react-native-vector-icons/FontAwesome';
import Home                     from './screens/Home'
import Collection               from './screens/Collection'
import Banner                   from './screens/Banner'
import Line                   from './resources/components/Line'

import CollectionGrid           from './screens/Collections/CollectionGrid'
import CollectionGridTextCenter from './screens/Collections/CollectionGridTextCenter'
import CollectionListThree      from './screens/Collections/CollectionListThree'
import CollectionListFour       from './screens/Collections/CollectionListFour'

import ListGrid                 from './screens/Listing/ListGrid'
import ListSwiper               from './screens/Listing/ListSwiper'
import ListSwiperCollection     from './screens/Listing/ListSwiperCollection'

import DrawerContent from './DrawerContent'

const options = {
    contentComponent: DrawerContent,
    contentOptions: {
        activeBackgroundColor: '#f7f7f7',
        activeTintColor: '#7b7b7b',
        inactiveTintColor : '#7b7b7b',
        labelStyle: {
            fontSize: 16,
            fontWeight: '500',
            //fontFamily: 'AvenirNext-Regular'
        },
        style: {
            marginVertical: 0,
            borderBottomWidth: 2,
            borderBottomColor :'red'
        },
    },
    drawerPosition: 'left' ,
    drawerWidth: Dimensions.get('window').width - 69,
    style: {
        paddingTop: 0, // This only works if you modify DrawerNavigator.js to pass style props. See link
    },
};

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
});

const LineT = () => <View><Text>yy</Text></View>

const routerConfig = {
    Banner: {
        screen: Banner,
        navigationOptions:{
            drawerLabel: 'Banner Material',
            drawerIcon: ({ tintColor }) => (
                <Icon style={styles.icon} name='image' size={16}/>
            )
        }
    },
    CollectionGrid: {
        screen: CollectionGrid,
    },
    CollectionGridTextCenter: {
        screen: CollectionGridTextCenter,
    },
    CollectionListThree: {
        screen: CollectionListThree,
    },
    CollectionListFour: {
        screen: CollectionListFour,
    },
    ListSwiper: {
        screen: ListSwiper,
    },
    ListGrid: {
        screen: ListGrid,
    },
    ListSwiperCollection: {
        screen: ListSwiperCollection,
    },
    Collection: {
      screen: Collection,
    },
    Home: {
        screen: Home,
    },
}

const App = DrawerNavigator(routerConfig , options );

const defaultGetStateForAction = App.router.getStateForAction;

AppRegistry.registerComponent('react-native-expo-store', () => App);

export default App