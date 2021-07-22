import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ImageBackground, Image } from 'react-native';


export default class HomeScreen extends Component {


    render(){

        return(
            <View style={styles.container}>
                
                <SafeAreaView style={styles.droidSafeArea} />
                <ImageBackground source={require('../assets/stars.gif')} style={styles.backgroundImage}>

                <View style={styles.titleBar}>
                    <Text style={styles.titleText}>Stellar</Text>
                </View>
                </ImageBackground>

                <TouchableOpacity style={styles.routeCard} onPress={() =>
                    this.props.navigation.navigate("TonightSky")
                }>
                    <Text style={styles.routeText}>Tonight Sky</Text>
                    <Image source={require("../assets/spacecraft.png")}></Image>
                </TouchableOpacity>

            </View>
        )
    }
}

const Styles = StyleSheet.create({
    ScreenText:{
        flex:1, 
        justifyContent:"center"
    },
    titleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    container: {
        flex: 1
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    routeCard: {
        flex: 0.25,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
})