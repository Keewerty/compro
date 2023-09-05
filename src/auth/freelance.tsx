import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import inilogoaaa1 from '../assets/Remote1-2fca1a38.png'
import inilogoaaa2 from '../assets/Redclock.png'
import inilogoaaa3 from '../assets/illustrator-2a601118.png'
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './freelance.css'
import { FaSolidArrowLeftLong } from 'solid-icons/fa'
import { getJobVacancy } from '../service/Service';


const About: Component<TestProps> = (props: any) => {



    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [w] = createSignal(inilogoaaa1);
    const [t123] = createSignal(inilogoaaa2);
    const [o123] = createSignal(inilogoaaa3);
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
        <div class="freelance">
           
            <div class="titlepic" style="display:flex; width:100%;padding-top: 20vh">
                <div class='comprT' style="width:50%">
                <div class="left-freelance" style='display:absolute;cursor:pointer' onClick={back}><FaSolidArrowLeftLong /></div>
                    <h1 class="explore-titel">Comfortly Work From Home <br />as a Freelancer</h1>
                   
                    <h1 class="explore-task">Braincode provides opportunities to work from anywhere. You can work as freelancer. You can manage your own time, money, and schedule.</h1>
                    <a link href="#/Freelance#section6" class="explore-button active" aria-current="page" id="section5">Explore Now</a>
                </div>
                <div class='picture'>
                    <div class="iphonebitcoin2">
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h1 class="Benefits">Benefits of Freelancing</h1>
                </div>
                <div class="kotaktiga" >
                    <div class="bencard">
                        <div  class="Benefits-cardf card-body">
                        <div  class="Benefits-bgf">
                        <img src={w()} alt="" class="img1f"/>
                        </div>
                    
                            <h1 class="Benefits-titelf">Self Employed</h1>
                            <h1 class="Benefits-task">Freelance is self employed, it’s meaning there is no manager to control your work. You can work without office politic pressure. </h1>
                        </div>
                       
                    </div>
                    <div class="bencard">
                        <div class="Benefits-cardf card-body">
                        <div  class="Benefits-bgf">
                        <img src={t123()} alt="" class="img1f"/>
                        </div>
                        
                            <h1 class="Benefits-titelf">Flexibility</h1>
                            <h1 class="Benefits-task">As a freelancer you can manage your own schedule. You can work according to the working hours you have. You have the freedom to choose your time to work. </h1>
                        </div>
  
                    </div>
                    <div class= "bencard">
                        <div class="Benefits-cardf card-body">
                        <div class="Benefits-bgf">
                        <img src={o123()} alt="" class="img1f"/>
                        </div>

                            <h1 class="Benefits-titelf">Work From Anywhere</h1>
                            <h1 class="Benefits-task">You can work from anywhere. As a freelancer,you don’t need to present in office. You can save your time and money. </h1>
                        </div>

                    </div>
                </div>
                <div id="section6">
                </div>
                <div style="margin-bottom:260px">
                    <h1 class="Available" style="    margin-bottom: 80px !important;">Available Position</h1>
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
            </div>
            

        </div>
    );
};

export default About;