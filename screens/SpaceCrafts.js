import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, SafeAreaView, ImageBackground, TouchableOpacity, Linking, FlatList } from 'react-native';
import axois  from 'axios'


export default class SpaceCraftScreen extends Component {

    getData=()=>{
        axois.get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response => {
                this.setState({ aircrafts: response.data.results })
                console.log(response.data.results)

            })
            .catch(error =>{
                console.log(error.message)
            })
    }

    renderItem = ({item}) =>{
        return(
            <View style={{borderWidth:1,justifyContent:'center',alignItems:'center',marginBottem:10,elevation:10}}>
                <Image
                    source={{uri: item.agency.image_url}} style={{ width:"100%", height: 200, marginTop: 15, marginBottem:15, marginRight:10}}></Image>
                
                <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                <Text style={{color:'#696969'}}>{item.agency.name}</Text>
                <Text>DESCRIPTION</Text>
                <Text style={{color:'#A9A9A9',marginLeft:10,marginRight:10}}>{item.agency.description}</Text>

            </View>



        )


        
    }


    render(){

        
        return(
            <View style={Styles.ScreenText}>
                

                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <View styles={{flex:0.75}}>
                        <Text> SpaceCraft Screen </Text>
                    </View>

                    <View styles={{flex:0.75}}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            data={this.state.aircrafts}
                            renderItem={this.renderItem}
                        />
                    </View>

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
