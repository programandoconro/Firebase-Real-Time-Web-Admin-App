import React, { Component } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonList,
  
} from "@ionic/react";
import TabContainer from "../components/TabContainer";
import firebase from '@firebase/app';

const writeAdminData =(userInfo)=> {
  firebase.database().ref('user0001').push({
    userInfo
  }).catch((error)=>{
    console.log('error ' , error);
  })
}

class HomePage extends Component {
  
  constructor() {
    super();
    this.state = {
      onListPage: true,
      data:[],
      reservas:[],
      value:  [],
      
    };
  };
  
  componentWillUpdate () {
    
    const readUsersData = ()=> {
      const nameRef =  firebase.database().ref('user0001')
      nameRef.on('value', (snapshot)=> {
        const state = snapshot.val();
        this.state.reservas =  state;
      })
    }
    readUsersData();
  }
  
  _changedTabs = e => {
    if (e.currentTarget.attributes.tab.value === "tab1") {
      this.setState(() => ({ onListPage: true }));
    } else {
      this.setState(() => ({ onListPage: false }));
    }
  }
  
  render() {
    
    const pushAdminData = (data)  => {
      this.setState({data })
    }
    
    const reservas =  JSON.stringify(this.state.reservas)
    const tabla =  reservas.split (',').map ((item, i) => <p key={i}>{item}</p>)
    
    return (
      
      <IonPage>
      <IonHeader>
      <IonToolbar color="primary">
      </IonToolbar>       
      <h1 style={{flex:1,textAlign:'center', alignContent:'center'}}>Introduzca la reserva a confirmar:</h1>
      <div             style={myStyle}  
      >
      <input 
      onChange={ e=> this.setState({value: e.target.value})}
      value={this.state.value} 
      
      > 
      </input>  
      </div>
      
      <div             style={myStyle}  
      >
      <IonButton
      onClick= {()=>{
        pushAdminData(this.state.value) ;
        writeAdminData( JSON.stringify(this.state.value).replace(/["{[,}\]]/g, "") ) ;
        alert('La confirmación ha sido enviada ' + this.state.value )
      }}
      
      > Enviar </IonButton>
      </div>           
      </IonHeader>        
      
      <IonContent >
      <div style={myStyle}> 
      <IonList    > {tabla.reverse()}  </IonList>   
      </div>
      <TabContainer
      history={this.props.history}
      changedTabs={e => this._changedTabs(e)}
      />
      
      </IonContent>
      
      </IonPage>
      
      );
    }
  }
  
  const myStyle = {
    
    flex:1,textAlign:'center', alignContent:'center',alignItems:'center'
    
  };
  
  export default HomePage;
  
