import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';

import Utils from './../../resources/helpers/Utils'

class BannerStatic extends Component  {
  constructor(props) {
    super(props);
  }

  onViewPress() {
    Utils.showMessage('From BannerStatic.js')
  }

  render() {
    return (
        <TouchableOpacity onPress={this.props.onPress ? this.props.onPress : this.onViewPress}>
            <View style = {this.props.style} onClick={this.props.onClick}>
                <Image
                    style = {{width: this.props.width, height: this.props.height}}
                    source = {{uri: this.props.imageUrl}} />
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = {

}

module.exports = BannerStatic
