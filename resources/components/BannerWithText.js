import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity, Dimensions } from 'react-native';

import colors from './../styles/colors'

const { width } = Dimensions.get('window')
const itemWidth = width
const itemHeight = itemWidth * 2 / 3

class BannerWithText extends Component  {
  constructor(props) {
      super(props);
  }
  render() {
    return (
        <TouchableOpacity onPress = {this.props.onPress} style={ styles.holder }>
            <Image
                style={ styles.image }
                source = {{uri: this.props.imageUrl}}>
            </Image>
            <View style={ styles.textHolder }>
                <Text style={ styles.text } ellipsizeMode='tail' numberOfLines={2}>
                    { this.props.text.toUpperCase() }
                </Text>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = {
    holder: {
        width: itemWidth,
    },
    image: {
        width: itemWidth,
        height: itemHeight,
        resizeMode: 'center'
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
        fontSize: 28,
        backgroundColor: 'rgba(0, 0, 0, 0)'
    }
}

module.exports = BannerWithText
