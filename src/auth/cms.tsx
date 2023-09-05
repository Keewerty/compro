import { createSignal, type Component, JSXElement, useTransition, Suspense, Switch, Match } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './cms.css'
import { FiCheckCircle } from 'solid-icons/fi'
import { VsError } from 'solid-icons/vs'
import { getClient, getJobVacancy, inblog, input_client } from '../service/Service';
import { input_project, getProject, Inputjob, Inputkaryawan } from '../service/Service';
import Tablejobs from './job-v';
import Tableteams from './teams_table';
import './teams_table.css'
import './job-v.css'
import './project.css'
import Project from './project';
import TableClient from './tabelclient';
import './tabelclient.css';
import TabelBlog from './tabelblog';
import './tabelblog.css';
import Explore from './explore';


const Cms: Component<TestProps> = (props: any) => {
    const [inputValue, setInputValue] = createSignal("");
    const [inputValue9, setInputValue9] = createSignal("");
    const hasil1 = async () => {

        setIsOpen(false);
        setIsEror(false);
        setIsKosong(false);
        // // // console.log("img ->", inputValue());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        if (base64Data() == "", inputValue() == "") {

            setIsKosong(true);

        } else {
            input_client({
                id_user: 6,
                tittle: inputValue(),
                img_client: base64Data(),
            }).then((data: any) => {
                // // // console.log("detail account->", data);


                if (data == undefined) {
                    setIsEror(true);
                    // // // console.log("eror")
                }


                else if (data.status == 'OK') {
                    setIsOpen(true);
                    // // // console.log("OK")

                }
            });
        }


    };

    const [isOpen, setIsOpen] = createSignal(false);
    const [isEror, setIsEror] = createSignal(false);
    const [isKosong, setIsKosong] = createSignal(false);
    // // let res : any = '';
    // // res = document.querySelector(".local");
    // // res.addEventListener("change", (event : any) => {
    // //     const selectedfile = event.target.files;
    // //     if (selectedfile.length > 0) {
    // //       const [imageFile] = selectedfile;
    // //       const fileReader = new FileReader();
    // //       fileReader.onload = () => {
    // //         const srcData = fileReader.result;
    // //         // // // console.log('base64:', srcData)
    // //       };
    // //       fileReader.readAsDataURL(imageFile);
    // //     }
    //   });
    onMount(() => {
        getClient().then((data: any) => {
            // // // console.log('cekdataclient ->', data);

        })
    });


    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [base64Data, setBase64Data] = createSignal('');




    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        // // // console.log("cek upload file", file)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result: any = reader.result;
                // // // console.log("result base64 -> ", result)
                setBase64Data(result);
            };
            reader.readAsDataURL(file);
        }
    }
    const [tab, setTab] = createSignal(0);
    const [pending, start] = useTransition();
    const updateTab = (index: any) => () => start(() => setTab(index));
    const [inputValuee, setInputValuee] = createSignal("");
    const [inputValuee1, setInputValuee1] = createSignal("");
    const [inputValuee2, setInputValuee2] = createSignal("");
    const [inputValuee3, setInputValuee3] = createSignal("");


    const hasil2 = async () => {
        // // // console.log("img ->", inputValuee3());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        input_project({
            id_client: 6,
            content: inputValuee1(),
            priority: inputValuee2(),
            img_projeect: base64Data(),
        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
    };

    // const [inputValuee, setInputValuee] = createSignal("");
    // const [inputValuee1, setInputValuee1] = createSignal("");
    // const [inputValuee2, setInputValuee2] = createSignal("");
    // const hasil2 = async () => {

    //     // // // console.log("id_project ->", inputValuee());
    //     // // // console.log("content ->", inputValuee1());
    //     // // // console.log("priority ->", inputValuee2());
    //     var todayDate = new Date().toISOString().slice(0, 10);
    //     // // // console.log(todayDate);

    //     input_project({
    //         id_project: inputValuee(),
    //         content: inputValuee1(),
    //         priority: inputValuee2(),
    //         img_project: inputValuee
    //     })
    //     .then((data: any) => {
    //         // // // console.log("detail account->", data);

    //     });
    // };

    onMount(() => {
        getProject().then((data: any) => {
            // // // console.log('cekdataproject ->', data);
        })
    });

    const [inputValue5, setInputValue5] = createSignal("");
    const [inputValue6, setInputValue6] = createSignal("");
    const [inputValue7, setInputValue7] = createSignal("");
    const hasil5 = async () => {



        // // // console.log("tittle ->", inputValue5());
        // // // console.log("content ->", inputValue6());
        // // // console.log("img ->", inputValue7());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        // // // // console.log("gender ->", RadioValue1());
        // // // // console.log("gender ->", RadioValue2());
        inblog({
            title: inputValue5(),
            content: inputValue6(),
            date_creation: todayDate,
            cover_img: base64Data(),
        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
    }

    const [inputValueee, setInputValueee] = createSignal("");
    const [inputValueee1, setInputValueee1] = createSignal("");
    const [inputValueee3, setInputValueee3] = createSignal("");

    const hasil7 = async () => {


        // // // console.log("working_type ->", inputValueee());
        // // // console.log("position ->", inputValueee1());
        // // // console.log("content ->", inputValueee3());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        // // // // console.log("gender ->", RadioValue1());
        // // // // console.log("gender ->", RadioValue2());
        Inputjob({
            id_user: 6,
            working_type: inputValueee(),
            position: inputValueee1(),
            date_creation: todayDate,
            content: inputValueee3(),
        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
    };


    const [job, setJob]: any = createSignal();

    onMount(() => {

        // let data12: any[];
        getJobVacancy().then((data: any) => {
            setJob(data)
        })
    });

    const [inputValueeee, setInputValueeee] = createSignal("");
    const [inputValueeee1, setInputValueeee1] = createSignal("");
    const [inputValueeee3, setInputValueeee3] = createSignal("");
    const [inputValueeee4, setInputValueeee4] = createSignal("");
    const [inputValueeee5, setInputValueeee5] = createSignal("");
    const hasil6 = async () => {



        // // // console.log("name ->", inputValueeee());
        // // // console.log("quotes ->", inputValueeee1());
        // // // console.log("position ->", inputValueeee3());
        // // // console.log("link ->", inputValueeee4());
        // // // console.log("img ->", inputValueeee5());

        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        // // // // console.log("gender ->", RadioValue1());
        // // // // console.log("gender ->", RadioValue2());
        Inputkaryawan({
            id_user: 6,
            name: inputValueeee(),
            quotes: inputValueeee1(),
            date_creation: todayDate,
            position: inputValueeee3(),
            link: inputValueeee4(),
            img_teams: base64Data(),

        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
    };



    return (

        <div>
            <div style="display:flex; width:100%;font-family:'pm';">
                <div style="width:50%">
                    <Tablejobs />
                </div>
                <div style="width:50%; font-family:'pm';">
                    <Tableteams />
                </div>
            </div>
            <div style="display:flex; width:100%; font-family:'pm';">
                <div style="width:50%">
                    <Project />
                </div>
                <div style="width:50%;font-family:'pm';">
                    <TableClient />
                </div>
            </div>
            <div style="display:flex; width:100%;font-family:'pm';">
                <div style="width:50%">
                    <TabelBlog />
                </div>
                <div style="width:50%;font-family:'pm';">
                    <Explore />
                </div>
            </div>
            {/* <div style="padding-top:100px " >
                <ul class="inline" style=" ">
                    <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
                        Client
                    </li>
                    <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                        Project Detail
                    </li>
                    <li classList={{ selected: tab() === 2 }} onClick={updateTab(2)}>
                        Blogs
                    </li>
                    <li classList={{ selected: tab() === 3 }} onClick={updateTab(3)}>
                        Teams
                    </li>
                    <li classList={{ selected: tab() === 4 }} onClick={updateTab(4)}>
                        Job
                    </li>
                </ul>
            </div>
            <div class='tab1' >


                <div class="tab" classList={{ pending: pending() }}>
                    <Suspense fallback={<div class="loader">Loading...</div>}>
                        <Switch>
                            <Match when={tab() === 0}>

                                <div class="angelclient" style="margin-left:2vw;">Create Client</div>
                                <input type="text" placeholder="Tittle" class="oi input input-bordered inne1" style="width:1100px; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValue(f.currentTarget.value); }} />
                                <input type="file" onChange={handleFileChange} class='nplot' style="width:1100px; height:35px; margin-top:vw; margin-left: -65vw;  border: 1px solid #545454; " onchange={(f) => { setInputValue9(f.currentTarget.value); }} />
                                <label for="my_modal_7" class="btn psx-11" onClick={hasil1}>Post</label>
                                <input type="checkbox" id="my_modal_7" class="modal-toggle" />

                                {isOpen() && (
                                    <div class="modal">
                                        <div class="modal-box" >
                                            <div class='ceklis' style="font-size:39px;"><FiCheckCircle /></div>
                                            <label class='sc'>Success</label>
                                        </div>
                                        <label class="modal-backdrop" for="my_modal_7">Close</label>
                                    </div>


                                )}
                                {isEror() && (
                                    <div class="modal">
                                        <div class="modal-box" >
                                            <div class='eror' style="font-size:39px;"><VsError /></div>
                                            <label class='sc'>GAGAL INPUT</label>
                                        </div>
                                        <label class="modal-backdrop" for="my_modal_7">Close</label>
                                    </div>

                                )}

                                {isKosong() && (
                                    <div class="modal">
                                        <div class="modal-box" >
                                            <div class='eror' style="font-size:39px;"><VsError /></div>
                                            <label class='sc'>PLEASE ISI SEMUA</label>
                                        </div>
                                        <label class="modal-backdrop" for="my_modal_7">Close</label>
                                    </div>

                                )}


                            </Match>
                            <Match when={tab() === 1}>
                                <div>
                                    <div style="width: 1076px; height: 498px; margin-top: 1vh;margin-left:-30vw;">
                                        <div class="angelclientt" style="margin-left:3vw;">Project Details</div>
                                        <input type="text" placeholder="ID" class="input input-bordered inne1" style="width:950px; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValuee(f.currentTarget.value); }} />

                                        <textarea class="textarea textarea-secondary inn1" placeholder="Content" style="width:950px; height:100px; border: 1px solid #545454;" onchange={(f) => { setInputValueee1(f.currentTarget.value); }}></textarea>
                                        <textarea class="textarea textarea-secondary inn1" placeholder="Priority" style="width:950px; height:100px; border: 1px solid #545454;" onchange={(f) => { setInputValuee2(f.currentTarget.value); }}></textarea>
                                        <div style="width:43%;">
                                            <input type="file" onChange={handleFileChange} class="inn1" style="width:950px; height:35px; margin-top:vw; margin-left:6vw;   border: 1px solid #545454;" onchange={(f) => { setInputValue7(f.currentTarget.value); }} />
                                        </div>
                                        <button class="suu-btn1 btn">
                                            <a link href="" class="inactive" onClick={hasil2}>Post</a>
                                        </button>
                                    </div> */}
            {/* <div>
                                        <div class="card-body">
                                        <div class="angelclient" style="margin-left:2vw;">Project Detail</div>
                                        <input type="text" placeholder="ID" class="oi input input-bordered inne1" style="width:1100px; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValuee(f.currentTarget.value); }} />
                                        <textarea placeholder="Content" class=" textarea textarea-bordered textarea-lg w-full max-w-xs" onchange={(f) => { setInputValuee1(f.currentTarget.value); }}   ></textarea>
                                        <textarea placeholder="Priority" class="textarea textarea-bordered textarea-lg w-full max-w-xs" onchange={(f) => { setInputValuee2(f.currentTarget.value); }}  ></textarea>
                                        <input type="file" onChange={handleFileChange} class='ngaplot' style="width:320px; height:40px; margin-top:vw; margin-left: 3vw; " onchange={(f) => { setInputValuee3(f.currentTarget.value); }} />
                                            <div class="card-actions justify-end">
                                                <button class="btn btn-primary postnow" onClick={hasil2}>Post</button>
                                            </div>
                                        </div>
                                    </div> */}
            {/* </div>
                            </Match>
                            <Match when={tab() === 2}>
                                <div style="width: 1076px; height: 498px; margin-top: 1vh;margin-left:-30vw;">
                                    <div class="angelclientt" style="margin-left:3vw;">Create Blogs</div>
                                    <input type="text" placeholder="Tittle" class="input input-bordered inne1" style="width:950px; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValue5(f.currentTarget.value); }} />
                                    <div style="width:43%;">
                                        <input type="file" onChange={handleFileChange} class="inn1" style="width:950px; height:35px; margin-bottom:1vw; margin-left:6vw;   border: 1px solid #545454;" onchange={(f) => { setInputValue7(f.currentTarget.value); }} />
                                    </div>
                                    <textarea class="textarea textarea-secondary inn1" placeholder="write your content" style="width:950px; height:200px; border: 1px solid #545454;" onchange={(f) => { setInputValue6(f.currentTarget.value); }}></textarea>
                                    <button class="suu-btn1 btn">
                                        <a link href="" class="inactive" onClick={hasil5}>Post</a>
                                    </button>
                                </div>

                            </Match>
                            <Match when={tab() === 3}>
                                <div class="angelclientt" style="margin-left:-30vw;">Project Details</div>
                                <div style="margin-top:2vw">

                                    <div>
                                        <input type="text" placeholder="Name" class="input input-bordered inne" style="width:900px; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:-40vw" onchange={(f) => { setInputValue(f.currentTarget.value); }} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Position" class="input input-bordered inne" style="width:900px; height:50px; margin-top:30px; border: 1px solid #545454; margin-left:-40vw" onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="link" class="input input-bordered inne" style="width:900px; height:50px; margin-top:25px; border: 1px solid #545454; margin-left:-40vw" onchange={(f) => { setInputValueeee4(f.currentTarget.value); }} />
                                    </div>
                                    <div>
                                        <textarea class="textarea textarea-secondary areaa" placeholder="Quotes" style="width:900px; height:50px; margin-top:25px; border: 1px solid #545454; margin-left:-40vw" onchange={(f) => { setInputValueeee1(f.currentTarget.value); }}></textarea>
                                    </div>
                                    <div>
                                        <input type="file" onChange={handleFileChange} class='nplot' style="width:900px; height:33px; margin-top:15vw; margin-left: -57.8vw;  border: 1px solid #545454; " onchange={(f) => { setInputValueeee5(f.currentTarget.value); }} />
                                    </div>
                                    <div>
                                        <div class="card-actions justify-end">
                                            <button class="btn btn-primary worldpost" style="color:white; margin-bottom:0.1vw;" onClick={hasil6}>Post</button>
                                        </div>
                                    </div>
                                </div>
                            </Match>
                            <Match when={tab() === 4}>

                                <div style="margin-left:-15vw">
                                    <div class="angelclientt" style="margin-left:-10vw;">Create Job</div>
                                    <div>
                                        <input type="text" placeholder="workingtyoe" class="input input-bordered innne" style="width:900px; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:-20vw" onchange={(f) => { setInputValueee(f.currentTarget.value); }} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="position" class="input input-bordered innne" style="width:900px; height:50px; margin-top:30px; border: 1px solid #545454;  margin-left:-20vw" onchange={(f) => { setInputValueee1(f.currentTarget.value); }} />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="content" class="input input-bordered innne" style="width:900px; height:50px; margin-top:25px; border: 1px solid #545454;  margin-left:-20vw" onchange={(f) => { setInputValueee3(f.currentTarget.value); }} />
                                    </div>

                                    <button class="wle-btn btn" style="width:900px; height:50px; margin-top:25px; border: 1px solid #545454;  margin-left:-20vw" onClick={hasil7}>
                                        <a link href="" class="inactive" onClick={hasil7}>Post</a>
                                    </button>
                                </div>
                            </Match>
                        </Switch>
                    </Suspense> */}
        </div>

    );
};

export default Cms;