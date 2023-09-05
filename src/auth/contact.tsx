import { createSignal, type Component, JSXElement } from 'solid-js';
import imageSrc from '../assets/girl.png'
import imagesrc from '../assets/robotgede.png'
import imageeSrc from '../assets/three.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './contact.css'


const Contact: Component<TestProps> = (props: any) => {

    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);

    return (
        <>
            <div style="display: flex; width: 100%; padding-top: 15vh;">
                <div style=" width: 60%;">
                    <h1 class='getintouch' style="width:84%; font-family: 'pm';">Want to enhance your business? Let’s get in touch</h1>
                    <div class="in">
                        <label class="label">
                            <span class="label-text">Company Name</span>
                        </label>
                        <input type="text" class="input input-bordered inin" style="width:730px; height:50px; border: 1px solid #545454;" />
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="" class="input input-bordered inin" style="width:730px; height:47px; border: 1px solid #545454;" />
                        <label class="label">
                            <span class="label-text">Project</span>
                        </label>
                        <select class="select select-bordered w-full inin" style="width:730px; height:47px; border: 1px solid #545454;" >
                            <option disabled selected></option>
                            <option>Lorem</option>
                            <option>Ipsum</option>
                        </select>
                        <label class="label">
                            <span class="label-text">Message</span>
                        </label>
                        <input type="text" placeholder="" class="input input-bordered inin" style="width:730px; height:150px; border: 1px solid #545454;" />
                        <label class="label">
                            <span class="label-text">Document</span>
                        </label>
                        <div style="display: flex; width: 100%;">
                            <div style=" width: 75%;">
                                <input type="text" placeholder="" class="input input-bordered inin" style="width:580px; height:47px; border: 1px solid #545454;" />
                            </div>
                            {/* <div style=" width: 25%;">
                                
                            </div> */}
                        </div>
                        <div style="display: flex">
                        <button class="btn btn-wide click">Send Message</button>
                        <button class="btn upload">Upload</button>

                        </div>
                    </div>
                </div>
                <div style="width: 32%;">
                    <img src={imageee()} alt="Alternative Text" class="three" />
                    <img src={image()} alt="Alternative Text" class="gril" />
                    <img src={imagee()} alt="Alternative Text" class="robotgede" />
                </div>
            </div>

        </>

    );
};

export default Contact;