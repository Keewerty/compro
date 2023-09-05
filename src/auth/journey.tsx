import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import imagsrc from '../assets/nms.png'
import imasrc from '../assets/geisha.png'
import ss from '../../public/ss.png'
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './journey.css'
import { getClient, getJoin } from '../service/Service';


const Journey: Component<TestProps> = (props: any) => {

    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [imag, setimag] = createSignal(imagsrc);
    const [ima, setima] = createSignal(imasrc);
    const [client, setClient]: any = createSignal([
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        {
            "id": 1,
            "img_projeect": ss,
            "img_client":ss,
            "tittle": ""
        },
        
    ])

    onMount(() => {
        getJoin().then((data: any) => {
            if(data){
            localStorage.setItem('pr', JSON.stringify(data))
            localStorage.getItem('pr')
            // // // console.log('test')
            setClient(data)
        }else{

        }
        })
        const ds = localStorage.getItem('pr')
        if (ds !== null) {
            setClient(JSON.parse(ds))
        }

    });
    const navigate = useNavigate();

    const read: any = (evt: any) => {
        // // // console.log("EVT JOURNEY -> ", evt)
        localStorage.setItem('detJ', JSON.stringify(evt))
        navigate('/projectdetails', { replace: false });
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }

    return (
        <div>
            <div>
                <div style="display: flex; width: 100%; padding-top: 15vh;">
                    <div style="width: 80%">
                        <h1 class="projectjourney">Project Journey</h1>
                    </div>
                    <div style="">
                        <input type="text" placeholder="Type in keyword..." class="input input-bordered w-full gntgsearch" />
                    </div>
                </div>
            </div>
            <div class='car'>
                <div class="carousel w-full">
                    <div id="item1" class="carousel-item w-full">

                        <div class='birunavy'></div>
                    </div>
                    <div id="item2" class="carousel-item w-full">
                        <div class='nms'> </div>
                    </div>
                    <div id="item3" class="carousel-item w-full">
                        <div class='abu'></div>
                    </div>
                    <div id="item4" class="carousel-item w-full">
                        <div class='slide4'></div>
                    </div>
                    <div id="item5" class="carousel-item w-full">
                        <div class='slide5'></div>
                    </div>
                    <div id="item6" class="carousel-item w-full">
                        <div class='slide6'></div>
                    </div>
                    <div id="item7" class="carousel-item w-full">
                        <div class='slide7'></div>
                    </div>
                </div>
                <div class="flex justify-center w-full py-2 gap-2">
                    <a class="btn btn-xs">o</a>
                    <a class="btn btn-xs">o</a>
                    <a class="btn btn-xs">o</a>
                    <a class="btn btn-xs">o</a>
                    <a class="btn btn-xs">o</a>
                    <a class="btn btn-xs">o</a>
                    <a class="btn btn-xs">o</a>
                </div>
            </div>

            <div>
                <h1 class='projectkeren'>Our Project</h1>
                {/* <div style=" display:flex; padding-left: 2vw;flex-wrap: wrap;"> */}

                    <div class="carousel rounded-box projectjour" style="">
                        <For each={client()}>{(clients, i) =>
                            <div style="margin-left: 2vw !important;margin-top: 3vh !important;    height: fit-content !important; border-radius: 10px !important;" class="blog-cardj w-96 bg-base-100 shadow-xl">
                                <div class="card" style="margin-bottom: 10px !important;">
                                    {/* <div class="mapglobe"/> */}
                                    <div class='img1'><img src={clients.img_projeect} /></div>
                                    <div style="display:flex; margin-top: 20px;    height: 4vh;">
                                        <div style="width:50%; height:50px;">
                                            <h1 class="project-judul">{clients.priority}</h1>
                                        </div>
                                        <div style="width:30%;">
                                            <div><img style=" margin-left:40px; width:100%; height: 40px;" src={clients.img_client} /></div>
                                        </div>
                                    </div>
                                    <div style="text-align: center;width:33vh;padding:1vh; margin-top: 20px;">
                                        <button class="superman-button btn btn-sm" onClick={() => read(clients)}><a link href="/projectdetails">Read More</a></button>
                                    </div>
                                </div>
                            </div>
                        }
                        </For>
                    </div>
                {/* <div style="margin-left: 2vw;margin-top: 3vh;" class="blog-cardj w-96 bg-base-100 shadow-xl">
                        <div class="card">
                            <div class="gambargraphic"/>
                            <div style="display:flex;">
                                <div style="width:50%;">
                            <h1 class="project-judul">NMS Datacom: Internet Monitoring</h1>
                            </div>
                            <div style="width:30%;">
                            <div class='telkomsel'></div>
                            </div>
                            </div>
                            <button class="hope-button btn btn-sm">Read More</button>
                        </div>
                    </div>
                    <div style="margin-left: 2vw;margin-top: 3vh;" class="blog-cardj w-96 bg-base-100 shadow-xl">
                        <div class="card">
                            <div class="gambargraphic"/>
                            <div style="display:flex;">
                                <div style="width:50%;">
                            <h1 class="project-judul">NMS Datacom: Internet Monitoring</h1>
                            </div>
                            <div style="width:30%;">
                            <div class='telkomsel'></div>
                            </div>
                            </div>
                            <button class="hope-button btn btn-sm">Read More</button>
                        </div>
                    </div> */}
                {/* </div> */}
            </div>
        </div>
    );
};

export default Journey;