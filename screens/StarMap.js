import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { WebView } from 'react-native-webview'




export default class StarMapScreen extends Component {

    constructor(){
        super();
        this.state = {
            latitude: "",
            longitude: ""
        }
    }

    


    render(){

        const { longitude, latitude} = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'

        return(
        

            <View style={Styles.ScreenText}>
                <Text> StarMap Screen </Text>

                

                <View>

                    <WebView
                        scalesPageToFit={true}
                        source={{ uri: path }}
                        style={{ marginTop: 20, marginBottem: 20}}
                    />

                </View>

                <View>

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderRadius: 1}}
                        placeholder="Enter your latitude"
                        placeholderTextColor = "#ffff#000000"
                        onChangeText={(text)=>{
                            this.setState({
                                latitude: text
                            })
                        }}
                    />

                    <TextInput
                        style={{height: 40, borderColor: 'gray', borderRadius: 1}}
                        placeholder="Enter your longitude"
                        placeholderTextColor = "#ffff#000000"
                        onChangeText={(text)=>{
                            this.setState({
                                longitude: text
                            })
                        }}
                    />

                    

                    
                </View>


            </View>
            
        )
    }
}

const Styles = StyleSheet.create({
    ScreenText:{
        flex:1, 
        justifyContent:"center"
    }
})
