import React, { useState, useEffect} from 'react';
import firebase from 'firebase/app';
import './App.css'

function Dashboard() {
  const [reservas, handleReservas] = useState([]);
  const [input, handleInput] = useState('');
  
  useEffect(()=>{
    firebase
    .database()
    .ref('user0001')
    .on('value', (e)=> (e)
    )
    console.log('Mounted ');
  }
  )
  
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
  
  const tabla = JSON.stringify(reservas);

  const mytabla =  tabla.split (',').map ((item, i) => <div>
  <p key={i}>{item
    .replace(RegExp(/([.*+?^=!$(){}|[\]\\""])/g)," ")
    .replace("userInfo","").replace(":","->").replace(":"," ")
  }</p><p> {item.replace(RegExp(/([.*+?^=!$(){}|[\]/\\""])/g)," ")
  .replace("userInfo","").replace(":","->").replace(":"," ")}</p>
  
  <button onClick={()=>writeAdminData(item)}> Confirmar </button></div>);
  
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
    <button onClick={()=>writeAdminData(input)}> Confirmar </button>
    <br></br><br></br>
    <ul className='myList' > { 
      mytabla.reverse()
      
    }
    </ul>  
    <button
    onClick={()=>deleteColletion()}
    > Limpiar la lista  </button>
    </div>
    )
  }
  const myStyle = {
    flex:1,textAlign:'center', alignContent:'center',alignItems:'center'
    
  }

  export default Dashboard;
  