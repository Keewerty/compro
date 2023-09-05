import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './internship.css'
import { FaSolidArrowLeftLong } from 'solid-icons/fa'
import { getJobVacancy } from '../service/Service';


const internship: Component<TestProps> = (props: any) => {

    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);

    const [job, setJob]: any = createSignal();

    const navigate = useNavigate();

    const back :any = () => {
        navigate('/career', { replace: false });
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }

    onMount(() => {

        // let data12: any[];
        getJobVacancy().then((data: any) => {
            setJob(data)
        })

    })

    return (
        <>
            <div style="display:flex; width:100%;padding-top: 20vh">
          
                <div style="width:50%">
                <div class="left-intern" style='display:absolute;cursor:pointer' onClick={back}><FaSolidArrowLeftLong /></div>
                    <h1 class="explore-titel">Internship Program</h1>
                    <h1 class="explore-titel">at Braincode</h1>
                    <h1 class="explore-task">Braincode provides opportunities for students or fresh graduates to study internships. internship programs can develop skills and understand the world of work. Through the assigned tasks and responsibilities, internship in braincode can provide extraordinary experiences.</h1>
                    <a link href="#/Freelance#section6" class="explore-button btn btn-sm active" aria-current="page" id="section5">Explore Now</a>
                </div>
                <div style="width:60%">
                    <div class="iphonebitcoin4">
                    </div>
                    <div class="iphonebitcoin">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 class="Benefits">What you’ll get?</h1>
                </div>
                <div style="display:flex; width:100%">
                    <div style="width:33%">
                        <div style="margin-left: 3vw;" class="Benefits-card card-body">
                            <h1 class="Benefits-titel">Professional Network</h1>
                            <h1 class="Benefits-task">As internship, you will expands your professional
                                network. You will meet others and make
                                professional connections.</h1>
                        </div>
                        <div style="margin-left: 12vw;margin-top: -55vh;" class="Benefits-bg">
                        </div>
                        <div class="img1">
                        </div>
                    </div>
                    <div style="width:33%">
                        <div style="margin-left: 2vw;" class="Benefits-card card-body">
                            <h1 class="Benefits-titel">Experiences</h1>
                            <h1 class="Benefits-task">Through internship, you will get firsthand
                                experience and professional opportunities.
                                It will also gain skills and make you more
                                competitive when applying job.</h1>
                        </div>
                        <div style="margin-left: 11vw;margin-top: -55vh;" class="Benefits-bg1"></div>
                        <div class="img2"></div>
                    </div>
                    <div style="width:33%">
                        <div style="margin-left: 1vw;" class="Benefits-card card-body">
                            <h1 class="Benefits-titel">Real-World of Work</h1>
                            <h1 class="Benefits-task">Through internship, you will learn how to be
                                professional. You will study and practice to gain
                                professional skills.</h1>
                        </div>
                        <div style="margin-left: 10vw;margin-top: -55vh;" class="Benefits-bg">
                        </div>
                        <div class="img3">
                        </div>
                    </div>
                </div>
                <div id="section6">
                </div>
                <div>
                    <h1 class="Available">Available Position</h1>
                </div>
                <div style="    display: flex;justify-content: space-between; padding-left: 5vw; padding-right: 5vw; flex-wrap: wrap; margin-top: -3%; height: 54vh;
}">
                    <div class="carousel carousel-center rounded-box">
                        <div class="carousel-item">
                            <For each={job()}>{(jobs, i) =>
                                <div class="card w-100 bg-base-100 shadow-xl" style="width: 275px; height: 373px; background: white; border-radius: 10px; border: 1px solid #E9E0E0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); margin-bottom: 10vh; text-align: justify; margin:1vw">
                                    <div>
                                        <div class="AP1-pict"></div>
                                        <div class="AP1-title">{jobs.position}</div>
                                        <div style="margin: 2vw; display: flex;">
                                            <button class="btn btn-xs btn-outline" style="color: #545454; font-family: 'pm' !important; text-transform: initial; width: 79px; height: 20px; font-size: 10px; margin-right: 1vw;" >{jobs.working_type.split(",")[0]}</button>
                                            <button class="btn btn-xs btn-outline" style=" color: #545454; font-family: 'pm' !important; width:46; height: 20px; font-size: 10px;" >{jobs.working_type.split(",")[1]}</button>
                                        </div>
                                        <div class="AP1-subtitle">Description</div>
                                        <div class="AP1-content">{jobs.content}</div>
                                        <div style="display: flex; margin: 2vw; margin-top: -1vw;">
                                            <button class="btn btn-xs btn-outline" style="width: 103px; height: 33px; color: #B0B0B0; font-size: 15px; text-transform: initial; font-family: 'pr' !important; margin-right: 1vw;" >Read More</button>
                                            <button class="btn btn-xs" style="width: 87px; height: 33px; background: #392863; color: white; font-size: 15px; text-transform: initial; font-family: 'pr' !important;" >Apply</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            </For>
                        </div>
                    </div>
                    </div>        
            </div>
        </>
    );
};

export default internship;