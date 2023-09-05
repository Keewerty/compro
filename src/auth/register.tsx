import { createSignal, type Component, JSXElement } from 'solid-js';
import imageSrc from '../assets/wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/robot.png'
import { Routes, Route, A } from '@solidjs/router';
import { Inreg, login, register } from "../service/Service";
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './register.css'


const Register: Component<TestProps> = (props: any) => {

  const [image, setImage] = createSignal(imageSrc);
  const [imagee, setimage] = createSignal(imagesrc);
  const [imageee, setimagee] = createSignal(imageeSrc);
  const [email, email1] = createSignal('');
  const [email2, email3] = createSignal('');
  const [password, password1] = createSignal('');
  const [inputValue, setInputValue] = createSignal('');
  const [inputValue1, setInputValue1] = createSignal('');
  const [inputValue2, setInputValue2] = createSignal('');
  const [inputValue3, setInputValue3] = createSignal('');
  const [inputValue4, setInputValue4] = createSignal('');
  const [inputValue5, setInputValue5] = createSignal('');
  const [inputValue6, setInputValue6] = createSignal('');
  const [inputValue7, setInputValue7] = createSignal('');
  const [inputValue8, setInputValue8] = createSignal('');
  const [inputValue9, setInputValue9] = createSignal('');
  const [inputValue10, setInputValue10] = createSignal('');
  const [inputValue11, setInputValue11] = createSignal('');
  const [inputValue12, setInputValue12] = createSignal('');
  const [inputValue13, setInputValue13] = createSignal('');
  const [inputValue14, setInputValue14] = createSignal('');
  const [inputValue15, setInputValue15] = createSignal('');
  const [inputValue16, setInputValue16] = createSignal('');
  const [inputValue17, setInputValue17] = createSignal('');
  const [inputValue18, setInputValue18] = createSignal('');

  const hasil1 = async () => {


    // // // // console.log("fullname ->", inputValue());
    // // // // console.log("gender ->", inputValue1());
    // // // // console.log("Date of birth ->", inputValue2());
    // // // // console.log("Email ->", inputValue3());
    // // // // console.log("Phone Number ->", inputValue4());
    // // // // console.log("Username ->", inputValue5());
    // // // // console.log("password ->", inputValue6());
    // // // // console.log("institution ->", inputValue7());
    // // // // console.log("degree ->", inputValue8());
    // // // // console.log("Major ->", inputValue9());
    // // // // console.log("GPA ->", inputValue10());
    // // // // console.log("start date ->", inputValue11());
    // // // // console.log("end date ->", inputValue12());
    // // // // console.log("company name ->", inputValue13());
    // // // // console.log("position ->", inputValue14());
    // // // // console.log("position type ->", inputValue15());
    // // // // console.log("desc ->", inputValue16());
    // // // // console.log("start date ->", inputValue17());
    // // // // console.log("end date ->", inputValue18());

    // // // // // console.log("gender ->", RadioValue1()); 
    // // // // // console.log("gender ->", RadioValue2());

    Inreg({
      fullname: inputValue(),
      geender: inputValue1(),
      date_ofbirthday: inputValue2(),
      email: inputValue3(),
      phone_number: inputValue4(),
      username: inputValue5(),
      password: inputValue6(),
      institution: inputValue7(),
      degre: inputValue8(),
      mojor: inputValue9(),
      gpa: Number(inputValue10()),
      start_date: inputValue11(),
      end_date: inputValue12(),
      company_name: inputValue13(),
      position: inputValue14(),
      position_type: inputValue15(),
      descr: inputValue16(),
      start_date_comp: inputValue17(),
      end_date_comp: inputValue18(),

    }).then((data: any) => {
      // // // // console.log("detail account->", data);
    });
  };
  return (

    <div>
      <div style="padding-top: 16vh;margin-left: 4vw;">
        <h1 class="reg1">Register</h1>
        <p class="reg2">Fill your personal information and apply job that you want</p>
      </div>




      <div class="carousel w-full">
        <div id="slide1" class="carousel-item relative w-full">
          <div>
            <ul class="reg3 steps">
              <li class="step1 step step-primary"></li>
              <li class="step"></li>
              <li class="step"></li>
            </ul>
            <div>
              <h1 class="reg4">Personal Information</h1>
              <div class="in">
                <input type="text" placeholder="Full Name*" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue(f.currentTarget.value); }} />
                <input type="text" placeholder="Gender*" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue1(f.currentTarget.value); }} />
                <input type="text" placeholder="Date of Birth*" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue2(f.currentTarget.value); }} />
                <input type="text" placeholder="Email*" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue3(f.currentTarget.value); }} />
                <input type="number" placeholder="Phone Number*" class="input input-bordered reg-input-top" style="width:1230px; height:50px; margin-top:3vh; border: 1px solid #545454;" onchange={(f) => { setInputValue4(f.currentTarget.value); }} />
                <div style="display:flex">
                  <input type="text" placeholder="Username*" class="input input-bordered reg-input-bottom" onchange={(f) => { setInputValue5(f.currentTarget.value); }} />
                  <input type="password" placeholder="Password*" class="input input-bordered reg-input-bottom" onchange={(f) => { setInputValue6(f.currentTarget.value); }} />
                </div>
                <form id="file-form">
                  <input type="file" id="file" name="file" accept=".pdf" placeholder="CV*" />
                  <button type="submit" class="up-btn btn">Browser File</button>
                </form><div class="cv">(CV* Allowed format: pdf, Maximum size: 2 MB)</div>
                <button class="su-btn btn">
                  <a link href="#slide2" class="inactive">Next</a>
                </button>
              </div>
            </div>
          </div>
        </div>



        <div id="slide2" class="carousel-item relative w-full">
          <div>
            <ul class="reg3 steps">
              <li class="step1 step step-primary"></li>
              <li class="step step-primary"></li>
              <li class="step"></li>
            </ul>
            <div style="display:flex; flex-direction:column">
              <h1 class="reg4">Education</h1>
              <div class="in">
                <input type="text" placeholder="Institution" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue7(f.currentTarget.value); }} />
                <input type="text" placeholder="Degree" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue8(f.currentTarget.value); }} />
                <input type="text" placeholder="Major" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue9(f.currentTarget.value); }} />
                <input type="text" placeholder="GPA" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue10(f.currentTarget.value); }} />
                <div style="display:flex">
                  <input type="text" placeholder="Start Date" class="input input-bordered reg-input-bottom" onchange={(f) => { setInputValue11(f.currentTarget.value); }} />
                  <input type="password" placeholder="End Date" class="input input-bordered reg-input-bottom" onchange={(f) => { setInputValue12(f.currentTarget.value); }} />
                </div>
              </div>

              <div style="text-align:center;margin-top: 2vh;margin-left: 10vw; display:flex; flex-wrap:wrap; align-content: flex-start;" class="form-control">
                <label class="cursor-pointer">
                  <input type="checkbox" class="checkbox" />
                  <span style="margin-left: 1vw;color:#A6ADBB;" class="chec1 lable1 label-text">Present</span>
                </label>
              </div>

              <button class="su-btn btn">
                <a link href="#slide3" class="inactive">Next</a>
              </button>
            </div>
          </div>
        </div>

        <div id="slide3" class="carousel-item relative w-full">
          <div>
            <ul class="reg3 steps">
              <li class="step1 step step-primary"></li>
              <li class="step step-primary"></li>
              <li class="step step-primary"></li>
            </ul>
            <div style="display:flex; flex-direction:column">
              <h1 class="reg4">Work Experience</h1>

              <div class="in">
                <input type="text" placeholder="Company Name" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue13(f.currentTarget.value); }} />
                <input type="text" placeholder="Position" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue14(f.currentTarget.value); }} />
                <input type="text" placeholder="Position Type" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue15(f.currentTarget.value); }} />
                <input type="text" placeholder="Desc" class="input input-bordered reg-input-top" onchange={(f) => { setInputValue16(f.currentTarget.value); }} />
                <div style="display:flex">
                  <input type="text" placeholder="Start Date" class="input input-bordered reg-input-bottom" onchange={(f) => { setInputValue17(f.currentTarget.value); }} />
                  <input type="password" placeholder="End Date" class="input input-bordered reg-input-bottom" onchange={(f) => { setInputValue18(f.currentTarget.value); }} />
                </div>
              </div>

              <div style="text-align: center;margin-top: 2vh;margin-left: 10vw; display:flex; flex-wrap:wrap; align-content: flex-start;" class="form-control">
                <label class="cursor-pointer">
                  <input type="checkbox" class="checkbox" />
                  <span style="margin-left: 1vw;color:#A6ADBB;" class="chec1 lable1 label-text">Present</span>
                </label>
              </div>

              <button class="su-btn btn">
                <a link href="#" class="inactive" onClick={hasil1}>Register</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Register;