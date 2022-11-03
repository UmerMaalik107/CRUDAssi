import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList
} from "react-native";
// import ProfileScreen from './ProfileScreen';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

import React, { Component, useEffect, useState } from "react";
const firebaseConfig = {
    apiKey: "AIzaSyClfGujrFVby7z_eoB3wx8tQM7tKvXm-1o",
    authDomain: "crudapp-ac190.firebaseapp.com",
    projectId: "crudapp-ac190",
    storageBucket: "crudapp-ac190.appspot.com",
    messagingSenderId: "406170711221",
    appId: "1:406170711221:web:fca6f08b6f6c34ab69fafc"
  };
  let app;

  if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
  } else {
    app = firebase.app();
  }
const db = app.firestore();
//const auth = firebase.auth();
export default function View2({navigation}) {
  const [data1,setData1]=useState([]);
 

 
     db.collection('Student')
    .get()
    .then((querySnapshot) => {
     
      console.log('Firestore Total users: ', querySnapshot.size);
      // setData1(querySnapshot);
      setData1([]);
    let dumpData = []
      querySnapshot.forEach(documentSnapshot => {
        // console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
        dumpData = [...dumpData, documentSnapshot.data()]

        // data2.push({
        //   id: documentSnapshot.id,
        //   Name:documentSnapshot.data()
          
        // })
      
      }
      
      );
      // setData1(data2);
      setData1(dumpData);
    });
    console.log('the data is',data1);

  

    useEffect(() => {
    //return getData();
    },[]);
    
    return (

        <View style={{flex:1,backgroundColor:'lightgrey'}}>
          {console.log(data1)}
          <FlatList
        
        //horizontal={true}    
        data={data1}
        KeyExtractor={item=>item.name}
            renderItem={
                ({item}) => (
                  
                <View style={{ marginBottom:50, height:50,paddingRight:30,paddingTop:10}}>
                   
                <Text style={{fontSize:20, color:'white'}}>Name:{item.Name}</Text>
                <Text style={{fontSize:20, color:'white'}}>Age:{item.age}</Text>
                <Text style={{fontSize:20, color:'white'}}>Roll:{item.Roll}</Text>
  
                   
                </View>
                )
                }
            // keyExtractor={item=>item.key}
        />
        </View>
    );
  }

