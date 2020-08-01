import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { MaterialIcons, Ionicons } from '@expo/vector-icons'; 

export const Border = ({ title1, title2}) => {
    return (
        <View style= {styles.border}>
            <MaterialIcons name="location-on" style={styles.icon} size={35} color="black" />
            <Text style={styles.title}>{title1}</Text>
            <View 
                style={{
                    borderLeftWidth: wp('1%'),
                    borderLeftColor: 'black',
                    marginVertical: hp('2%'),
                    marginHorizontal: wp('8%'),
                }}
            />
            <Ionicons name="ios-funnel" style={styles.icon} size={35} color="black" />
            <Text style={styles.title}>{title2}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    border: {
        borderWidth: wp('.3%'),
        borderRadius: 8,
        width: wp('100'),
        height: hp('10%'),
        backgroundColor: '#dbbf07',
        marginTop: hp('5%'),
        justifyContent: 'center',
        flexDirection: 'row',
    },
    title: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: wp('2%')
    },
    icon: {
        alignSelf: 'center'
    }
});
