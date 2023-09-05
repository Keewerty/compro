import { createSignal, type Component, JSXElement, createEffect, useTransition, Switch, Suspense, Match, Show } from 'solid-js';
import imageSrc from '../assets/girl.png'
import imagesrc from '../assets/robotgede.png'
import imageeSrc from '../assets/three.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A, useLocation, useNavigate } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './navbar.css'
import './auth-web.css'
import { Inreg, login } from '../service/Service';
import { dataStore, dataStoreAuth, setDataStore, setDataStoreAuth } from '../store/store';
import UserPage from './user-page';



const Navbar: Component<TestProps> = (props: any) => {

    
    const [inputValue88, setInputValue88] = createSignal('');
    const [inputValue39, setInputValue39] = createSignal('');

  
    const location = useLocation();
  

    const navigate = useNavigate();

    const [activeRoute, setActiveRoute] = createSignal('/');
     onMount(() => {
        
        let res =  localStorage.getItem('auth')
        if(res){
           setUserData(JSON.parse(res));
           if(userData().id == 22){
            setCekUser(true)
                            }else{
            setCekUser(false)
                            }
           // // console.log(userData())

        }
    // // console.log("session",sessionStorage.getItem('token'))

        cek(location.pathname)
        if(location.pathname == '/training'){
            setChangeR(true)
        }else{
            setChangeR(false)
        }
        if( sessionStorage.getItem('token') !== null){
            setShowLog(true)
            setDataStore('accepted')
        }
        // let sign_up_btn:any = '';
        // let sign_in_btn:any = '';
        // let container:any = '';

        //  sign_in_btn  = document.querySelector("#sign-in-btn");
        //  sign_up_btn  = document.querySelector("#sign-up-btn");
        //  container  = document.querySelector(".container");
 
        //     sign_up_btn.addEventListener("click", () => {
        //         container.classList.add("sign-up-mode");
        //       });
              
        //       sign_in_btn.addEventListener("click", () => {
        //         container.classList.remove("sign-up-mode");
        //       }); 
        
      
        
    })

    const [changeR,setChangeR] = createSignal(false)
    const cek :any = (p : string) => {
        // // // console.log('cek window -> ',window.location)
        // // // console.log('cek location -> ',location.pathname) 
        // // console.log('cek path -> ',p)
        navigate(p, { replace: false });
        setActiveRoute(p);
        if(p == '/training'){
            setChangeR(true)
          
        }else{
            setChangeR(false)
        }

        // // console.log("changeR -> " ,changeR());
        

        const ab = document.getElementById('ab');
        if (ab) {  ab.style.color = p === '/' ? '#e08e13' : '#4e4e4e'; }
        const jr = document.getElementById('jr');
        if (jr) {  jr.style.color = p === '/journey' ? '#e08e13' : '#4e4e4e'; }
        const tr = document.getElementById('tr');
        if (tr) {  tr.style.color = p === '/training' ? '#e08e13' : '#4e4e4e'; }
        const bg = document.getElementById('bg');
        if (bg) {  bg.style.color = p === '/blog' ? '#e08e13' : '#4e4e4e'; } 
        const cr = document.getElementById('cr');
        if (cr) {  cr.style.color = p === '/career' ? '#e08e13' : '#4e4e4e'; }
        const sc = document.getElementById('section1');
        if (sc) {  sc.style.color = p === '/#section2' ? '#e08e13' : '#4e4e4e'; }
       
        
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }

    const [isSignUpMode, setSignUpMode] = createSignal(false);

    const toggleSignUpMode = () => {
        setSignUpMode(!isSignUpMode());
      };

   
  
//     createEffect(() => {
//       // // // console.log('cek window -> ',window.location)
      
//   })

const [tab, setTab] = createSignal(0);
const [pending, start] = useTransition();
const updateTab = (index: any) => () => start(() => setTab(index));

const [fullnames, setFullNames] = createSignal(true);
const [phones, setPhones] = createSignal(true);
const [emails, setEmails] = createSignal(true);
const [passwords, setPasswords] = createSignal(true);
const [emailsLog, setEmailsLog] = createSignal(true);
const [passwordsLog, setPasswordsLog] = createSignal(true);

const [fullnamesG, setFullNamesG] = createSignal();
const [phonesG, setPhonesG] = createSignal();
const [emailsG, setEmailsG] = createSignal();
const [passwordsG, setPasswordsG] = createSignal();
const [emailsGLog, setEmailsGLog] :any = createSignal();
const [passwordsGLog, setPasswordsGLog] = createSignal();
const [showLog, setShowLog] = createSignal(false);

const [isModalOpen, setIsModalOpen] = createSignal(false);
const [isModalOpenFail, setIsModalOpenFail] = createSignal(false);
const [isModalAuthOpen, setIsModalAuthOpen] = createSignal(false);

const [popup, setPopup] = createSignal('');
const [detPopup, setDetpoup] = createSignal('');
const [cekA, setCekA] = createSignal(false);
const [userData, setUserData] : any = createSignal('');
const [cekUser, setCekUser] : any = createSignal(false);

const fullname = (evt: any) => {  
    setFullNames(evt.currentTarget.value)
    // // console.log("setFullNames -> ", fullnames())
    setFullNamesG(evt.currentTarget.value)
}
const phone = (evt: any) => { 
    const phoneRegex: any = /^(081|082|085|089|087|088)\d{7,10}$/;
    setPhones(phoneRegex.test(evt.currentTarget.value)) 
    // // console.log("setPhones -> ", phones())
    if(evt.currentTarget.value == ''){
        setPhones(true) 
    }
    if(phones() === true){
        setPhonesG(evt.currentTarget.value);
    } 
}
const email = (evt: any) => { 
    const emaiRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  
    setEmails(emaiRegex.test(evt.currentTarget.value))
    // // console.log("setEmails -> ", emails())
    if(evt.currentTarget.value == ''){
        setEmails(true) 
    }
    if(emails() === true){
        setEmailsG(evt.currentTarget.value);
    } 
}
const password = (evt: any) => { 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    setPasswords(passwordRegex.test(evt.currentTarget.value))
    console.log("setPasswords -> ", passwords())
    if(evt.currentTarget.value == ''){
        setPasswords(true) 
    }
    if(passwords() === true){
        setPasswordsG(evt.currentTarget.value);
    } 
}

const emailLog = (evt: any) => { 
    const emaiRegex: any = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;  
    setEmailsLog(emaiRegex.test(evt.currentTarget.value))
    console.log("setEmails -> ", emailsLog())
    if(evt.currentTarget.value == ''){
        setEmailsLog(true) 
    }
    if(emailsLog() === true){
        setEmailsGLog(evt.currentTarget.value);
    } 
}
const passwordLog = (evt: any) => {  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    setPasswordsLog(passwordRegex.test(evt.currentTarget.value))
    console.log("setPasswords -> ", passwordsLog())
    console.log("setPasswords 2-> ", evt.currentTarget.value)
    if(evt.currentTarget.value == ''){
        setPasswordsLog(true) 
    }
    if(passwordsLog() === true){
        setPasswordsGLog(evt.currentTarget.value);
    } 
}

const logins = () => {
    // // console.log(emailsGLog())
    if(passwordsLog() === true && emailsLog() === true && emailsGLog() !== undefined && emailsGLog() !== '' && passwordsGLog() !== '' && passwordsGLog() !== undefined){
        login({ 'email': emailsGLog(), 'password': passwordsGLog() }).then((data: any) => { 
            // // console.log("data -> ", data)
            if(data.id){
             sessionStorage.setItem('token',data.token)
             localStorage.setItem('auth',JSON.stringify(data));
             localStorage.getItem('auth');
             let res =  localStorage.getItem('auth')
             if(res){
                setUserData(JSON.parse(res));
                if(userData().id == 22){
setCekUser(true)
                }else{
setCekUser(false)
                }
                // // console.log(userData())

             }
            
            // // console.log("sessionStorage token ->",sessionStorage.getItem('token'))
          
            if( sessionStorage.getItem('token') !== null){
                setShowLog(true)
                setPopup("Login Success!")
                setDetpoup("Success! You're now logged in.")
                setCekA(true)
                openModal()
                setDataStore('accepted');
                closeAuthModal()
            }else{
                setShowLog(false)
                setPopup("Login Error!")
                setDetpoup("Username and password incorrect.")
                setCekA(false)
                openModalFail()
            }
            }else{
                setShowLog(false)
                setPopup("Login Error!")
                setDetpoup("Username and password incorrect.")
                setCekA(false)
                openModalFail()
            }
           
        })
    }else{
        // alert("login failed")
        setPopup("Login Error!")
                setDetpoup("Make sure to complete all required fields.")
                setCekA(false)
                openModalFail()
    }
    
   
}

const logout: any = () => {

    sessionStorage.removeItem('token');
    localStorage.removeItem('auth') 
    setShowLog(false)
    setDataStore('denied')
    setDataStoreAuth('2')
    if(location.pathname == '/stepvideo'){
        navigate('/training', { replace: true });
        sessionStorage.removeItem('token');
        localStorage.removeItem('auth')  
        localStorage.removeItem('all_detail')  
        localStorage.removeItem('next-step') 
        setShowLog(false)
        setDataStore('denied')
        setDataStoreAuth('2')
    }
  }

const signup = () => {

    if(  fullnamesG() !== undefined && emailsG() !== undefined && phonesG() !== undefined && passwordsG() !== undefined &&
    fullnamesG() !== '' && emailsG() !== '' && phonesG() !== '' && passwordsG() !== ''){
        Inreg({ 'email': emailsG(), 'password': passwordsG(), 'username': fullnamesG(), 'phone_number':phonesG() }).then((data: any) => { 
            // window.location.reload();
            
            // if(data !== null){
                setShowLog(false)
                setPopup("Register Success!")
                setDetpoup("Congratulations! Registration Complete.")
                setCekA(true)
                openModalFail()
                toggleSignUpMode()
            // }else{
            //     setShowLog(false)
            //     setPopup("Register Error!")
            //     setDetpoup("Make sure to complete all required fields.")
            //     setCekA(false)
            //     openModal()
            // }
        })
    }else{
        // alert("login failed")
        setPopup("Register Error!")
                setDetpoup("Make sure to complete all required fields.")
                setCekA(false)
        openModalFail()
    }

}


const cekroute = () => {
    updateTab(0)
    // // console.log("cek route",location.pathname)
    navigate(location.pathname);
    window.location.reload();
}

const openModal = () => {
    setIsModalOpen(true);
  };
  const openModalFail = () => {
    setIsModalOpenFail(true);
  };
  const openAuthModal = () => {
    setIsModalAuthOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    closeAuthModal()
  };
  const closeModalFail = () => {
    setIsModalOpenFail(false); 
  };

  const closeAuthModal = () => {
    setIsModalAuthOpen(false);
  };



  const data = dataStore();
  createEffect(() => {
    if(dataStoreAuth() == '1'){
        // // console.log('dataStoreAuth() ->', dataStoreAuth())
        setIsModalAuthOpen(true);
    }else{
        
    }

  })
   
//   const updateData = () => {
//     setDataStore(!dataStore());
//     // // console.log("jajal kie",dataStore())
//   }

    return (
        <>

{/* <button onclick={updateData}>tese</button> */}
        {/* <div>
      <button class="btn" onClick={openModal}>
        Open modal
      </button>

      {isModalOpen() && (
        <div class="modal modal-open">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Hello!</h3>
            <p class="py-4">This modal works with a button click</p>
            <div class="modal-action">
              <button class="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div> */}

    {/* --------- */}
   
            <div>
                <div class="navbar bg-base-100">
                    <div style="width:30vw; align-self: self-end; display: flex; ">
                        <div class="logobc"></div>
                    </div>
                    <div style="width: 85%;
    align-items: end !important;
    justify-content: end !important;
    display: flex;">
                        <div class="flex-none" style="    align-items: center;
    display: flex;">
                            <a id="ab" onClick={() => cek('/')} style="cursor:pointer"   class="navs active aboutus" aria-current="page">About us</a>
                            <a id="jr" onclick={() => cek('/journey')} style="cursor:pointer"   class="navs active projectus" aria-current="page">Project</a>
                            <a onclick={() => cek('/#section2')} style="cursor:pointer"   class="navs active serviceus" aria-current="page" id="section1">Services</a>
                            <a id="tr" onclick={() => cek('/training')} style="cursor:pointer"   class="navs active trainingus" aria-current="page">Training Center</a>
                            <a id="bg" onclick={() => cek('/blog')} style="cursor:pointer"   class="navs inactive blogus">Blogs</a>
                            <a id="cr" onclick={() => cek('/career')} style="cursor:pointer"   class="navs inactive carrerus">Career</a>
                            
                            <Show  when={!showLog()} >  <label onclick={() => openAuthModal()} for="login-modal" class="login btn btn-sm loginus">Login</label>  </Show>
                            {/* <select style="width:5vw; color: black; font-weight: 500; font-size: 12px; background: white;" class="translateus">
                                <option>Eng</option>
                                <option class="id">Ind</option>
                            </select> */}
                            <Show  when={showLog()} >
                                 <div class="dropdown dropdown-end" style="cursor:pointer">
              <label tabindex="0" class="btnprofile btn-ghost btn-circle avatar la">
                <div class="w-10 rounded-full"> 
                  {/* <img src="/src/assets/dhafin.jpg" style="cursor:pointer" /> */}
                  {/* <img src="../../public/pp.png" style="cursor:pointer" alt="" /> */}
                  <i class="fas fa-user"></i>
                </div>
              </label>
              <ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
               
                <div style="    padding-left: 15px;
    border-bottom: 1px solid #dbdbdb;
    margin-bottom: 5px;
    padding-bottom: 5px;">
                  <div style="color: #094190; text-transform: uppercase;">{userData().username}</div>
                  <a style="    color: #000000;
    font-size: 12px;">{userData().email}</a>
                  </div>
                <li class='btnlog'>
                  <label for="my_modal_1"  style=" text-transform: uppercase;" class="justify-between">Profile</label>
                </li>
                <div class='btnlog'>
                {/* <label class="btn" >{userData().status}</label> */}
                  <label style="color:red" for="my_modal_5" class="btn" >Logout</label>
                  </div>
              </ul>
              <input type="checkbox" id="my_modal_5" class="modal-toggle" />
              <div class="modal">
                <div class="modal-box">
                  <p class="apa" style="font-size: 20px; font-weight:400;">Are you sure you want to log out?</p>
                  <div class="modal-action">
                    <label for="my_modal_5" class="btn" style="border:none;color:#ffffff;background-color:#ff0000" onclick={logout}>LOGOUT</label>
                    {/* <button class="btntdk btn-sm btn-circle btn-ghost absolute right-2 top-2" style="background-color:none; border:none;">✕</button> */}
                    <label for="my_modal_5" style="background-color:#FFFFFF;" class="btn">Cancel!</label>
                  </div>
                </div>
              </div>


              <input type="checkbox" id="my_modal_1" class="modal-toggle" />
              <div class="modal" style="    max-width: 100%;
    height: 100%;">
                <div class="modal-box" style="    max-width: 90%;max-height:90%;padding:0">
                  {/* <p class="apa" style="font-size: 20px; font-weight:400;">cek</p> */}
                  <UserPage />
                  <div class="modal-action" style="margin-bottom: 50px;">
                    {/* <label for="my_modal_1" class="btn" style="border:none;color:#ffffff;background-color:#ff0000" onclick={logout}>LOGOUT</label> */}
                    {/* <button class="btntdk btn-sm btn-circle btn-ghost absolute right-2 top-2" style="background-color:none; border:none;">✕</button> */}
                    <label for="my_modal_1" style="    background-color: #dddddd;
    margin-right: 25px;" class="btn">Cancel!</label>
                  </div>
                </div>
              </div>
            </div>
            </Show> 
                            <div class="dropdown dropdown-end menuandroid">
                                <label tabindex="0" class="btn btn-ghost rounded-btn"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 18v-2h18v2H3Zm0-5v-2h18v2H3Zm0-5V6h18v2H3Z"/></svg></label>
                                <ul style="    margin-top: 300px;" tabindex="0" class="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4 ">
                                    <li><a id="ab" onClick={() => cek('/')} link href="#/"aria-current="page"> About Us</a></li>
                                    <li><a id="jr" onclick={() => cek('/journey')} style="cursor:pointer" link href="#/journey" aria-current="page">Project</a></li>
                                    <li><a onclick={() => cek('/#section2')}   link href="#/#section2" aria-current="page">Services</a></li>
                                    <li><a id="tr" onclick={() => cek('/training')} style="cursor:pointer"   link href="#/training" aria-current="page">Training</a></li>
                                    <li><a id="bg" onclick={() => cek('/blog')} style="cursor:pointer"    link href="#/blog" aria-current="page">Blogs</a></li>
                                    <li><a id="cr" onclick={() => cek('/career')} style="cursor:pointer"  link    href="#/career" aria-current="page">Career</a></li>
                                    <label for="login-modal" ><li><a  link aria-current="page">Login</a></li></label>
                                    <Show  when={!showLog()} >  <label for="login-modal" class="login btn btn-sm loginus"><li><a  link aria-current="page">Login</a></li></label>  </Show>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {isModalOpen() && (
        <div class="modal modal-open">
          <div class="modal-box">
          <Show fallback={
  <h3 class="font-bold text-lg" style="color: green;">{popup()}</h3>
          } when={!cekA()} >     <h3 class="font-bold text-lg" style="color: red;">{popup()}</h3>   </Show>
          
            <p class="py-4" style="    font-weight: 600;">{detPopup()}</p>
            <div class="modal-action">
              <button class="btn btn-primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )} 
                {isModalAuthOpen() && (
                    <>
                 <input type="checkbox" id="login-modal" class="modal-toggle"></input>
                <div class="modal">
                    <div class="card w-100 bg-base-100 shadow-xl login-card-modal">
                    {isModalOpenFail() && (
        <div class="modal modal-open">
          <div class="modal-box">
          <Show fallback={
  <h3 class="font-bold text-lg" style="color: green;">{popup()}</h3>
          } when={!cekA()} >     <h3 class="font-bold text-lg" style="color: red;">{popup()}</h3>   </Show>
          
            <p class="py-4" style="    font-weight: 600;">{detPopup()}</p>
            <div class="modal-action">
              <button class="btn btn-primary" onClick={closeModalFail}>
                Close
              </button>
            </div>
          </div>
        </div>
      )} 
     
                    <Show  when={!changeR()} fallback={
                                        <div  classList={{
                                            'container': true,
                                            'sign-up-mode': isSignUpMode(),
                                          }}>
                                        <div  class='cls'>
                                                                        <label for="login-modal" class="btn btn-circle btn-outline btcls" >
                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                                                                </path>
                                                                            </svg>
                                                                        </label>
                                                                    </div>
                                              <div class="forms-container"> 
                                                <div class="signin-signup">
                                                  <form action="#" class="sign-in-form">
                                                    {/* login latihan */}
                                                    <h2 class="title">Sign in</h2>
                                                    <Show  when={!emailsLog()} >    <span class="indicator-item badge badge-secondary al">Email is not valid !</span>   </Show>
                                                    <div class="input-field">
                                       <i class="fas fa-envelope"></i>
                                                      <input type="text" placeholder="Email" onkeyup={emailLog} />
                                                    </div>
                                                    <Show  when={!passwordsLog()} >   <span class="indicator-item badge badge-secondary al">The password must contain numbers, capitals or symbols !</span>  </Show>
                                                    <div class="input-field">     
                                       <i class="fas fa-lock"></i>
                                                      <input type="password" placeholder="Password" onkeyup={passwordLog} />
                                                    </div>
                                                    <input value="submit" class="btna solid" onclick={logins} style="text-align: center;"/>
                                                    {/* <p class="social-text">Or Sign in with social platforms</p>
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
                                                    </div> */}
                                                  </form>
                                                  <form action="#" class="sign-up-form">
                                                    <h2 class="title">Sign up</h2>
                                                    <div class="input-field">
                                                      <i class="fas fa-user"></i>
                                                      <input type="text" placeholder="Full Name" onkeyup={fullname} />
                                                    </div>
                                                    <Show  when={!emails()} >    <span class="indicator-item badge badge-secondary al">Email is not valid !</span>   </Show>
                                        <div class="input-field">
                                                      <i class="fas fa-envelope"></i>
                                                      <input type="email" placeholder="Email" onkeyup={email} />
                                                    </div>
                                                    <Show  when={!phones()} >  <span class="indicator-item badge badge-secondary al">Invalid Phone Number !</span>  </Show>
                                        <div class="input-field">
                                                      <i class="fas fa-phone"></i>
                                                      <input type="number" placeholder="Phone Number" onkeyup={phone}/>
                                                    </div>
                                                    <Show  when={!passwords()} >   <span class="indicator-item badge badge-secondary al">The password must contain numbers, capitals or symbols !</span>  </Show>
                                                    <div class="input-field">
                                                      <i class="fas fa-lock"></i>
                                                      <input type="password" placeholder="Password" onkeyup={password}/>
                                                    </div>
                                                    <input  class="btna" value="Sign up" onclick={signup} style="text-align:center" />
                                                    {/* <p class="social-text">Or Sign up with social platforms</p>
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
                                                    </div> */}
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
                                                    <button class="btna transparent" id="sign-up-btn" onClick={toggleSignUpMode}>
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
                                                    <button class="btna transparent" id="sign-in-btn" onClick={toggleSignUpMode}> 
                                                      Sign in
                                                    </button>
                                                  </div>
                                                  <img src="../../public/reg.png" class="image" alt="" />
                                                </div>
                                              </div>
                                            </div>
                                        } >  
                                              <div class="the-login-modal" style="    background: rgba(56, 56, 56, 0.40) !important;
    height: inherit;    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.30) !important;
    backdrop-filter: blur(25px) !important;">
                        <div class="modal-action1" style="margin-top: -2vh; margin-right: 1vw">
                                <label for="login-modal" class="btn btn-circle btn-outline login-modal" style="margin-top: 4vh; background-color: #cacaca; color:#4E4E4E;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                        </path>
                                    </svg>
                                </label>
                            </div>
                            <div class="left-modal-card">
                                <div class="circle">
                                </div>
                                <div class="logicon1l">
                                </div>
                                <div class="logicon2l">
                                </div>
                                <div class="logicon3l">
                                </div>
                            </div>
                            

                            <div class="right-modal-card">
                                <div class="head">
                                    
                                    <div class= "teks">
                                    <div class="font-modal">Hi, Glad to see you back!</div>
                                    <div class="font-modal">Let's Login First</div>
                                    </div>
                                    <div class="kolom">
                                    <form class="forms-container">
                                    
                                        <div class="column">
                                        <input type="text" placeholder="Email" class="inputs" onkeyup={emailLog}/>
                                        <Show  when={!emailsLog()} >    <span class="indicator-item badge badge-secondary al">Email is not valid !</span>   </Show>
                                        <input type="password" placeholder="Password" class="inputs" id="myInput" onkeyup={passwordLog}/>
                                        <Show  when={!passwordsLog()} >   <span class="indicator-item badge badge-secondary al">The password must contain numbers, capitals or symbols !</span>  </Show>
                                        </div>
                                        <div style=" font-size: 16px; font-weight: 400; line-height: 24px; margin-right:45vw;">
                                            {/* <a link href="#/services" class="inactive ">Forget Password?</a> */}
                                        </div>
                                        {/* <button class="signin btn" onclick={logins}>Sign in</button> */}
                                        <input value="submit" class="signin btn" onclick={logins} style="text-align: center;"/>
                                        {/* login lain */}
                                        <Show  when={!changeR()} fallback={
                                             <button class="signups btn btn-outline signup" classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                                             or Sign Up
                                         </button>
                                        } >  
                                              <button class="signups btn btn-outline signup">
                                              <a link href="#/register" class="active" aria-current="page">Sign Up</a>
                                          </button>
                                          
                                      </Show> 
                                      </form>
                                    </div>
                                </div> 
                            </div> 
                                    <div class="modal-action4" style="margin-top: -2vh; margin-right: 1vw">
                                <label for="login-modal" class="btn btn-circle btn-outline btn-sm gs" style="margin-top: 4vh; background-color: #cacaca; color:#4E4E4E;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                        </path>
                                    </svg>
                                </label>
                            </div>
                           
                          
                        </div>
                                             </Show> 
   
                        


    </div>
    
    {/* <div class="card w-100 bg-base-100 shadow-xl login-card-modal">
                        <div class="the-login-modal">
                        <div class="modal-action1" style="margin-top: -2vh; margin-right: 1vw">
                                <label for="login-modal" class="btn btn-circle btn-outline login-modal" style="margin-top: 4vh; background-color: #cacaca; color:#4E4E4E;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                        </path>
                                    </svg>
                                </label>
                            </div>
                            <div class="left-modal-card">
                                <div class="circle">
                                </div>
                                <div class="logicon1l">
                                </div>
                                <div class="logicon2l">
                                </div>
                                <div class="logicon3l">
                                </div>
                            </div>

                        <div class="tab" >
                        <Suspense  >
                            <Switch>
                                <Match when={tab() === 0}>
                                <div class="right-modal-card">
                                <div class="head">
                                    <div class="font-modal">Hi, Glad to see you back!</div>
                                    <div class="font-modal">Let's Login First</div>
                                    <div class="kolom">
                                    <Show  when={!emailsLog()} >    <span class="indicator-item badge badge-secondary al">Email is not valid !</span>   </Show>
                                        <input type="text" placeholder="Email" class="inputs" onkeyup={emailLog}/>
                                        <Show  when={!passwordsLog()} >   <span class="indicator-item badge badge-secondary al">The password must contain numbers, capitals or symbols !</span>  </Show>
                                        <input type="password" placeholder="Password" class="inputs" id="myInput" onkeyup={passwordLog}/>
                                        <div style=" font-size: 16px; font-weight: 400; line-height: 24px; margin-right:45vw;">
                                            <a link href="#/services" class="inactive">Forget Password?</a>
                                        </div>
                                        <button class="signin btn" onclick={logins}>Sign in</button>
                                        <Show  when={!changeR()} fallback={
                                             <button class="signups btn btn-outline signup" classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                                             or Sign Up
                                         </button>
                                        } >  
                                              <button class="signups btn btn-outline signup">
                                              <a link href="#/register" class="active" aria-current="page">or Sign Up</a>
                                          </button> </Show> 
                                       
                                      
                                    </div>
                                </div>
                            </div> 
                                    </Match>  
                                    <Match when={tab() === 1}>
                                <div class="right-modal-card">
                                <div class="headr">
                                    <div class="font-modal">Hi, Glad to see you back!</div>
                                    <div class="font-modal">Let's Register First</div>
                                    <div class="kolomr">
                                  
                                        <input type="text" placeholder="Full Name" class="inputs" onkeyup={fullname}/> 
                                        <Show  when={!emails()} >    <span class="indicator-item badge badge-secondary al">Email is not valid !</span>   </Show>
                                        <input type="text" placeholder="Email" class="inputs" onkeyup={email}/>
                                        <Show  when={!phones()} >  <span class="indicator-item badge badge-secondary al">Invalid Phone Number !</span>  </Show>
                                        <input type="number" placeholder="Phone Number" class="inputs" id="input" onkeyup={phone}/> 
                                        <Show  when={!passwords()} >   <span class="indicator-item badge badge-secondary al">The password must contain numbers, capitals or symbols !</span>  </Show>
                                        <input type="password" placeholder="Password" class="inputs" id="myInput" onkeyup={password}/>
                                        
                                         
                                        <button class="signin btn">Sign up</button>
                                        
                                        <button class=" btn btn-outline signup signups" classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
                                           or Login
                                        </button>  
                                    </div>
                                </div>
                            </div>
                                    </Match>
                              
                                    </Switch>
                                    </Suspense> 

                                   
                                    </div>
                                    <div class="modal-action4" style="margin-top: -2vh; margin-right: 1vw">
                                <label onClick={updateTab(0)}   for="login-modal" class="btn btn-circle btn-outline btn-sm gs" style="margin-top: 4vh; background-color: #cacaca; color:#4E4E4E;">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                                        </path>
                                    </svg>
                                </label>
                            </div>
                           
                          
                        </div>
                    </div> */}
                </div>
                </>
                 )}
                
            </div>
        </>

    );
};

export default Navbar;