'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const holderWidth = (width - 30) * 4 / 5
const smallImageWidth = holderWidth / 3
const bigImageWidth = (smallImageWidth * 2) - 1 // 1 is border top and bottom

class SwiperCollectionThumbThree extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <View style={ styles.imagesHolder }>
                    {/* Since the image don't have borderRightWidth */}
                    <View style={ styles.bigImageHolder }>
                        <Image style={ styles.bigImage } source={{ uri: this.props.bigImageUri }} />
                    </View>
                    <View>
                        <Image style={ styles.smallImage } source={{ uri: this.props.smallTopImageUri }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.smallBottomImageUri }} />
                    </View>
                </View>
                <Text style={ styles.name } ellipsizeMode='tail'>{ this.props.name }</Text>
                <Text style={ styles.author }>{ this.props.author }</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    holder: {
        width: holderWidth,
        marginRight: 15,
        flexDirection: 'column'
    },
    bigImage: {
        width: bigImageWidth,
        height: bigImageWidth
    },
    bigImageHolder: {
        borderWidth: 0.5,
        borderColor: colors.bd_input,
        borderRightWidth: 0
    },
    smallImage: {
        width: smallImageWidth,
        height: smallImageWidth,
        borderWidth: 0.5,
        borderColor: colors.bd_input
    },
    author: {
        color: colors.txt_description
    },
    name: {
        marginTop: 6
    },
    imagesHolder: {
        flexDirection: 'row'
    }
})

module.exports = SwiperCollectionThumbThree
