import React, { useState, useEffect } from 'react';
import firebase  from 'firebase/app' ;
import './App.css';
import { Typography, Paper,  Button, } from '@material-ui/core';
import logo from '../assets/cactus.png';

const db = () => firebase.database();

function Dashboard() {
	const [reservas, handleReservas] = useState([]);
	const [input, handleInput] = useState('');
	const [data, handleData] = useState('');
	const [userID, handleuserID] = useState('user0001');

	useEffect(() => {
		db().ref('/');
		
	})
	
	useEffect(() => {
		db().ref('/').on('value', handleReservas);
		db().ref('/').on('value', handleData)
	}, [userID]);
	
	const deleteColletion = () => {
		firebase
		.database()
		.ref(userID)
		.remove();
	};
	
	const deleteDB = () => {
		firebase
		.database()
		.ref('/')
		.remove();
	};
	
	const logOut = () =>{
		firebase.auth().signOut().then(function() {
		}, function(error) {
			console.log(error)
		});		
		
	}
	
	const tabla = JSON.stringify(reservas);
	const mytabla = tabla.split(',').map((item, k) => (
		
		<div key={k}>
		<p style={myItem} >
		{item
			.slice(25)
			.replace(RegExp(/([.*+?^=!$(){}|[\]/\\""])/g), ' ')
			.replace('userInfo', '')
			.replace(':', '->')
			.replace(':', ' ')}
			</p>
			
			<Button 
			onClick={() => writeAdminData(item)}
			 >
			Confirmar
			</Button>
			</div>
			));
			
			const myData = JSON.stringify(data);
			const myDashboard = myData.split(',').map((item, k) => (
				
				<div key={k}>
				<p >
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
						.ref('/'+userID)
						.push({
							userInfo
						})
						.catch((error) => {
							console.log('error ', error);
						});
					};
					
					return (
						<div style={myStyle}>
						<Paper >
						<h1>Panel de Administración de Reservaciones</h1>
						<img src= {logo} alt='cactus'></img>
						<h1>Restaurante Cactus</h1>
				        </Paper>
						
						<Paper>
						<Typography> Bandeja de Entrada </Typography>
						<ul 
						className='myList'> 
						{myDashboard.reverse()}
						</ul>
						
						<Button 
						type="submit"
						variant="contained"
						color="primary"
						onClick={()=>{if (window.confirm('¿Seguro que desea borrar toda la Bandeja de Entrada?')) deleteDB() }}>
						Borrar
						</Button>
						<hr style={mySeparator}></hr>
						</Paper>

						<Typography> Bandeja de Salida </Typography>
						
						<Paper>
						<input 
						value={input} 
						onChange={(e) => handleInput(e.target.value)}>
						</input>
						<br></br><br></br>

						<Button 
						onClick={() => writeAdminData(input)}
						type="submit"
						
						variant="contained"
						color="primary"
						> 
						Enviar
						</Button>				
						<br></br><br></br>
						
						<input 
						placeholder='ID Usuario' 
						value={userID} 
						onChange={(e) => handleuserID(e.target.value)}>
						</input>
						
						<ul 
						className="myList"> 
						{mytabla.reverse()}
						</ul>
						
						<Button 
						type="submit"
						variant="contained"
						color="primary"
						onClick={()=>{if (window.confirm('¿Seguro que desea borrar la reservación?')) deleteColletion() }}>
						Borrar 
						</Button>
						<hr style={mySeparator}></hr>
						</Paper>

						<Paper>
						<Button 
						type="submit"
						variant="contained"
						color="primary"
						onClick={() => logOut()}>
						Salir  
						</Button>
						</Paper>

						<h5>* Instrucciones: 1. Identifique las reservaciones en la Bandeja de Entrada. </h5>					
						<h5> 2. Ingrese el usuario de interés dentro de la Bandeja de Salida. </h5>					
						<h5> 3. Confirme directamente la reserva con el botón CONFIRMAR y/o escriba un mensaje con la respuesta deseada. </h5>					
						
						</div>
						);
					}
					const myStyle = {
						flex: 1,
						textAlign: 'center',
						alignContent: 'center',
						alignItems: 'center'
					}
					
					const myItem ={
						float: 'left', 
						display: 'inline' 
					}

					const mySeparator ={
						backgroundColor:'pink',
						color:'white' 
					}
					
					export default Dashboard;
					
