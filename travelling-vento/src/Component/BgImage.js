import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const BgImage = () => {
    return (
        <View style={styles.container}>
            <ImageBackground
                style={styles.bgImage}
                source={require('../Assets/Screenshot7.png')}
            >
                <View style={styles.circleContainer}>
                    <View style={styles.circle1}>
                        <Text style={styles.text}>Casual Dining</Text>
                    </View>
                    <View style={styles.circle2}>
                        <Text style={styles.text}>Bar</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.container2}>
                <Text style={styles.dark}>Socials</Text>
                <Text style={styles.light}>5KM</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: hp('10%'),
        borderRadius: wp('10%')
    },
    bgImage: {
        width: wp('90%'),
        height: hp('30%'),
        alignSelf: 'center'
    },
    circleContainer: {
        marginTop: hp('3%'),
        marginLeft: wp('5%'),
        flexDirection: 'row'
    },
    circle1: {
        borderWidth: wp('.3%'),
        borderRadius: wp('10%'),
        width: wp('40%'),
        height: hp('5%'),
        justifyContent: 'center',
        backgroundColor: '#dbbf07',
    },
    circle2: {
        borderWidth: wp('.3%'),
        borderRadius: wp('10%'),
        width: wp('18%'),
        height: hp('5%'),
        justifyContent: 'center',
        backgroundColor: '#dbbf07',
        marginLeft: wp('3%')
    },
    text: {
        alignSelf: 'center',
        fontSize: hp('2.5%'),
        letterSpacing: wp('.3%')
    },
    container2: {
        marginTop: hp('3%'),
        marginLeft: wp('5%'),
        flexDirection: 'row',
        alignItems: 'center'
    },
    dark: {
        fontSize: hp('5%'),
        fontWeight: 'bold',
        letterSpacing: wp('.3%'),
        fontFamily: "monospace",
    },
    light: {
        marginLeft: wp('5%'),
        fontSize: hp('3%'),
        marginTop: hp('3%')
    }
});

export default BgImage;