import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const ShadowLeft = () => {
    return (
        <View style={styles.shadowLeftContainer}>
            <View 
                style={{
                    borderWidth: wp('.3%'),
                    borderColor: '#dbbf07',
                    borderRadius: 9,
                    width: wp('20%'),
                    height: hp('3%'),
                    backgroundColor: '#dbbf07',
                    marginLeft: wp('10%')
                }}
            />
        </View>
    );
}

export const ShadowRight = () => {
    return (
        <View style={styles.shadowRightContainer}>
            <View 
                style={{
                    borderWidth: wp('.3%'),
                    borderColor: '#dbbf07', 
                    borderRadius: 9,
                    width: wp('12%'),
                    height: hp('3%'),
                    backgroundColor: '#FFFF66',
                    marginLeft: wp('-10%'),
                }}
            />
        </View>
    );
}

export const ShadowRightSmall = () => {
    return (
        <View style={styles.shadowRightSmallContainer}>
            <View 
                style={{
                    borderWidth: wp('.3%'),
                    borderColor: '#dbbf07', 
                    borderRadius: 9,
                    width: wp('12%'),
                    height: hp('1.5%'),
                    backgroundColor: '#FFFF66',
                }}
            />
        </View>
    );
}

export const ShadowLeftSmall = () => {
    return (
        <View style={styles.shadowLeftSmallContainer}>
            <View 
                style={{
                    borderWidth: wp('.3%'),
                    borderColor: '#dbbf07',
                    borderRadius: 9,
                    width: wp('15%'),
                    height: hp('2%'),
                    backgroundColor: '#dbbf07',
                    marginLeft: wp('6%')
                }}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    shadowLeftContainer: {
        borderWidth: wp('.3%'),
        borderColor: '#dbbf07', 
        borderRadius: 9,
        width: wp('30%'),
        height: hp('3%'),
        backgroundColor: '#FFFF66',
    },
    shadowRightContainer: {
        borderWidth: wp('.3%'),
        borderColor: '#dbbf07',
        borderRadius: 9,
        width: wp('10%'),
        height: hp('3%'),
        backgroundColor: '#dbbf07',
        marginTop: hp('2%'),
        justifyContent: 'center'
    },
    shadowRightSmallContainer: {
        borderWidth: wp('.3%'),
        borderColor: '#dbbf07',
        borderRadius: 9,
        width: wp('18%'),
        height: hp('1.5%'),
        backgroundColor: '#dbbf07',
        marginTop: hp('2%'),
        justifyContent: 'center'
    },
    shadowLeftSmallContainer: {
        borderWidth: wp('.3%'),
        borderColor: '#dbbf07', 
        borderRadius: 9,
        width: wp('10%'),
        height: hp('2%'),
        backgroundColor: '#FFFF66',
        justifyContent: 'center'
    },
});