import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";
import View2 from './view';


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
export default function Insert({navigation}) {
    const [text,setText]=useState('');
    const [Age,setAge]=useState('');
    const [Roll,setRoll]=useState('');
   
    
    return (
       
        
        <View style={{flex:1,backgroundColor:'lightgrey'}}>
            
         <View style={{flex:0.40,paddingLeft:170}}>
         <TextInput style={{backgroundColor:'white',marginBottom:10, width:160, height:30,marginTop:100}}
    placeholder='               Name' 
    onChangeText={(text) => setText(text)}
    value={text}
    />
     <TextInput style={{backgroundColor:'white', marginBottom:10, width:160, height:30,marginTop:20}}
    placeholder='               Roll' 
    onChangeText={(Roll) => setRoll(Roll)}
    value={Roll}
    />
     <TextInput style={{backgroundColor:'white', marginBottom:10, width:160, height:30,marginTop:20}}
    placeholder='               Age' 
    onChangeText={(Age) => setAge(Age)}
    value={Age}
    />
         </View>
         <View style={{flex:0.60,paddingLeft:50}}>
            <View style={{flex:0.30,flexDirection:'row',paddingLeft:80}}>
            <TouchableOpacity style={{width:100, height:40, marginBottom:10}}
         
         onPress={()=>{
            db.collection('Student')
            .add({
                Name:text,
                Roll:Roll,
                age:Age,
    
             })
           
             setAge('')
             setRoll('')
             setText('')
       }}
         >
            <Text>         Insert </Text>
           
            
        </TouchableOpacity> 
        <TouchableOpacity
        onPress={()=>{

            const coversations = db.collection('Student')
            .where('Name', '==', text);
           
            
            coversations.get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                doc.ref.delete();
              });
            });
             setAge('')
             setRoll('')
             setText('')
        }}

        >

            <Text>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>{

            const coversations = db.collection('Student')
            .where('Name', '==', text);
           
            
            coversations.get().then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                doc.ref.update({
                    Roll:Roll,
                    age:Age,
                });
              });
            }); 
            // db.collection('Student')
            //  .doc('1234')
            //  .update({
            //    rollno: 340,
            //  })
             setAge('')
             setRoll('')
             setText('')
        }}

        >
            
            <Text>Update</Text>
        </TouchableOpacity>
            </View>
         
        <View style={{paddingLeft:100,width:500,height:400}}>
        <TouchableOpacity style={{width:200, height:100, marginBottom:9000,marginLeft:120}}
        onPress={()=>{
            navigation.navigate('View Screen')
             setAge('')
             setRoll('')
             setText('')
       }}
        >
        <Text>View</Text>
         </TouchableOpacity>
         
        </View >
        
         </View>
         
        </View>
    );
  }

