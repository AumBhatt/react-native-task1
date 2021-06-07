import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, Dimensions } from 'react-native';

export default function App() {
  const [searchText, setSearchText] = useState('')
  const makeASearch = () => {
    //window.location = ''
  }
  return (
    <>
      
      <View style={styles.container}>
        <Image style={styles.logo} source={{uri: 'https://static.wixstatic.com/media/ca6d51_120f130598344b4a849edf363794e421~mv2.png/v1/crop/x_233,y_485,w_782,h_771/fill/w_140,h_140,al_c,q_85,usm_0.66_1.00_0.01/Logo%20-%20White.webp'}}></Image>
        <TextInput placeholderTextColor="white" onChangeText={searchText => setSearchText(searchText)} defaultValue={searchText} style={styles.textBox1} placeholder="Type in something...."></TextInput>
        <Button color="grey" onPress={() => {
          console.log(searchText.split(' ').join('+'))
          window.location = `https://www.google.com/search?q=${searchText.split(' ').join('+')}`
        }} title='search'/>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#2f2f2f',
  },
  logo: {
    position: 'absolute',
    width: 200,
    height: 200,
    top: 75, 
  },
  textBox1: {
    borderColor: 'red',
    borderStyle: 'solid',
    borderRadius: 12,
    margin: 5,
    padding: 5,
    color: 'white'
  }
});
