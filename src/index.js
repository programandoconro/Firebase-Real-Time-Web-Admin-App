import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login'
import DashBoard from './components/Dashboard'
import {BrowserRouter , Switch, Route, Redirect} from 'react-router-dom'
import './index.css'
import { firebaseAuth } from '../src/store/constans'

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
        {...rest}
        render={(props) => authed === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
            />
            )
        }
        
        export default function App() {
            const [state,handleState] = useState( false );
            useEffect(()=>{
                firebaseAuth().onAuthStateChanged((user) => {
                    if (user) {
                        handleState(
                            true
                            
                            )
                        } else {
                            handleState(
                                false
                                
                                )
                            }
                        })                    
                        
                    })
                    
                    return  (
                        <BrowserRouter>
                        <div>
                        
                        <div className="container">
                        <div className="row">
                        <Switch>
                        <Route path='/' exact component={Login} />
                        
                        <PrivateRoute authed={state} path='/dashboard' component={DashBoard} />
                        <Route render={() => <Login/>} />
                        </Switch>
                        </div>
                        </div>
                        </div>
                        </BrowserRouter>
                        );
                    }
                    
                    ReactDOM.render(<App />, document.getElementById('root'));
                    
                    
                    
                    