import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ShadowLeft, ShadowRight, ShadowRightSmall, ShadowLeftSmall } from '../Component/CommonComponent';
import Search from '../Component/SearchBar';
import CircleImage from '../Component/CircleImage';

const HomeScreen = ({ navigation }) => {
    return (
        <>
            <ScrollView>
                <View style={styles.headingContainer}>
                    <Text style={styles.bigHeading}>V</Text>
                    <Text style={styles.heading}>ento</Text>
                </View>
                <ShadowLeft />
                <View style={{ marginLeft: wp('52%')}}>
                    <ShadowRight />
                </View>
                <View style={{ marginLeft: wp('8%')}}>
                    <ShadowRightSmall />
                </View>
                <View style={{ marginLeft: wp('82%')}}>
                    <ShadowRight />
                </View>
                <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'center'}}>
                    <ShadowRight />
                    <Search />
                </View>
                <View style={{ marginTop: hp('4%'), marginLeft: wp('70%')}}>
                    <ShadowLeftSmall />
                </View>
                <View style={{ marginLeft: wp('35%')}}>
                    <ShadowRight />
                </View>
                <View style={{marginTop: hp('5%')}}>
                    <Text style={styles.headingPara}>
                        <Text style={styles.details}>E</Text>
                        xciting places
                    </Text>
                    <Text style={styles.headingPara}>around you</Text>
                </View>
                <View style={{marginTop: hp('5%')}}>
                    <Text style={styles.paragraph}>
                        <Text style={{ fontSize: hp('3%'),}}>E</Text>
                        xperience the rich pub culture in a city 
                    </Text>
                    <Text style={styles.paragraph}>
                        that dosen't sleep and love to call our
                    </Text>
                    <Text style={styles.paragraph}>home</Text>
                </View>
                <Image 
                    style={styles.image}
                    source={require('../Assets/taj.jpg')}
                />
                <Text style={styles.largeHeading}>Bengaluru</Text>
                <View style={styles.imageSection}>
                    <CircleImage 
                        image={require('../Assets/Screenshot1.png')}
                        onPress={() => navigation.navigate('Details')}
                        title='Indigo XP'
                        subTitle='Koramangala 5th Block'
                    />
                    <CircleImage 
                        image={require('../Assets/Screenshot2.png')}
                        onPress={() => navigation.navigate('Details')}
                        title='The Black Rabbit'
                        subTitle='Indiranagar'
                    />
                </View>
                <View style={styles.imageSection}>
                    <CircleImage 
                        image={require('../Assets/Screenshot1.png')}
                        onPress={() => navigation.navigate('Details')}
                        title='Indigo XP'
                        subTitle='Koramangala 5th Block'
                    />
                    <CircleImage 
                        image={require('../Assets/Screenshot2.png')}
                        onPress={() => navigation.navigate('Details')}
                        title='The Black Rabbit'
                        subTitle='Indiranagar'
                    />
                </View>
                <View style={{marginTop: hp('5%')}}><Text></Text></View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    headingContainer: {
        flexDirection: 'row',
        marginTop: hp('6%'),
        alignSelf:'center',
        justifyContent: 'center'
    },
    bigHeading: {
        fontWeight: 'bold',
        fontSize: hp('11%'),
    },
    heading: {
        fontWeight: 'bold',
        fontSize: hp('6%'),
        alignSelf: 'center',
        fontFamily: "monospace",
    },
    details:{
        fontWeight: 'bold', 
        fontSize: hp('7%'),
    },
    headingPara: {
        marginLeft: wp('15%'),
        fontSize: hp('5%'),
        fontWeight: 'bold',
        letterSpacing: wp('.5%'),
        width: wp('80%'),
    },
    paragraph: {
        marginLeft: wp('15%'),
        letterSpacing: .3,
        fontSize: hp('2%'),
        width: wp('85%'),
    },
    image: {
        height:hp('40%'),
        width: wp('65'),
        alignSelf: 'center',
        marginTop: hp('5%'),
    },
    largeHeading: {
        fontSize: hp('4.5%'),
        fontWeight: 'bold',
        letterSpacing: wp('.3%'),
        fontFamily: "monospace",
        alignSelf: 'center',
        marginTop: hp('3%')
    },
    imageSection: {
        flexDirection: 'row', 
        marginTop: hp('4%'), 
        justifyContent: 'center',
    }
});

export default HomeScreen;