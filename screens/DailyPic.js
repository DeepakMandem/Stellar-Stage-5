import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity, Linking } from 'react-native';
import axois  from 'axios'


export default class DailyPicScreen extends Component {


    getAPOD = () =>{
        axois
         .get("https://api.nasa.gov/planetary/apod?api_key=et1b0e8mBJUjBQD1ZP66qeWarXCVxIsqGgt4XyGG")
         .then(response => {
             this.setState({ apod: response.data})
         })
         .catch(error => {
             Alert.alert(error.message)
         })
    }

    componentDidMount(){
        this.getAPOD()
    }

    render(){

        return(
            <View style={Styles.ScreenText}>
                <Text> DailyPic Screen </Text>
            
                <View style={Styles.container}>
                    <SafeAreaView style={Styles.driodSafeArea}/>
                    <ImageBackground
                        source={require('../assets/stars.gif')} style={Styles.backgroundImage}>
                        <Text style={Styles.routeText}> Astronomy picture of the day </Text>
                        <Text style={Styles.titleText}> {this.state.apod.title} </Text>
                        <TouchableOpacity
                            style={Styles.listContainer} 
                            onPress={() => Linking.openURL(this.state.apod.url).catch(err => console.error("Couldn't load page", err))}
                        >
                            <View style={Styles.iconContainer}>
                                <Image source={require("../assets/play-video.png")} style={{ width:50, height:50}}></Image>
                            </View>


                        </TouchableOpacity>

                        <Text style={Styles.explanationText}>{this.state.apod.explanation}</Text>


                    </ImageBackground>

                </View>
            
            
            
            
            
            </View>

            

        )
    }
}

const Styles = StyleSheet.create({
    ScreenText:{
        flex:1, 
        justifyContent:"center"
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
    
    titleText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "white"
    },
    routeText: {
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 30
    },
    iconContainer: {

    },
    listContainer:{
        
    }
    
    

})
