'use strict'
import React, { Component } from 'react'
import {
    View, ScrollView, StyleSheet, ListView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import Container from './../../resources/components/Container'
import colors from './../../resources/styles/colors'

import Grid from './../../resources/components/Grid'
import GridCategoryThumbTextCenter from './../../resources/components/category/GridCategoryThumbTextCenter'
import categories from './../../data/categories'
import Header from './../../resources/components/Header'
import Utils from './../../resources/helpers/Utils'

class CollectionGridTextCenter extends Component {
    static navigationOptions = {
        drawerLabel: 'Collection Grid 2',
        drawerIcon: ({ tintColor }) => (
            <Icon style={styles.icon} name='th-large' size={16}/>
        )
    };

    constructor(props) {
        super(props)
    }

    _renderGridList(data) {
       return (
           <Grid style={{ paddingTop: 15 }}>
               {
                   data.map((item, idx) => {
                      return <GridCategoryThumbTextCenter onPress={() => this._pressCategory(idx)} key={ idx } { ...item }/>
                   })
               }
           </Grid>
       )
   }

   _pressCategory(id){
       Utils.showMessage('You clicked on collection with ID ' + id)
   }

    render() {
        return (
            <Container>
                <Header navigation={this.props.navigation} title="Collection Grid Text Center"/>
                <ScrollView>
                    { this._renderGridList(categories.data) }
                </ScrollView>
            </Container>
        )
    }
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.bg_header
    },
    headerSub: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logo: {
        width: 64,
        height: 28,
        resizeMode: 'center'
    },
    icoSearch: {
        color: colors.txt_description,
        marginRight: 5
    },
    btnSearchHolder: {
        padding: 15,
        paddingTop: 0
    },
    btnSearch: {
        borderColor: colors.bd_input,
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 8,
        backgroundColor: colors.bg1,
        borderWidth: 1,
        borderRadius: 5
    },
    btnSearchTitle: {
        color: colors.txt_description,
        fontSize: 16
    },
    btnDeals: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 0.5
    },
    icoDeals: {
        color: colors.txt_description,
        marginRight: 10
    },
    section_title:{
        fontSize: 18,
        fontWeight: '600',
        padding: 20
    }
})

module.exports = CollectionGridTextCenter
