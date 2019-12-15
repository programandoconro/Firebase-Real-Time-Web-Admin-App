import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import './App.css';
import { Typography, Paper,  Button, } from '@material-ui/core';

const db = () => firebase.database();

function Dashboard() {
	const [reservas, handleReservas] = useState([]);
	const [input, handleInput] = useState('');
	const [data, handleData] = useState('');
	const [userID, handleuserID] = useState('user0001');
	
	useEffect(() => {
		db();
		console.log('Mounted ');
	});
	
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
			
			<Button onClick={() => writeAdminData(item)} >
			Confirmar
			</Button>
			</div>
			));
			
			const myData = JSON.stringify(data);
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
						<h1>Panel de Administración de Reservaciones</h1>
						<h1>Restaurante Cactus</h1>
						
						
						
						<hr style={{backgroundColor:'pink',color:'pink'}}></hr>
						
						<Paper>
						<Typography> Bandeja de Entrada de Reservaciones </Typography>
						<ul 
						className='myList'> 
						{myDashboard.reverse()}
						</ul>
						
						<Button 
						type="submit"
						
						variant="contained"
						color="primary"
						onClick={() => deleteDB()}>
						Limpiar toda la Base de Datos 
						</Button>
						
						<hr style={{backgroundColor:'pink', color:'pink'}}></hr>
						
						
						</Paper>
						<Typography> Bandeja de Salida para confirmación a usuario </Typography>
						
						<Paper>
						<input 
						value={input} 
						onChange={(e) => handleInput(e.target.value)}>
						</input>
						
						<Button 
						onClick={() => writeAdminData(input)}
						type="submit"
						
						variant="contained"
						color="primary"
						> 
						
						Confirmar 
						</Button>
						
						<br></br>
						<br></br>
						
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
						onClick={() => deleteColletion()}>
						Limpiar reserva 
						</Button>
						
						</Paper>	
						<hr style={{backgroundColor:'pink',color:'pink'}}></hr>
						<Paper>
						<Button 
						type="submit"
						
						variant="contained"
						color="primary"
						onClick={() => logOut()}>
						Salir  
						</Button>
						</Paper>					
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
					
