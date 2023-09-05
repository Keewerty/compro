import { createSignal, type Component, JSXElement } from 'solid-js';
import imageSrc from '../assets/wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/robot.png'
import { Routes, Route, A } from '@solidjs/router';
import { login, register } from "../service/Service";
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './frontend.css'
import { FaSolidArrowLeftLong } from 'solid-icons/fa'

const Frontend: Component<TestProps> = (props: any) => {

    return (
        <div>
            <h1 class="front-titel">Front End Developer</h1>
            {/* <div class="left" style='display:absolute;'><FaSolidArrowLeftLong /></div> */}
            <div style="display:flex; width:100%;">
                <div style="width:50%;margin-top: 5vh;">
                    <div style="margin-left: 2vw;" class="front-card card-body">
                        <div class="card-conten">
                            <h1 class="front-judul">Responbilities:</h1>
                            <h1 class="front-task">Lorem Ipsum</h1>
                            <h1 class="front-task">Lorem Ipsum</h1>
                            <h1 class="front-task">Lorem Ipsum</h1>
                            <h1 class="front-task">Lorem Ipsum</h1>
                            <h1 class="front-task">Lorem Ipsum</h1>
                            <h1 style="margin-top: 10vh;" class="front-judul">Requirements;</h1>
                            <h1 class="front-task">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
                            <h1 class="front-task">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
                            <h1 class="front-task">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
                            <h1 class="front-task">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
                            <h1 class="front-task">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</h1>
                        </div>
                    </div>
                </div>
                <div style="width:50%">
                    <div style="margin-top: 5vh;" class="front-card1 card-body">
                        <div class="imge1">

                            <div class="frelance" style={'display:flex; height:6vh !important;'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z" /><path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z" /></svg>
                                <p>Freelance</p>
                            </div>

                            <div class="experience" style={'display:flex; height:5vh !important;'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="5" /><path stroke-linecap="round" stroke-linejoin="round" d="M17 14h.352a3 3 0 0 1 2.976 2.628l.391 3.124A2 2 0 0 1 18.734 22H5.266a2 2 0 0 1-1.985-2.248l.39-3.124A3 3 0 0 1 6.649 14H7" /></g></svg>
                                <p>1-3 Year Experience</p>
                            </div>

                            <div class="wfh" style={'display:flex'}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5Zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3Z" /><path fill="currentColor" d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.812 18.395c.002 0 .234.308.287.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395Z" /></svg>
                                <p>Work From Home</p>
                            </div>
                        </div>
                        <h1 class='deadlinetext'>Deadline: 28 March 2023</h1>
                        <button class="latest-button btn btn-sm">Apply Now</button>
                    </div>
                    <div class="img1"></div>
                    <div class="img2"></div>
                    <div class="img3"></div>
                    <div class="img4"></div>
                    <div class="img5"></div>
                    <div class="img6"></div>
                </div>
            </div>
        </div>
    );
};

export default Frontend;