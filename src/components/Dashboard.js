import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import './App.css';

const db = () => firebase.database();

function Dashboard() {
	const [reservas, handleReservas] = useState([]);
  const [input, handleInput] = useState('');
  const [data, handleData] = useState('');

	useEffect(() => {
		db();
		console.log('Mounted ');
	});

	useEffect(() => {
		db()
			.ref('user0001')
      .on('value', handleReservas);
      
    db().ref('/').on('value', handleData)
	}, []);

	const deleteColletion = () => {
		firebase
			.database()
			.ref('user0001')
			.remove();
	};
  
  const deleteDB = () => {
		firebase
			.database()
			.ref('/')
			.remove();
	};
  

	const tabla = JSON.stringify(reservas);
	const mytabla = tabla.split(',').map((item, i) => (
		
    <div>
			<p style={myItem}>
				{item
          .slice(25)
					.replace(RegExp(/([.*+?^=!$(){}|[\]/\\""])/g), ' ')
					.replace('userInfo', '')
					.replace(':', '->')
					.replace(':', ' ')}
			</p>

			<button onClick={() => writeAdminData(item)} >
				Confirmar
			</button>
      <button onClick={() => writeAdminData(item)} >
				Rechazar
			</button>
		</div>
  ));

  const myData = JSON.stringify(data)
  
 const myDashboard = myData.split(',').map((item, i) => (
		
    <div>
			<p>
				{item
					.replace(RegExp(/([.*+?^=!$(){}|[\]/\\""])/g), ' ')
					.replace('userInfo', '')
					.replace(':', '->')
					.replace(':', ' ')}
			</p>
    
		</div>
  ));

	const writeAdminData = (userInfo) => {
		firebase
			.database()
			.ref('user0001')
			.push({
				userInfo
			})
			.catch((error) => {
				console.log('error ', error);
			});
	};

	return (
		<div style={myStyle}>
			<h1>Click a la reserva a confirmar o confirmar manualmente </h1>
			<input value={input} onChange={(e) => handleInput(e.target.value)}></input>
			<button onClick={() => writeAdminData(input)}> Confirmar </button>
			<br></br>
			<br></br>
			<ul className="myList"> {mytabla.reverse()}</ul>
      <button onClick={() => deleteColletion()}> Limpiar reserva </button>
	    <ul className='myList'> {myDashboard.reverse()}</ul>
      <button onClick={() => deleteDB()}> Limpiar todas las reservas </button>

  
  	</div>
	);
}
const myStyle = {
	flex: 1,
	textAlign: 'center',
	alignContent: 'center',
	alignItems: 'center'
};

const myItem ={
   float: 'left', 
   display: 'inline' 
}

export default Dashboard;
