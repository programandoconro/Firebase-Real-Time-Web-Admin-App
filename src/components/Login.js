import React, { useState } from 'react';
import { Typography, Paper, Avatar, Button, FormControl, Input, InputLabel } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import {loginAuth} from '../store/constans';
import logo from '../assets/cactus.png';

function SignIn(props) {
	const { classes } = props;
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	async function Login() {
		const l =(e, p)=> {
			return loginAuth(e, p)
		}
		try {
			await l (email, password)
			props.history.replace('/dashboard')
		} catch(error) {
			alert(error.message)
		}
	}
	
	return (
		<main className={classes.main}>
		<Paper className={classes.paper}>
		<Avatar className={classes.avatar}>
		<LockOutlinedIcon></LockOutlinedIcon>
		</Avatar>
		<Typography >
		Administrador de Reservaciones
		</Typography>
		<img src= {logo} alt='cactus'></img>
		<Typography component="h1" variant="h5">
		Restaurante Cactus
		</Typography>
		
		
		
		
		<form className={classes.form} onSubmit={e => e.preventDefault() && false}>
		<FormControl margin="normal" required fullWidth>
		<InputLabel htmlFor="email">Correo electrónico</InputLabel>
		<Input id="email" name="email" autoComplete="off" autoFocus value={email} onChange={e => setEmail(e.target.value)} />
		</FormControl>
		<FormControl margin="normal" required fullWidth>
		<InputLabel htmlFor="password">Constraseña</InputLabel>
		<Input name="password" type="password" id="password" autoComplete="off" value={password} onChange={e => setPassword(e.target.value)} />
		</FormControl>
		<Button
		type="submit"
		fullWidth
		variant="contained"
		color="primary"
		onClick={Login}
		
		>
		Entrar 
		</Button>
		
		</form>
		</Paper>
		</main>
		)
		
		
	}

	export const styles = theme => ({
		main: {
			width: 'auto',
			display: 'block',
			marginLeft: theme.spacing(3),
			marginRight: theme.spacing(3),
			backgroundColor:'pink',
			[theme.breakpoints.up(400 + theme.spacing(3))]: {
				width: 400,
				marginLeft: 'auto',
				marginRight: 'auto',
			},
		},
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			padding: `${theme.spacing(3)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
		},
		avatar: {
			margin: theme.spacing(3),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: '100%', // Fix IE 11 issue.
			marginTop: theme.spacing(3),
		},
		submit: {
			marginTop: theme.spacing(3)
		},
	});
	
	
	export default withRouter(withStyles(styles)(SignIn));
