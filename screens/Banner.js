'use strict'
import React, {Component} from 'react'
import {
    Text,
    Image,
    View,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native'

import ImageSlider from 'react-native-image-slider';

import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './../resources/styles/SliderEntry.style';
import SliderEntry from './../resources/components/SliderEntry';
import carouselStyles from './../resources/styles/index.style';
import { ENTRIES1, ENTRIES2 } from './../data/carousel';

import Container from './../resources/components/Container'
import Line from './../resources/components/Line'

import colors from './../resources/styles/colors'

import Header from './../resources/components/Header'
import BannerStatic from './../resources/components/BannerStatic'
import BannerWithText from './../resources/components/BannerWithText'

var {height, width} = Dimensions.get('window');
const initWidth = width;
const initHeight = initWidth * (500/900)

class Banner extends Component {
    constructor(props) {
        super(props)

        this.state = {
            position: 1,
            interval: null
        };
    }

    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    getSlides (entries) {
        if (!entries) {
            return false;
        }

        return entries.map((entry, index) => {
            return (
                <SliderEntry
                  key={`carousel-entry-${index}`}
                  even={(index + 1) % 2 === 0}
                  {...entry}
                />
            );
        });
    }

    _renderBannerSlider(){
        return (
            <ImageSlider
                height = {200}
                images={[
                    'https://c1.staticflickr.com/6/5062/5649039693_4ae12562b5_b.jpg',
                    'https://c1.staticflickr.com/8/7014/6712827125_4e1e474737_b.jpg',
                    'https://c1.staticflickr.com/6/5545/10770069154_b626552554_b.jpg',
                    'https://c1.staticflickr.com/9/8142/6974554082_5b5a7ef762_z.jpg'
                ]}
                position={this.state.position}
                onPositionChanged={position => this.setState({position})}
            />
        )
    }

    _renderCarousel(){
        return (
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                inactiveSlideScale={1}
                inactiveSlideOpacity={1}
                enableMomentum={true}
                autoplay={true}
                autoplayDelay={500}
                autoplayInterval={2500}
                containerCustomStyle={carouselStyles.slider}
                contentContainerCustomStyle={carouselStyles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={false}
                >
                { this.getSlides(ENTRIES2) }
            </Carousel>
            );
    }

    _renderCarousel2(){
        return (
            <Carousel
                sliderWidth={sliderWidth}
                itemWidth={itemWidth}
                firstItem={1}
                inactiveSlideScale={0.94}
                inactiveSlideOpacity={0.6}
                enableMomentum={false}
                containerCustomStyle={styles.slider}
                contentContainerCustomStyle={styles.sliderContainer}
                showsHorizontalScrollIndicator={false}
                snapOnAndroid={true}
                removeClippedSubviews={false}
                >
                { this.getSlides(ENTRIES1) }
            </Carousel>
        );
    }

    _renderBanner(){
        return(
            <View>
                <BannerStatic
                    width = {initWidth}
                    height = {initWidth * (401/773)}
                    imageUrl = "https://c1.staticflickr.com/6/5674/21871273659_b43c493ad7_k.jpg"
                    style = {{marginBottom: 10}}
                    />
            </View>

        )
    }

    _renderBannerText(){
        return (
                <BannerWithText
                    width = {initWidth}
                    height = {initWidth /2 }
                    imageUrl = "https://c1.staticflickr.com/9/8259/15600521877_c92ed8f002_b.jpg"
                    style = {{marginBottom: 10}}
                    text = "Best Sale Off Today"
                    />
        )
    }

    render() {
        return (
            <Container style={{backgroundColor: '#f5f5f5'}}>
                <Header
                    navigation={this.props.navigation}
                    title="Banner"/>

                <ScrollView>
                    <Text style={styles.section_title}>
                        Slider Banner
                    </Text>
                    {this._renderBannerSlider()}
                    <Line />
                    <Text style={styles.section_title}>Carousel 1 </Text>
                    {this._renderCarousel()}
                    <Text style={styles.section_title}>Carousel 2 </Text>
                    {this._renderCarousel2()}
                    <Text style={styles.section_title}>
                        Static Banner
                    </Text>
                    {this._renderBanner()}
                    <Line />
                    <Text style={styles.section_title}>
                        Static Banner With Text
                    </Text>
                    {this._renderBannerText()}
                    <Line />
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
    section_title:{
        fontSize: 16,
        fontWeight: '500',
        padding: 20,
//        fontFamily: 'AvenirNext-Regular'
    }
})

module.exports = Banner
