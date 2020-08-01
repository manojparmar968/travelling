import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Feather } from '@expo/vector-icons';

const Search = () => {
    return (
        <View style={styles.container}>
            <Feather name='search' style={styles.iconStyle} />
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.inputStyle}
                placeholder='Your favourite dish' 
                placeholderTextColor='black'
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderWidth: wp('.5%'),
        borderColor: '#d8d8d8',
        borderRadius: 8,
        width: wp('80%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: hp('10%'),
        marginBottom: hp('2%')
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

export default Search;