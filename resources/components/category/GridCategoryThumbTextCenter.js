'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, StyleSheet, Dimensions, Image, Text, TouchableOpacity
} from 'react-native'

// import Line from './../../components/Line'

import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const itemWidth = (width - 45) / 2
const itemHeight = itemWidth * 2 / 3

class GridCategoryThumbTextCenter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <Image style={ styles.image } source={{ uri: this.props.imageUri }}>
                </Image>
                <View style={ styles.textHolder }>
                    <Text style={ styles.text } ellipsizeMode='tail' numberOfLines={2}>
                        { this.props.name }
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: itemWidth,
        height: itemHeight,
        marginBottom: 20
    },
    image: {
        width: itemWidth,
        height: itemHeight,
        resizeMode: 'center',
        borderRadius: 10
    },
    textHolder: {
        justifyContent: 'center',
        alignItems: 'center',
        width: itemWidth,
        height: itemHeight,
        position: 'absolute',
    },
    text: {
        color: colors.txt_description_light,
        fontSize: 16,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
})

module.exports = GridCategoryThumbTextCenter
