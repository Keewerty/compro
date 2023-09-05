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
import './professional.css'
import { getJobVacancy } from '../service/Service';
import { FaSolidArrowLeftLong } from 'solid-icons/fa'


const Professional: Component<TestProps> = (props: any) => {


    const navigate = useNavigate();

    const back: any = () => {
        navigate('/career', { replace: false });
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }


    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [job, setJob]: any = createSignal();

    onMount(() => {

        // let data12: any[];
        getJobVacancy().then((data: any) => {
            setJob(data)
        })

    })

    return (
        <>
        <div style="overflow-x:hidden !important;width:100% !important,overflow:hidden !important">
            <div class="disp" >
                <div style="width: 55%; padding-top: 25vh; margin-left: 8vw; padding-bottom: 7vh;">
                    <div class="left" style='display:absolute;cursor:pointer' onClick={back}><FaSolidArrowLeftLong /></div>
                    <div class="disp-title">WORK WITH US</div>
                    <div class="disp-sub">Grow your career path with Braincode!</div>
                    <div class="disp-content">Explore job vacancy on BrainCode. Join to be a part of us, get benefits and grow your career</div>
                    <input type="text" placeholder="Type in keyword.." class="input input-bordered" style=" width: 490px; height:50px; border-radius: 30px; font-family: 'pm' !important; text-align: center; border-color: black; font-size: 15px; color:#545454; text-align: left;" />
                    <button class="search-btn btn">Search</button>
                </div>
                <div style="width: 50%; padding-top: 22vh; padding-bottom: 7vh; height: 50%;">
                    <div class="cbpic" style="height: 82vh; width: 32vw;">
                    </div>
                </div>
            </div>
            <div style="width:100%; height:800px; background-color: #e0dede; flex-wrap:wrap;"><div style="display: flex;">
                <div class="disp2-title">Benefits of Full Time Position</div><div class="ft1"></div><div class="ft2"></div><div class="ft3"></div></div><div class="kartu1"><div class="card w-100 bg-base-100 shadow-xl" style="width: 100%; height: 320px; background-color: rgba(62, 86, 104, 0.4); backdrop-filter: blur(15px); border-radius: 20px; margin-right: 2vh;"><div style="margin: 3vw;"><div class="kartupict1"></div><div class="kartu-title">Salary</div><div class="kartu-content">
                Employees get a basic salary once a month in accordance with the responsibilities given
            </div></div></div><div class="card w-100 bg-base-100 shadow-xl" style="width: 100%; height: 320px; background-color: rgba(62, 86, 104, 0.4); backdrop-filter: blur(15px); border-radius: 20px; margin-right: 2vh;"><div style="margin: 3vw;"><div class="kartupict2"></div>
            <div class="kartu-title">Training</div><div class="kartu-content">Employees get job training opportunities to improve their skills.</div></div></div><div class="card w-100 bg-base-100 shadow-xl" style="width: 100%; height: 320px; background-color: rgba(62, 86, 104, 0.4); backdrop-filter: blur(15px); border-radius: 20px; margin-right: 2vh;"><div style="margin: 3vw;"><div class="kartupict3"></div>
            <div class="kartu-title">Health Benefits</div><div class="kartu-content">Employees get health benefits borne by the company.</div></div></div></div><div class="kartu2"><div class="card w-100 bg-base-100 shadow-xl" style="width: 100%;; height: 320px; background-color: rgba(62, 86, 104, 0.4); backdrop-filter: blur(15px); border-radius: 20px; margin-right: 2vh;"><div style="margin: 3vw"><div class="kartupict4"></div>
            <div class="kartu-title">Performance Allowance</div><div class="kartu-content">Employees get daily meal allowance which is pain weekly.</div></div></div><div class="card w-100 bg-base-100 shadow-xl" style="width: 100%; height: 320px; background-color: rgba(62, 86, 104, 0.4); backdrop-filter: blur(15px); border-radius: 20px; margin-right: 2vh;"><div style="margin: 3vw;"><div class="kartupict5"></div>
            <div class="kartu-title">Residence Allowance</div><div class="kartu-content">Employees who come from outside the Jakarta area,get a residence allowance that is home by the company .</div></div></div><div class="card w-100 bg-base-100 shadow-xl" style="width: 100%; height: 320px; background-color: rgba(62, 86, 104, 0.4); backdrop-filter: blur(15px); border-radius: 20px; margin-right: 2vh;"><div style="margin: 3vw;"><div class="kartupict6"></div>
            <div class="kartu-title">Operational Allowance</div><div class="kartu-content">Employees who are assigned operational duties will be given daily allowance.</div></div></div></div></div>
            <div>
                <div class="judul">Available Position</div>
                <div style="    display: flex;justify-content: space-between; padding-left: 5vw; padding-right: 5vw; flex-wrap: wrap; margin-top: -3%; height: 54vh;
}">
                    <div class="carousel carousel-center rounded-box">
                        <div class="carousel-item">
                            <For each={job()}>{(jobs, i) =>
                                <div class="card w-100 bg-base-100 shadow-xl" style="width: 300px !important; height: 373px; background: white; border-radius: 10px; border: 1px solid #E9E0E0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); margin-bottom: 10vh; text-align: justify; margin:1vw">
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
                                            <button class="btn btn-xs btn-outline read" style="width: 103px; height: 33px; color: #B0B0B0; font-size: 15px; text-transform: initial; font-family: 'pr' !important; margin-right: 1vw;" >Read More</button>
                                            <button class="btn btn-xs app" style="width: 87px; height: 33px; background: #392863; color: white; font-size: 15px; text-transform: initial; font-family: 'pr' !important;" >Apply</button>
                                        </div>
                                    </div>
                                </div>
                            }
                            </For>
                        </div>
                    </div>
                    {/* <div class="card w-100 bg-base-100 shadow-xl" style="width: 275px; height: 373px; background: white; border-radius: 10px; border: 1px solid #E9E0E0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); margin-bottom: 10vh; text-align: justify;">
                        <div>
                            <div class="AP1-pict"></div>
                            <div class="AP1-title">Front End Developer</div>
                            <div style="margin: 2vw; display: flex;">
                                <button class="btn btn-xs btn-outline" style="color: #545454; font-family: 'pm' !important; text-transform: initial; width: 79px; height: 20px; font-size: 10px; margin-right: 1vw;" >Full Time</button>
                                <button class="btn btn-xs btn-outline" style=" color: #545454; font-family: 'pm' !important; width:46; height: 20px; font-size: 10px;" >WFO</button>
                            </div>
                            <div class="AP1-subtitle">Description</div>
                            <div class="AP1-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                            <div style="display: flex; margin: 2vw; margin-top: -1vw;">
                                <button class="btn btn-xs btn-outline" style="width: 103px; height: 33px; color: #B0B0B0; font-size: 15px; text-transform: initial; font-family: 'pm' !important; margin-right: 1vw;" >Read More</button>
                                <button class="btn btn-xs" style="width: 87px; height: 33px; background: #392863; color: white; font-size: 15px; text-transform: initial; font-family: 'pm' !important;" >Apply</button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-100 bg-base-100 shadow-xl" style="width: 275px; height: 373px; background: white; border-radius: 10px; border: 1px solid #E9E0E0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); margin-bottom: 10vh; text-align: justify;"><div>
                        <div class="AP1-pict"></div>
                        <div class="AP1-title">Front End Developer</div>
                        <div style="margin: 2vw; display: flex;">
                            <button class="btn btn-xs btn-outline" style="color: #545454; font-family: 'pm' !important; text-transform: initial; width: 79px; height: 20px; font-size: 10px; margin-right: 1vw;" >Full Time</button>
                            <button class="btn btn-xs btn-outline" style=" color: #545454; font-family: 'pm' !important; width:46; height: 20px; font-size: 10px;" >WFO</button>
                        </div>
                        <div class="AP1-subtitle">Description</div>
                        <div class="AP1-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div style="display: flex; margin: 2vw; margin-top: -1vw;">
                            <button class="btn btn-xs btn-outline" style="width: 103px; height: 33px; color: #B0B0B0; font-size: 15px; text-transform: initial; font-family: 'pm' !important; margin-right: 1vw;" >Read More</button>
                            <button class="btn btn-xs" style="width: 87px; height: 33px; background: #392863; color: white; font-size: 15px; text-transform: initial; font-family: 'pm' !important;" >Apply</button>
                        </div>
                    </div>
                    </div>
                    <div class="card w-100 bg-base-100 shadow-xl" style="width: 275px; height: 373px; background: white; border-radius: 10px; border: 1px solid #E9E0E0; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); margin-bottom: 10vh; text-align: justify;"><div>
                        <div class="AP1-pict"></div>
                        <div class="AP1-title">Front End Developer</div>
                        <div style="margin: 2vw; display: flex;">
                            <button class="btn btn-xs btn-outline" style="color: #545454; font-family: 'pm' !important; text-transform: initial; width: 79px; height: 20px; font-size: 10px; margin-right: 1vw;" >Full Time</button>
                            <button class="btn btn-xs btn-outline" style=" color: #545454; font-family: 'pm' !important; width:46; height: 20px; font-size: 10px;" >WFO</button>
                        </div>
                        <div class="AP1-subtitle">Description</div>
                        <div class="AP1-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div style="display: flex; margin: 2vw; margin-top: -1vw;"><button class="btn btn-xs btn-outline" style="width: 103px; height: 33px; color: #B0B0B0; font-size: 15px; text-transform: initial; font-family: 'pm' !important; margin-right: 1vw;">Read More</button>
                            <button class="btn btn-xs" style="width: 87px; height: 33px; background: #392863; color: white; font-size: 15px; text-transform: initial; font-family: 'pm' !important;" >Apply</button>
                        </div>
                    </div>
                    </div> */}
                </div>
            </div>
            </div>
        </>
    );
};

export default Professional;