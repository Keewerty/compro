import { createSignal, type Component, JSXElement, useTransition, Suspense, Switch, Match, onMount } from 'solid-js'; 
export interface AutWebProps { children?: JSXElement } 
import './auth-web.css';


const AuthWeb: Component<AutWebProps> = (props: any) => {
   

    onMount(() => { 
        const sign_in_btn :any = document.querySelector("#sign-in-btn");
        const sign_up_btn:any = document.querySelector("#sign-up-btn");
        const container:any = document.querySelector(".container");
        
        sign_up_btn.addEventListener("click", () => {
          container.classList.add("sign-up-mode");
        });
        
        sign_in_btn.addEventListener("click", () => { 
          container.classList.remove("sign-up-mode");
        });
        
    })


    return (

 <>

<div class="container">
      <div class="forms-container">
        {/* <div> <img src="../../public/logo_bc_alt-c.png" class="image" alt="" /></div> */}
        <div class="signin-signup">
          <form action="#" class="sign-in-form">
            <h2 class="title">Sign in</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" class="btna solid" />
            <p class="social-text">Or Sign in with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" class="sign-up-form">
            <h2 class="title">Sign up</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div class="input-field">
              <i class="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" class="btna" value="Sign up" />
            <p class="social-text">Or Sign up with social platforms</p>
            <div class="social-media">
              <a href="#" class="social-icon">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="social-icon">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>New here ?</h3>
            <p>
            Let's Get Started! Create Your Account
            </p>
            <button class="btna transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="../../public/wong_1.png" class="image" alt="" />
        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>One of us ?</h3>
            <p>
            Welcome Back! Log In to Your Account
            </p>
            <button class="btna transparent" id="sign-in-btn"> 
              Sign in
            </button>
          </div>
          <img src="../../public/reg.png" class="image" alt="" />
        </div>
      </div>
    </div>
 </>

    );
};

export default AuthWeb;