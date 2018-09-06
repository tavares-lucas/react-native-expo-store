'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, Dimensions, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native'

import colors from './../../styles/colors'

const { width } = Dimensions.get('window')
const holderWidth = width - 100
const smallImageWidth = holderWidth / 2
const bigImageWidth = (smallImageWidth * 2) - 1 // 1 is border top and bottom

class SwiperCollectionThumbFour extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity onPress={ this.props.onPress } style={ styles.holder }>
                <View style={ styles.imagesHolder }>
                    {/* Since the image don't have borderRightWidth */}
                    <View style={ styles.bigImageHolder }>
                        <Image style={ styles.smallImage } source={{ uri: this.props.img1 }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.img2 }} />
                    </View>
                    <View>
                        <Image style={ styles.smallImage } source={{ uri: this.props.img3 }} />
                        <Image style={ styles.smallImage } source={{ uri: this.props.img4 }} />
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
        flex: 1,
        width: holderWidth,
        flexDirection: 'column',
        justifyContent: 'center',
        marginRight: 15,
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

module.exports = SwiperCollectionThumbFour
