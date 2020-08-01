import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FontAwesome5 } from '@expo/vector-icons';

const Square = ({ title }) => {
    return (
        <View style={styles.base} >
            <FontAwesome5 name="glass-cheers" style={styles.icon} size={35} />
            <Text style={styles.heading}>{title}</Text>
            <View style={styles.timeContainer} >
                <Text style={styles.time}>09:00  PM</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        width: wp('40%'),
        height: hp('35%'),
        backgroundColor: '#dbbf07',
        marginHorizontal: wp('5%'),
        alignSelf: 'center',
        borderRadius: 5
    },
    heading: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        letterSpacing: wp('.3%'),
        alignSelf: 'center',
        marginTop: hp('2%')
    },
    icon: {
        alignSelf: 'center',
        marginTop: hp('8%')
    },
    timeContainer: {
        alignSelf: 'center',
        borderRadius: 10,
        borderWidth: wp('.3%'),
        backgroundColor: 'black',
        width: wp('30%'),
        height: hp('7%'),
        justifyContent: 'center',
        marginTop: hp('5.5%')
    },
    time: {
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        fontSize: hp('3%')
    }
});

export default Square;