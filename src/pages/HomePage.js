import React, { useState, useEffect} from 'react';
import firebase from 'firebase';
import TabTwoPage from './TabTwoPage';
import {IonButton} from "@ionic/react";
import './App.css';

function HomePage() {
  const [reservas, handleReservas] = useState([]);
  const [input, handleInput] = useState('');

  useEffect(()=>{
    firebase
    .database()
    .ref('user0001')
    .on('value', (e)=> (e)
    )
    console.log('Mounted ');
  })
  
  useEffect(()=>{
    
    firebase
    .database()
    .ref('user0001')
    .on('value', handleReservas
    );
  },[])
  
  const deleteColletion =()=> {
    firebase
    .database()
    .ref('user0001').remove()
    
  }
  
  const tabla = JSON.stringify(reservas)
  
  const mytabla =  tabla.split (',').map ((item, i) => <div>
  <p key={i}>{item
    .replace(RegExp(/([.*+?^=!$(){}|[\]\/\\""])/g)," ")
    .replace("userInfo","").replace(":","->").replace(":"," ")
  }</p><item> {item.replace(RegExp(/([.*+?^=!$(){}|[\]\/\\""])/g)," ")
  .replace("userInfo","").replace(":","->").replace(":"," ")}</item>
  
  <IonButton onClick={()=>writeAdminData(item)}> Confirmar </IonButton></div>);
  
  const writeAdminData =(userInfo)=> {
    firebase.database().ref('user0001').push({
      userInfo
    }).catch((error)=>{
      console.log('error ' , error)
    })
  }
  
  return (
    
    <div style={myStyle}>
    <h1>Click a la reserva a confirmar o confirmar manualmente </h1>
    
    <input 
    value={input}
    onChange={e=>handleInput(e.target.value)}
    >
    </input>
    <IonButton onClick={()=>writeAdminData(input)}> Confirmar </IonButton>
    
    <br></br>
    <br></br>
    
    <ul className='myList' > { 
      
      mytabla.reverse()
      
    }
    
    </ul>  
    <IonButton
    style={{color:'red'}}
    onClick={()=>deleteColletion()}
    > Limpiar la lista  </IonButton>
    <TabTwoPage/>
    </div>
    )
  }
  
  const myStyle = {
    flex:1,textAlign:'center', alignContent:'center',alignItems:'center'
    
  }
  
  export default HomePage;
  
  
  
  
  
  
