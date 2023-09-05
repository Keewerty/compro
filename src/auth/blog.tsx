import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/oke.jpg'
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './blog.css'
import { getBlog, inblog } from '../service/Service';
import { style } from 'solid-js/web';


const Blogs: Component<TestProps> = (props: any) => {


    const [inputValue, setInputValue] = createSignal("");
    const [inputValue1, setInputValue1] = createSignal("");
    const [inputValue2, setInputValue2] = createSignal("");

    // const [RadioValue3, setRadion3] = createSignal("tidak ada");
    // const [RadioValue4, setRadion4] = createSignal("kode verifikasi");
    // const [RadioValue5, setRadion5] = createSignal("pertanyaan");

    const hasil1 = async () => {


        // // // // console.log("tittle ->", inputValue());
        // // // // console.log("content ->", inputValue1());
        // // // // console.log("img ->", inputValue2());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // // console.log(todayDate);
        
        
        inblog({
            title: inputValue(),
            content: inputValue1(),
            date_creation:todayDate,
            cover_img: inputValue1(),
        }).then((data: any) => {
            // // // // console.log("detail account->", data);
        });
    };

    const [Blog, setBlog] = createSignal([
        { id: '1', title: 'Lorem Ipsum', date_creation: '03/03/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', cover_img: "ngehack.png" },
        { id: '2', title: 'Lorem Ipsum', date_creation: '03/03/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', cover_img: "ngehack.png" },
        { id: '3', title: 'Lorem Ipsum', date_creation: '03/03/2023', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', cover_img: "ngehack.png" },
    ]);

    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [topBlog, setTopBlog] : any= createSignal({
        "id": 7,
        "id_user": null,
        "date_creation": "",
        "cover_img": "", 
        "content": "",
        "title": ""
    },);


    onMount(() => { 
        getBlog().then((data : any) => {
            // // // // console.log('cekdatablog ->', data);
            // gridRefDokumen.api.setColumnDefs(konsultasi);
            setBlog(data)
            setTopBlog(data[0])
          })
    });
    const [detailBlog,setDetailBlog] = createSignal()
    const blogDetail = (evt : any) => {
      // // // // console.log("EVT -> ", evt)
      localStorage.setItem("detailBlog",JSON.stringify(evt))
    } 


    const navigate = useNavigate();

    const blogis: any = () => {
        navigate('#section3', { replace: false });
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }
    return (
        <>
            <div>
                <div style="width:100%;">
                    <div>
                        <div class='brokeway'></div>
                        <h1 class='explore1' style="width:70%;">Explore and Learn All About Information Technology on Braincode’s Blogs</h1>
                        <button class="btn phone" onClick={blogis}>Read Now</button>
                    </div>
                </div>
            </div>

            <div>
                <input type="checkbox" id="formmm" class="modal-toggle" />
                <div class="modal">
                    <div class="card w-100 bg-base-100 shadow-xl" style="width: 1076px; height: 498px; margin-top: 10vh; background-color: #ffff;">
                        <div class="modal-action" style="margin-top: -2vh; margin-right: 1vw">
                            <label for="formmm" class="btn btn-circle btn-outline btn-sm" style="margin-top: 4vh; background-color: #cacaca; color:#b8b8b8;">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </label>
                        </div>
                        <h1 style="width:950px; height:50px;" class="konten" >create blogs</h1>
                        <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:950px; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValue(f.currentTarget.value); }} />
                        <input type="file" class="file-input w-full max-w-xs inn"onchange={(f) => { setInputValue2(f.currentTarget.value);}} />
                        <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:950px; height:200px; border: 1px solid #545454;" onchange={(f) => { setInputValue1(f.currentTarget.value); }}></textarea>
                        <button class="suu-btn btn" onClick={hasil1}>
                            <a link href="" class="inactive">Post</a>
                        </button>
                    </div>
                </div>
            </div>
            <div id="section3">
                <div>
                    <h1 class="latest">Latest Blog</h1>
                    {/* <label for="formmm" class="btn btn-circle btn-outline btttn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 8 8"><path fill="currentColor" d="M3 0v3H0v2h3v3h2V5h3V3H5V0H3z" />
                        </svg>
                    </label> */}
                </div>
                <div class="latest-card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <div class='blgs-11'>
                        <div class='cards-blogs'><img src={topBlog().cover_img} class='img-blogs'/></div>
                            <div class='cntn-blogs'>
                                <h1 class="latest-judul">{topBlog().title}</h1>
                                {/* <h1 class="latest-tanggal">{topBlog().date_creation}</h1> */}
                                <h1 class="latest-task">{topBlog().content}</h1>
                                <A link href="/detailsblog"><button class="latest-button btn btn-sm"onClick={() => {blogDetail(topBlog())}}>Read More</button></A>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 id="section4" class="blog1">Blogs</h1>
            <div style="padding: 0; display: flex; flex-wrap: wrap;">
            <div class="carousel rounded-box">
                <For each={Blog()}>{(blogg, i) =>
                    <div class="carousel-item blogs-1" >
                        <div style="margin-top: 3vh;margin-bottom: 20vh;" class="blog-card w-96 bg-base-100 shadow-xl">
                            <div class="card" style="height: 92vh;">
                                {/* <div class="blog-img" /> */}
                                <div><img src={blogg.cover_img} class="caraousel-item" style="width:100%; height:30vh; border-radius: 1vh;"/></div>
                                <h1 class="blog-judul">{blogg.title}</h1>
                                {/* <h1 class="blog-tanggal">{blogg.date_creation}</h1> */}
                                <h1 class="blog-task">{blogg.content}</h1>
                                <h1 class="blog-task1"></h1>
                            <A link href='/detailsblog'><button class="more-button btn btn-sm" onClick={() => {blogDetail(blogg)}}>Read More</button></A>
                            </div>
                        </div>
                    </div>
                }
                </For>
                </div>
            </div>
    </>

    );
};

export default Blogs;