import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CircleImage = ({ image, title, subTitle, onPress }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <Image 
                    style={styles.image}
                    source={image}
                />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {

    },
    image:{
        width: 160,
        height: 160,
        borderRadius: 500,
        marginHorizontal: wp('5%'),
        marginVertical: hp('5%'),
        alignItems: 'center'
    },
    title: {
        fontSize: hp('2.5%'),
        fontWeight: 'bold',
        alignSelf: 'center',
        // letterSpacing: wp('.2%')
    },
    subTitle: {
        marginTop: hp('1%'),
        fontSize: hp('2.2%'),
        alignSelf: 'center',
        // letterSpacing: wp('.2%')
    }
});

export default CircleImage;