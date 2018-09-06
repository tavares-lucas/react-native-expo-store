'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'

class ProductThumb extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let rowData = this.props
        return (
            <TouchableOpacity style={ styles.row } onPress={ this.props.onPress }>
                <Image style={ styles.image } source={{ uri: rowData.imageUri }} />
                <View style={ styles.textsHolder }>
                    <Text ellipsizeMode='tail' numberOfLines={2} style={ styles.name }>{ rowData.name } </Text>
                    <Text style={ styles.prize }>${ rowData.prize } </Text>
                    {
                        (rowData.regularPrize) ? <Text style={ styles.regularPrize }>${ rowData.regularPrize }</Text>: null
                    }
                    {
                        (rowData.shippingFare) ? <Text style={ styles.shippingFare }>{ rowData.shippingFare }</Text> : null
                    }
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        borderBottomWidth: 1,
        borderColor: colors.bd_line,
        flexDirection: 'row',
        padding: 10
    },
    name: {
        color: colors.txt_dark
    },
    prize: {
        fontSize: 16,
        marginTop: 3
    },
    regularPrize: {
        color: colors.txt_description,
        marginTop: 3,
        textDecorationLine: 'line-through'
    },
    image: {
        height: 100,
        width: 100,
        marginRight: 10
    },
    shippingFare: {
        color: colors.txt_description,
        marginTop: 3
    },
    textsHolder: {
        marginTop: -3,
        paddingRight: 100
    }
})

module.exports = ProductThumb
