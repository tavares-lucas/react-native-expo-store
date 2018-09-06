'use strict'
import React, { PropTypes, Component } from 'react'
import {
    View, StyleSheet
} from 'react-native'

import colors from './../styles/colors'

class Line extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <View style={[styles.line, { backgroundColor: this.props.color || colors.bd_line }, this.props.style || {}] }></View>
    }
}

const styles = StyleSheet.create({
    line: {
        height: 1
    }
})

module.exports = Line
