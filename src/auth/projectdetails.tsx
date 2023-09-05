import { createSignal, type Component, JSXElement } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './projectdetails.css'
import { getProject, input_project } from '../service/Service';




const Projectdetails: Component<TestProps> = (props: any) => {


    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [t, setT]: any = createSignal('');
    const [data, setData]: any = createSignal({
        "id_user": 6,
        "img_client": " ",
        "id_client": 141,
        "content": "Internet Monitoring describes a system that constantly monitors the network conditions of routers, servers, and other devices in a company such as this project is Telkomsel. If a network system occurs error, down, and unstable the system will later notify the administrator of software / IM systems that use internet management, so that the network can work optimally.",
        "priority": "Internet Monitoring",
        "img_projeect": "",
        "tittle": "Telkomsel"
    },);

    onMount(() => {


        const det = localStorage.getItem('detJ');
        if (det !== null) {
            // Now TypeScript knows that authData is a string 
            // // // console.log('detail', JSON.parse(det));
            setData(JSON.parse(det))
            const parser = new DOMParser();
            const html = parser.parseFromString(JSON.parse(det).detail, 'text/html');
            const body = html.body;
            if (JSON.parse(det).detail == null) {
                setT(" ");
            } else {
                setT(body);
            }

            // getTrainingDetailQuestions(detail().id_detail).then((data : any) => {
            //     // // // // console.log('qs ->' ,data)
            //     setData(data);

            //   })
        } else {
            // // // // console.log("kosong")p
        }
    })

    return (
        <>

            <div class="pd-class">
                <div class="btnnnnnn23">
                    <a link href="/journey"><div class="imge2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/> </g> </svg>
                        </div></a>
                    <h1 class="front-titel" style="font-family: 'pm';">{data().priority}</h1>
                </div>

                <div style="display:flex; width:100%;">
                </div>
                <div class="contentssss1">
                    <div class="pjd-contents1">

                        {/* <div class="won2" /> */}
                        <img src={data().img_projeect} class='l' />
                    </div>

                    <div class="pjd-contents1">
                        <div class="front-card card-body pd-1">
                            <div class="ehmm-cardback">
                                <h1 style="margin-left:4vw; width:80%;text-align: justify;font-size:18px;font-weight:bold;margin-bottom:1.5vh;margin-top:2vh; font-family: 'pm';">Background</h1>
                                <h2 style="margin-left:4vw; width:80%;text-align: justify;font-size: 15px;margin-bottom:2vw; font-family: 'pm';"> {data().content}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="front-card card-body pd-2">
                    <div class="ehmm-cardback">
                        <div>{t()}</div>
                    </div>
                </div>
            </div>




        </>
    );
};

{/* <div class="front-card card-body ">
                <div class="ehmm cb2">
                    <h1 style="margin-left:4vw; width:80%;text-align: justify;font-size:18px;font-weight:bold;margin-bottom:1.5vh;margin-top:2vh;font-family: 'pm';">Objectives</h1>
                    <p style="margin-left:4vw; width:80%;text-align: justify;font-size: 15px;margin-bottom:1vw;font-family: 'pm';">GeISA is now used by many entities in Telkomsel, with main Objective such as :</p>
                    <p style="margin-left:4vw; width:80%;text-align: justify;font-size: 15px;margin-bottom:0.5vw; font-family: 'pm';">1. strategic purposes from Planning and Implementation</p>
                    <p style="margin-left:4vw; width:80%;text-align: justify;font-size: 15px;margin-bottom:0.5vw; font-family: 'pm';">2. Network Performance Enhancement/Monitoring,</p>
                    <p style="margin-left:4vw; width:80%;text-align: justify;font-size: 15px;margin-bottom:0.5vw;font-family: 'pm';">3. To help Sales/Marketing strategic decision and also Business Performance Monitoring.</p>
                    <div class="carddee"></div>
                </div>
            </div> */}

export default Projectdetails;