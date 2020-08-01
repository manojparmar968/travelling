import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Search from '../Component/Search';
import Square from '../Component/Square';
import { Border } from '../Component/PlacesSearch';
import BgImage from '../Component/BgImage';

const RestaurantDetails = () => {
    return (
        <View>
            <Search />
            <ScrollView>
                <Border 
                    title1='Church Street'
                    title2='Birthday Party'
                />
                <BgImage />
                <View style={styles.container}>
                    <Square title='Happy Hour' />
                    <Square title='Comedy Night' />
                </View>
                <BgImage />
                <View style={styles.container}>
                    <Square title='Happy Hour' />
                    <Square title='Comedy Night' />
                </View>
                <View style={{marginTop: hp('20%')}}><Text></Text></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        flexDirection: 'row'
    },
});

export default RestaurantDetails;