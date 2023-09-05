import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/oke.jpg'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './detailsbloog.css'
import { getBlog, getBlogdetail, inblog } from '../service/Service';


const Detailsblog: Component<TestProps> = (props: any) => {



    // const [RadioValue3, setRadion3] = createSignal("tidak ada");
    // const [RadioValue4, setRadion4] = createSignal("kode verifikasi");
    // const [RadioValue5, setRadion5] = createSignal("pertanyaan");

    // // // // console.log("gender ->", RadioValue1());
    // // // // console.log("gender ->", RadioValue2());


    const [Blog, setBlog] = createSignal([
        { id: '', id_user: '', date_creation: '', cover_img: '', content: '', title: '' },
    ]);

    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [topBlog, setTopBlog]: any = createSignal({
        "id": 7,
        "id_user": null,
        "date_creation": "",
        "cover_img": "",
        "content": "",
        "title": ""
    },);


    onMount(() => {
        let res: any = localStorage.getItem("detailBlog");
        // // console.log("data detail masuk -> ", JSON.parse(res))
        setTopBlog(JSON.parse(res))
        setBlog(JSON.parse(res))
        getBlogdetail(JSON.parse(res).id).then((data: any) => {
            // // // console.log('cekdatablog ->', data);
            // gridRefDokumen.api.setColumnDefs(konsultasi);
            setBlog(data)
            setTopBlog(data[0])
        })
    });



    return (
        <>
            <div style="display:flex;width:100%;margin-bottom:6vw;">
                <div style="    width: 90%;
    font-family: 'pm';
    align-self: center;
    text-align: -webkit-center;">
                    <div><img class="ehmm2" src={topBlog().cover_img} /></div>
                    <div class="ehmmm">
                        <h1 style="font-weight:bold;font-size:32px;margin-bottom:1vw;">{topBlog().title_detail}</h1>
                        <h1 style="text-align:left;">
                            {topBlog().content_detail}
                        </h1>
                    </div>

                </div>


                {/* <div class="side">
                    <h2 class="side1">BRAINCODE SOLUTION</h2>
                    <div class="logos"></div>
                    <div class="bawah"></div>
                    <div class="sosmedd">
                        <div class="grid grid-flow-col gap-4">
                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25.5038 -0.00012207H1.49625C1.10033 0.00266057 0.721461 0.152566 0.441495 0.417208C0.161529 0.681851 0.00294377 1.03998 0 1.41423V24.1077C0.00294377 24.482 0.161529 24.8401 0.441495 25.1047C0.721461 25.3694 1.10033 25.5193 1.49625 25.5221H14.4225V15.6535H10.9125V11.7933H14.4225V8.95392C14.4225 5.6573 16.5487 3.86011 19.6762 3.86011C20.7225 3.86011 21.7688 3.86011 22.815 4.00899V7.44385H20.6663C18.9675 7.44385 18.6412 8.20952 18.6412 9.32612V11.7826H22.6913L22.1625 15.6429H18.6412V25.5221H25.5038C25.8997 25.5193 26.2785 25.3694 26.5585 25.1047C26.8385 24.8401 26.9971 24.482 27 24.1077V1.41423C26.9971 1.03998 26.8385 0.681851 26.5585 0.417208C26.2785 0.152566 25.8997 0.00266057 25.5038 -0.00012207Z" fill="#545454">
                                </path>
                            </svg>
                            <svg width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M33 3.00249C31.7854 3.52795 30.4761 3.87325 29.1195 4.03839C30.5077 3.2427 31.5803 1.9816 32.0851 0.465283C30.7758 1.21594 29.3246 1.74139 27.7945 2.04165C26.5483 0.750531 24.7973 -0.00012207 22.8098 -0.00012207C19.1028 -0.00012207 16.0741 2.88239 16.0741 6.44048C16.0741 6.95092 16.1372 7.44636 16.2476 7.91176C10.6319 7.64153 5.63145 5.07429 2.30306 1.18591C1.71941 2.13173 1.38815 3.2427 1.38815 4.41372C1.38815 6.65066 2.57122 8.63239 4.40105 9.75837C3.28107 9.75837 2.23996 9.45811 1.32505 9.00771V9.05275C1.32505 12.1755 3.65966 14.7877 6.75143 15.3732C5.7588 15.6318 4.71669 15.6678 3.70698 15.4783C4.13542 16.7582 4.97451 17.878 6.10629 18.6805C7.23807 19.483 8.60563 19.9277 10.0167 19.9522C7.62475 21.7545 4.65975 22.7286 1.60899 22.7146C1.07266 22.7146 0.536329 22.6846 0 22.6246C2.99713 24.4561 6.56214 25.5221 10.3795 25.5221C22.8098 25.5221 29.6401 15.7035 29.6401 7.19113C29.6401 6.90588 29.6401 6.63565 29.6243 6.3504C30.9493 5.44962 32.0851 4.30863 33 3.00249Z" fill="#545454">
                                </path>
                            </svg>
                            <svg width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9995 8.57581C12.6867 8.57581 11.4277 9.06876 10.4995 9.94623C9.57118 10.8237 9.04967 12.0138 9.04967 13.2547C9.04967 14.4957 9.57118 15.6858 10.4995 16.5632C11.4277 17.4407 12.6867 17.9337 13.9995 17.9337C15.3123 17.9337 16.5713 17.4407 17.4996 16.5632C18.4279 15.6858 18.9494 14.4957 18.9494 13.2547C18.9494 12.0138 18.4279 10.8237 17.4996 9.94623C16.5713 9.06876 15.3123 8.57581 13.9995 8.57581Z" fill="#545454">
                                </path>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03457 0.415907C11.3287 -0.138798 16.6714 -0.138798 21.9655 0.415907C24.8577 0.721117 27.1895 2.87343 27.5291 5.61744C28.157 10.6918 28.157 15.818 27.5291 20.8924C27.1895 23.6364 24.8577 25.7887 21.967 26.0953C16.6724 26.6502 11.3292 26.6502 6.03457 26.0953C3.14233 25.7887 0.810565 23.6364 0.470928 20.8938C-0.156976 15.819 -0.156976 10.6923 0.470928 5.61744C0.810565 2.87343 3.14233 0.721117 6.03457 0.415907ZM21.6152 4.61687C21.2113 4.61687 20.8239 4.76855 20.5383 5.03854C20.2526 5.30853 20.0922 5.67472 20.0922 6.05654C20.0922 6.43837 20.2526 6.80456 20.5383 7.07455C20.8239 7.34454 21.2113 7.49622 21.6152 7.49622C22.0191 7.49622 22.4065 7.34454 22.6921 7.07455C22.9778 6.80456 23.1382 6.43837 23.1382 6.05654C23.1382 5.67472 22.9778 5.30853 22.6921 5.03854C22.4065 4.76855 22.0191 4.61687 21.6152 4.61687ZM6.76563 13.2549C6.76563 11.4412 7.52782 9.70185 8.88454 8.4194C10.2413 7.13694 12.0813 6.41646 14 6.41646C15.9187 6.41646 17.7588 7.13694 19.1155 8.4194C20.4722 9.70185 21.2344 11.4412 21.2344 13.2549C21.2344 15.0686 20.4722 16.808 19.1155 18.0904C17.7588 19.3729 15.9187 20.0934 14 20.0934C12.0813 20.0934 10.2413 19.3729 8.88454 18.0904C7.52782 16.808 6.76563 15.0686 6.76563 13.2549Z" fill="#545454">
                                </path>
                            </svg>

                        </div>
                    </div>
                </div> */}


            </div>
        </>

    );
};

export default Detailsblog;