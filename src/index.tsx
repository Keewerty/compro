/* @refresh reload */
import { render } from 'solid-js/web';
import './index.css';
// // import Login from './auth/login'
// import  './auth/login.css'
// import Register from './auth/register'
import App from './App';
// import "uno.css"
import { Router, hashIntegration } from '@solidjs/router';




render(() => (
    <Router source={hashIntegration()}>
        <App />
    </Router>
)
    ,
    document.getElementById('root') as HTMLElement);