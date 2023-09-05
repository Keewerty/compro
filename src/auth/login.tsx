import { createSignal, type Component, JSXElement } from 'solid-js';
import imageSrc from '../assets/wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/robot.png'
import { Routes, Route, A } from '@solidjs/router';
import { login } from "../service/Service";
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './login.css'


const Login: Component<TestProps> = (props: any) => {

  const [image, setImage] = createSignal(imageSrc);
  const [imagee, setimage] = createSignal(imagesrc);
  const [imageee, setimagee] = createSignal(imageeSrc);
  const [email, email1] = createSignal('');
  const [password, password1] = createSignal('');

  const hasil1 = async () => {
    // // // console.log('email ->', email);
    // // // console.log('password ->', password);
    login({ 'email': email(), 'password': password() }).then((data: any) => {
      // // // console.log('detail account ->', data);
    })
  }
  return (

    <section class="background">
      <div>
        <div class="back"> </div>
        <div class="circle"></div>

        <img src={image()} alt="Alternative Text" class="wong" />
        <img src={imagee()} alt="Alternative Text" class="logo" />
        <img src={imageee()} alt="Alternative Text" class="robot" />
        <span class="hi">Hi, Glad To See You Back!</span>
        <span class="hii">Let's Login First</span>
        <span class="forget">Forget Password?</span>
        <ul>
          <li><input type="text" placeholder="Username" class="username" onchange={(r => { email1(r.currentTarget.value) })} /></li>
        </ul>
        <ul>
          <li><input type="password" placeholder="Password" class="password" onchange={(l => { password1(l.currentTarget.value) })} /></li>
        </ul>
        <div class=''>
          <button class="btn btn-wide bg" onClick={hasil1}><A href='/'>Sign In</A> </button>
        </div> 
          <div>
            <button class="btn btn-outline butt"><A href="/register">OR SIGN UP</A></button>
          </div>
      </div >
    </section >

  );
};

export default Login;
