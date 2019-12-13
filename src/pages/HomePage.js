import React, { Component } from "react";
import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonButton,
  IonList,
  
} from "@ionic/react";
import firebase from '@firebase/app';
import TabTwoPage from './TabTwoPage'

const writeAdminData =(userInfo)=> {
  firebase.database().ref('user0001').push({
    userInfo
  }).catch((error)=>{
    console.log('error ' , error);
  })
}

class HomePage extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      onListPage: true,
      data:[],
      reservas:[],
      value:  [],
      loading:true
      
    };
  };
  
  componentDidMount() {
    this.setState({ loading: true });
    firebase.database().ref('user0001').on('value', snapshot => {
      // convert messages list from snapshot
      this.setState({ loading: false });
      this.setState({reservas:{snapshot}})
    });
  }
  
  
  componentWillUpdate () {
    
    
    
    
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
    const tabla =  reservas.split (',').map ((item, i) => <p key={i}>{
                                             item.substr(35).replace("}","").replace("}}","")}</p>)
    
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
        writeAdminData( this.state.value) ;
        alert('La confirmación ha sido enviada ' + this.state.value )
      }}
      
      > Enviar </IonButton>
      </div>           
      </IonHeader>        
      
      <IonContent >
      <div style={myStyle}> 
      <IonList    > {tabla.reverse()}  </IonList>   
      </div>
      <TabTwoPage/>
      
      </IonContent>
      
      </IonPage>
      
      );
    }
  }
  
  const myStyle = {
    
    flex:1,textAlign:'center', alignContent:'center',alignItems:'center'
    
  };
  
  export default HomePage;
