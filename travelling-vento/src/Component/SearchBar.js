import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Where are you going?' 
                placeholderTextColor='black'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: wp('.3%'),
        borderColor: '#d8d8d8',
        borderRadius: 8,
        backgroundColor: '#d8d8d8',
        width: wp('75%'),
        height: hp('7%'),
        marginLeft: wp('-5%'),
        // justifyContent: 'center',
        // alignSelf: 'center'
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;