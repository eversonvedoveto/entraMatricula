import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  View
} from 'react-native';



export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.matr}>
          Matrícula: 
        </Text>
        <TextInput defaultValue='F' maxLength={8} autofocus="true" style={styles.inputs} />
       <Button style={styles.botao} title="Registrar Ponto" onPress={()=>Alert.alert("Registrado")}/>
               
            
            
          
        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  matr: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'black',
  },
  
  inputs:{
      width: 100,
      
  },
  botao:{
      width: 300,
      color: 'yellow',
      
  },
});
