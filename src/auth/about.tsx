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
import './about.css'
import Navbar from './navbar'
import { getClient, input_client } from '../service/Service';



const About: Component<TestProps> = (props: any) => {
    const [inputValue, setInputValue] = createSignal("");

    const [imG, setImG]: any = createSignal();
    const hasil1 = async () => {


        // // // // console.log("img ->", inputValue());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        input_client({
            id_user: 6,
            tittle: "Test",
            img_client: base64Data(),
        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
    };
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

    const inputData: any = [
        {
            "id": 1,
            "img_client": "test 1"
        },
        {
            "id": 2,
            "img_client": "test 2"
        },
        {
            "id": 3,
            "img_client": "test 3"
        },
        {
            "id": 4,
            "img_client": "test 4"
        },

        {
            "id": 5,
            "img_client": "test 5"
        },
        {
            "id": 6,
            "img_client": "test 6"
        },
        {
            "id": 7,
            "img_client": "test 7"
        },
        {
            "id": 8,
            "img_client": "test 8"
        }
    ];

    const chunkSize = 8; // Change this value to adjust the number of items per chunk



    onMount(() => {


        getClient().then((data: any) => {
            // // // // console.log('cekdataclient ->',  data[5]);
            // setImG(data[4].img_client);
            const outputData = data.reduce((acc: { datas: any[]; }[], cur: any, index: number) => {
                const chunkIndex = Math.floor(index / 8);
                if (!acc[chunkIndex]) {
                    acc[chunkIndex] = { datas: [] };
                }
                acc[chunkIndex].datas.push(cur);
                return acc;
            }, []);

            // // // console.log("CEKKK",JSON.stringify(outputData,null,4));
            let res = JSON.stringify(outputData, null, 8)
            setAtas(JSON.parse(res))
            // // // console.log("parse",Atas())
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

    const [Atas, setAtas] = createSignal([

        [
            {
                "datas": [
                    {
                        "id": 1,
                        "img_client": "test 1",
                        "tittle": "test"
                    },
                    {
                        "id": 2,
                        "img_client": "test 2",
                        "tittle": "test"
                    }
                ]
            },
            {
                "datas": [
                    {
                        "id": 3,
                        "img_client": "test 3",
                        "tittle": "test"
                    },
                    {
                        "id": 4,
                        "img_client": "test 4",
                        "tittle": "test"
                    }
                ]
            }
        ]


    ]);
    const navigate = useNavigate();

    const service: any = () => {
        navigate('/#section2', { replace: false });
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }

    const team: any = () => {
        navigate('/teams', { replace: false });
        // window.localStorage.setItem("data",JSON.stringify(dataP()))         
    }





    return (
        <>
        {/* <Navbar/> */}
        <div style={'overflow-x:hidden !important'}>
            <div style="display: flex; width: 100%; padding-top: 15vh;">
                <div style=" width: 60%;">
                    <ul class='enhance' style="width:70%;font-family:'pm'">Enhance your
                        business with us!</ul>
                    <ul class='braincode' >BRAINCODE SOLUTION</ul>
                    <ul class='is' style="width: 72%">Braincode is an innovative and technically competent wireless content provider. Connected to major Telco operators in Indonesia, Braincode Systems manages millions of SMS and provides mobile solutions for B2B and B2C. Braincode is making the transition from content information technology solution providers.</ul>
                    <div style="display: flex;">
                        <button class="btn btn-wide services" onClick={service}>Services</button>
                        <button class="btn btn-wide teams" onClick={team}>Our Teams</button>
                    </div>
                </div>
                <div style="width: 32%;">
                    <img src={imageee()} alt="Alternative Text" class="wong2" />
                </div>
            </div>
            <h1 class="R">Our Performances</h1>
            <div style='display:flex;'>
                <div class='Img'></div>
                <div class='img'></div>
            </div>
            <div style="display: flex;width: 100%;gap: 1%;margin-bottom:2vh;margin-top: 8%;padding-left:9%; margin-bottom:1vw;flex-wrap:wrap">
                <div style="width:30%" class="cardo card w-96 bg-primary text-primary-content about-rac1">
                    <div class="card-body">
                        <div class="RE"></div>
                        <h2 class="cardd -title">innovations</h2>
                        <p class="carar">Providing the best solutions for the company's business needs with the latest IT Framework</p>
                    </div>
                </div>
                <div style="width:30%" class="cardo card w-96 bg-primary text-primary-content about-rac2">
                    <div class="card-body">
                        <div class="IMg"></div>
                        <h2 class="cardd -title">Large Scale data </h2>
                        <p class="carar">Assist you organize and integrate your company data, even on a large scale</p>
                    </div>
                </div>
                <div style="width:30%" class="cardo card w-96 bg-primary text-primary-content about-rac3">
                    <div class="card-body">
                        <div class="IMG"></div>
                        <h2 class="cardd -title">Delivery Speed </h2>
                        <p class="carar">Provide the best performance and timeline for your project</p>
                    </div>
                </div>
            </div>

            <div style="display:flex; width: 100%; gap:1%;padding-left:9%;flex-wrap:wrap">
                <div style="width:30%" class="cardo card w-96 bg-primary text-primary-content about-rac4">
                    <div class="card-body">
                        <div class="IMG1"></div>
                        <h2 class="cardd -title">Team Works</h2>
                        <p class="carar">We have a solid team that will provide the best service for your company's business solutions.</p>
                    </div>
                </div>

                <div style="width:30%;" class="cardo card w-96 bg-primary text-primary-content about-rac5">
                    <div class="card-body">
                        <div class="IMG2"></div>
                        <h2 class="cardd -title">Keep up with the changes</h2>
                        <p class="carar">Provide business solutions with the latest frameworks and a solid team to support more advanced changes</p>
                    </div>
                </div>

                <div style="width:30%;" class="carda w-96 bg-primary text-primary-content about-rac6">
                    <div class="card-body">
                        <div style="margin-top: 5vh;" class="avatar-group -space-x-6">
                            <div style="border-color:#082032;" class="avatar">
                                <div style="width: 7rem;" class="w-24 rounded-full">
                                    <div class="F1">
                                    </div>
                                </div>
                            </div>
                            <div style="border-color:#082032;" class="avatar">
                                <div style="width: 7rem;" class="w-24 rounded-full">
                                    <div class="F2">
                                    </div>
                                </div>
                            </div>
                            <div style="border-color:#082032;" class="avatar">
                                <div style="width: 7rem;" class="w-24 rounded-full">
                                    <div class="F3">
                                    </div>
                                </div>
                            </div>
                            <div style="border-color:#082032;" class="avatar">
                                <div style="width: 7rem;" class="w-24 rounded-full">
                                    <div class="F4">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a link href="#/teams" class="btn btn-warning inactive ourss" >See Our Teams</a>
                </div>


            </div>
      
            <div class="main" id="section2">
                <div class='backgroundabout'>
                    <span class='ourservices'>Our Services</span>
                    <div style="display: flex;width: 100%;">
                        <div style="display: flex;">
                            <div class="grub1">
                                <div style="display: flex;width: 100%;">
                                    <div style="width: 30%" class="grupp1">
                                        <div class="software"></div>
                                    </div>
                                    <div style="width: 70%">
                                        <h1 class="sf1">Training Center</h1>
                                        <h1 class="sf2">Inspiring Innovation through IT Education</h1>
                                        <h1 class="sf3">Our Training Center is</h1>
                                    </div>
                                </div>
                                <label for="service" class='about-detail' >Details</label>
                            </div>
                            <div class="grub2">
                                <label for="mobapp" style="cursor:pointer;">
                                    <div class="mobile1">
                                        <div class="mobile2"></div>
                                    </div>
                                    <p class="mobileapp">Content Provider</p></label>


                            </div>
                            <div class="grub3">
                                <label for="datint" style="cursor:pointer;">
                                    <div class="data1">
                                        <div class="data2"></div>
                                    </div>
                                    <p class="mobileapp" style="width:79.7%; padding-left:5vw">Real Time Data Processing</p></label>

                            </div>
                        </div>
                    </div>
                    <div style="display: flex;width: 100%;">
                        <div style="display: flex;">
                            <div class="grub4">
                                <label for="clouds" style="cursor:pointer;">
                                    <div class="cloud1">
                                        <div class="cloud2"></div>
                                    </div>
                                    <p class="mobileapp">Web Development</p>
                                </label>
                            </div>
                            <div class="grub5">
                                <label for="conpro" style="cursor:pointer;">
                                    <div class="content1">
                                        <div class="content2"></div>
                                    </div>
                                    <p class="mobileapp" style="width:80%; padding-left:5vw">Mobile App Development</p>
                                </label>
                            </div>
                            <div class="grub6">
                                <div style="display: flex;width: 100%;">
                                    <div style="width: 50%">
                                        <p class="s1">See our projects</p>
                                        <p class="s2">Look what we’ve made!</p>
                                    </div>
                                    <div style="width: 50%">
                                        <div class="about-adib" style="display: flex">
                                            <div class="p1"></div>
                                            <div class="p2"></div>
                                            <div class="p3"></div>
                                        </div>
                                        <label class="btn btn-sm btn-primary ours"><a link href="/journey">Our Projects</a></label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" id="service" class="modal-toggle" />
                        <div class="modal">
                            <div class="card9 w-100 bg-base-100 shadow-xl" >
                                <div style="display:flex;width:100%">
                                    <div style="width: 40%; padding-top: 3vh;">
                                        <div class="Pop1">
                                        </div>
                                    </div>
                                    <div style="width: 60%;">
                                        <div class="content">
                                            <div class="card-title1">Training Center</div>
                                            <div class="card-sub1">Inspiring Innovation through IT Education</div>
                                            <div class="card-content1">Our Training Center is an innovative and dedicated place to develop potential IT professionals. We offer a wide array of training programs designed to enhance skills and technical knowledge in various IT disciplines, including programming, data analysis, cybersecurity, web development, and more.</div>
                                            <div class="modal-action  wadahbtn" style="margin-top: 50vh; padding-left: 13vw; position: absolute;">
                                                <a link href="#/contact" class="btn-con-training btn inactive">Contact Us</a>
                                                <label for="service" class="btn-close-training  btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" id="mobapp" class="modal-toggle" />
                        <div class="modal">
                            <div class="cardreal w-100 bg-base-100 shadow-xl">
                                <div class='wadah-realtime'>
                                    <div style="width: 40%; padding-top: 3vh;">
                                        <div class="Pop2">
                                        </div>
                                    </div>
                                    <div class='cardreal-putih'>
                                        <div class="content">
                                            <div class="card-title3">Content Provider</div>
                                            <div class="card-sub3">Unlocking Knowledge, Empowering Minds</div>
                                            <div class="card-content3">We are a leading content provider, providing access to high quality content from various fields. From informative articles to practical guides, we are here to provide insight and inspiration for our users</div>
                                            <div class="modal-action wadahbtn" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-conreal btn inactive">Contact Us</a>
                                                <label for="mobapp" class="btn-closereal btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div><input type="checkbox" id="mobapp" class="modal-toggle" />
                        <div class="modal">
                            <div class="cardreal w-100 bg-base-100 shadow-xl" style="width: 1076px; height: 498px; margin-top: 13vh; background-color: #787878;">
                                <div style="display:flex;width:100%">
                                    <div style="width: 40%; padding-top: 3vh;">
                                        <div class="Pop2">
                                        </div>
                                    </div>
                                    <div style="width: 70%; background-color: white; height: 498px; border-radius: 17px;">
                                        <div class="content">
                                            <div class="card-title2">Content Provider</div>
                                            <div class="card-sub2">Unlocking Knowledge, Empowering Minds</div>
                                            <div class="card-content2">We are a leading content provider, providing access to high quality content from various fields. From informative articles to practical guides, we are here to provide insight and inspiration for our users.</div>
                                            <div class="modal-action wadahbtn" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-con btn inactive">Contact Us</a>
                                                <label for="mobapp" class="btn-close btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div>
                        <input type="checkbox" id="datint" class="modal-toggle" />
                        <div class="modal">
                            <div class="cardreal w-100 bg-base-100 shadow-xl">
                                <div class='wadah-realtime'>
                                    <div style="width: 40%; padding-top: 3vh;">
                                        <div class="Pop3">
                                        </div>
                                        <div class="Pop3a">
                                        </div>
                                    </div>
                                    <div class='cardreal-putih'>
                                        <div class="content">
                                            <div class="card-title3">Real Time Data Processing</div>
                                            <div class="card-sub3">Empowering Decisions at the Speed of Now</div>
                                            <div class="card-content3">Real-Time Data Processing is a technology that enables processing and analysis of data instantly and in real time. By processing data as soon as it is available, the system provides accurate and relevant information quickly</div>
                                            <div class="modal-action wadahbtn" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-conreal btn inactive">Contact Us</a>
                                                <label for="datint" class="btn-closereal btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <input type="checkbox" id="clouds" class="modal-toggle" />
                        <div class="modal">
                            <div class="cardreal w-100 bg-base-100 shadow-xl">
                                <div class='wadah-realtime'>
                                    <div style="width: 40%; padding-top: 3vh;">
                                        <div class="Pop4">
                                        </div>
                                        <div class="Pop4a">
                                        </div>
                                    </div>
                                    <div class='cardreal-putih'>
                                        <div class="content">
                                            <div class="card-title3">Web Development</div>
                                            <div class="card-sub3">Code Your Vision: Web Development at Its Finest</div>
                                            <div class="card-content3">Web developers use various programming languages, tools, and technologies to create the desired function, appearance, and interactivity on a website. The goal of web development is to create an optimal user experience and ensure good security and performance.</div>
                                            <div class="modal-action wadahbtn" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-conreal btn inactive">Contact Us</a>
                                                <label for="clouds" class="btn-closereal btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* <div><input type="checkbox" id="cloud" class="modal-toggle" />
                        <div class="modal">
                            <div class="card w-100 bg-base-100 shadow-xl webcard">
                                <div style="display:flex;width:100%">
                                    <div style="width: 40%;">
                                        <div class="Pop4"></div>
                                        <div class="Pop4a"></div>
                                    </div>
                                    <div class='webdev'>
                                        <div class="content">
                                            <div class="card-title4 ttl">Web Development</div>
                                            <div class="card-sub4 cdsub">Code Your Vision: Web Development at Its Finest</div>
                                            <div class="card-content4 ctn">Web developers use various programming languages, tools, and technologies to create the desired function, appearance, and interactivity on a website. The goal of web development is to create an optimal user experience and ensure good security and performance.</div>
                                            <div class="modal-action" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-con btn inactive ctc">Contact Us</a>
                                                <label for="cloud" class="btn-close btn cls">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}


                    <div>
                        <input type="checkbox" id="conpro" class="modal-toggle" />
                        <div class="modal">
                            <div class="cardreal w-100 bg-base-100 shadow-xl">
                                <div class='wadah-realtime'>
                                    <div style="width: 40%; padding-top: 3vh;">
                                        <div class="Pop5">
                                        </div>
                                    </div>
                                    <div class='cardreal-putih'>
                                        <div class="content">
                                            <div class="card-title3">Mobile App Development</div>
                                            <div class="card-sub3">Mobile App Solutions for the Future.</div>
                                            <div class="card-content3">The process of developing and deploying scalable mobile applications to facilitate companies in streamlining their business operations and increasing productivity.</div>
                                            <div class="modal-action wadahbtn" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-conreal btn inactive">Contact Us</a>
                                                <label for="conpro" class="btn-closereal btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div>
                        <input type="checkbox" id="conpro" class="modal-toggle" />
                        <div class="modal">
                            <div class="card w-100 bg-base-100 shadow-xl" style="width: 1076px; height: 498px; margin-top: 13vh; background-color: #787878;">
                                <div style="display:flex;width:100%">
                                    <div style="width: 40%;">
                                        <div class="Pop5"></div>
                                    </div>
                                    <div style="width: 70%; background-color: white; height: 498px; border-radius: 17px;">
                                        <div class="content">
                                            <div class="card-title5">Mobile App Development</div>
                                            <div class="card-sub5">Mobile App Solutions for the Future.</div>
                                            <div class="card-content5">The process of developing and deploying scalable mobile applications to facilitate companies in streamlining their business operations and increasing productivity.</div><div class="modal-action" style="margin-top: 50vh; padding-left: 15vw; position: absolute;">
                                                <a link href="#/contact" class="btn-con btn inactive">Contact Us</a>
                                                <label for="conpro" class="btn-close btn">Close</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                 
                    </div>
                    {/* <footer class="footer p-10 bg-neutral text-neutral-content">
                        <div class="company">
                            <p>
                                <a class="company-title">PT. Braincode Solution</a>
                                <a class="address">
                                    <br />
                                    Prince Centre Building, 5th Floor Suite 503,
                                    <br />
                                    JL. Jenderal Sudirman,
                                    <br />
                                    Kavling 3-4,Karet Jakarta Selatan
                                    <br />
                                    Daerah Khusus Ibukota Jakarta 10220
                                </a>
                            </p>
                        </div>

                        <div class="sosmed">
                            <div>
                                <div class="sosmed-title">Follow us</div>
                                <div class="icon">
                                    <div>
                                        <div class="grid grid-flow-col gap-4">
                                            <svg class="mg-svg" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M25.5038 -0.00012207H1.49625C1.10033 0.00266057 0.721461 0.152566 0.441495 0.417208C0.161529 0.681851 0.00294377 1.03998 0 1.41423V24.1077C0.00294377 24.482 0.161529 24.8401 0.441495 25.1047C0.721461 25.3694 1.10033 25.5193 1.49625 25.5221H14.4225V15.6535H10.9125V11.7933H14.4225V8.95392C14.4225 5.6573 16.5487 3.86011 19.6762 3.86011C20.7225 3.86011 21.7688 3.86011 22.815 4.00899V7.44385H20.6663C18.9675 7.44385 18.6412 8.20952 18.6412 9.32612V11.7826H22.6913L22.1625 15.6429H18.6412V25.5221H25.5038C25.8997 25.5193 26.2785 25.3694 26.5585 25.1047C26.8385 24.8401 26.9971 24.482 27 24.1077V1.41423C26.9971 1.03998 26.8385 0.681851 26.5585 0.417208C26.2785 0.152566 25.8997 0.00266057 25.5038 -0.00012207Z" fill="#545454">
                                                </path>
                                            </svg>
                                            <svg class="mg-svg" width="33" height="26" viewBox="0 0 33 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M33 3.00249C31.7854 3.52795 30.4761 3.87325 29.1195 4.03839C30.5077 3.2427 31.5803 1.9816 32.0851 0.465283C30.7758 1.21594 29.3246 1.74139 27.7945 2.04165C26.5483 0.750531 24.7973 -0.00012207 22.8098 -0.00012207C19.1028 -0.00012207 16.0741 2.88239 16.0741 6.44048C16.0741 6.95092 16.1372 7.44636 16.2476 7.91176C10.6319 7.64153 5.63145 5.07429 2.30306 1.18591C1.71941 2.13173 1.38815 3.2427 1.38815 4.41372C1.38815 6.65066 2.57122 8.63239 4.40105 9.75837C3.28107 9.75837 2.23996 9.45811 1.32505 9.00771V9.05275C1.32505 12.1755 3.65966 14.7877 6.75143 15.3732C5.7588 15.6318 4.71669 15.6678 3.70698 15.4783C4.13542 16.7582 4.97451 17.878 6.10629 18.6805C7.23807 19.483 8.60563 19.9277 10.0167 19.9522C7.62475 21.7545 4.65975 22.7286 1.60899 22.7146C1.07266 22.7146 0.536329 22.6846 0 22.6246C2.99713 24.4561 6.56214 25.5221 10.3795 25.5221C22.8098 25.5221 29.6401 15.7035 29.6401 7.19113C29.6401 6.90588 29.6401 6.63565 29.6243 6.3504C30.9493 5.44962 32.0851 4.30863 33 3.00249Z" fill="#545454">
                                                </path>
                                            </svg>
                                            <svg class="mg-svg" width="28" height="27" viewBox="0 0 28 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M13.9995 8.57581C12.6867 8.57581 11.4277 9.06876 10.4995 9.94623C9.57118 10.8237 9.04967 12.0138 9.04967 13.2547C9.04967 14.4957 9.57118 15.6858 10.4995 16.5632C11.4277 17.4407 12.6867 17.9337 13.9995 17.9337C15.3123 17.9337 16.5713 17.4407 17.4996 16.5632C18.4279 15.6858 18.9494 14.4957 18.9494 13.2547C18.9494 12.0138 18.4279 10.8237 17.4996 9.94623C16.5713 9.06876 15.3123 8.57581 13.9995 8.57581Z" fill="#545454">
                                                </path>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03457 0.415907C11.3287 -0.138798 16.6714 -0.138798 21.9655 0.415907C24.8577 0.721117 27.1895 2.87343 27.5291 5.61744C28.157 10.6918 28.157 15.818 27.5291 20.8924C27.1895 23.6364 24.8577 25.7887 21.967 26.0953C16.6724 26.6502 11.3292 26.6502 6.03457 26.0953C3.14233 25.7887 0.810565 23.6364 0.470928 20.8938C-0.156976 15.819 -0.156976 10.6923 0.470928 5.61744C0.810565 2.87343 3.14233 0.721117 6.03457 0.415907ZM21.6152 4.61687C21.2113 4.61687 20.8239 4.76855 20.5383 5.03854C20.2526 5.30853 20.0922 5.67472 20.0922 6.05654C20.0922 6.43837 20.2526 6.80456 20.5383 7.07455C20.8239 7.34454 21.2113 7.49622 21.6152 7.49622C22.0191 7.49622 22.4065 7.34454 22.6921 7.07455C22.9778 6.80456 23.1382 6.43837 23.1382 6.05654C23.1382 5.67472 22.9778 5.30853 22.6921 5.03854C22.4065 4.76855 22.0191 4.61687 21.6152 4.61687ZM6.76563 13.2549C6.76563 11.4412 7.52782 9.70185 8.88454 8.4194C10.2413 7.13694 12.0813 6.41646 14 6.41646C15.9187 6.41646 17.7588 7.13694 19.1155 8.4194C20.4722 9.70185 21.2344 11.4412 21.2344 13.2549C21.2344 15.0686 20.4722 16.808 19.1155 18.0904C17.7588 19.3729 15.9187 20.0934 14 20.0934C12.0813 20.0934 10.2413 19.3729 8.88454 18.0904C7.52782 16.808 6.76563 15.0686 6.76563 13.2549Z" fill="#545454">
                                                </path>
                                            </svg>
                                            <svg class="mg-svg" width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.82791C0 0.818183 0.887625 -0.00012207 1.98281 -0.00012207H25.0172C26.1124 -0.00012207 27 0.818183 27 1.82791V23.6941C27 24.7038 26.1124 25.5221 25.0172 25.5221H1.98281C0.887625 25.5221 0 24.7038 0 23.6941V1.82791ZM8.34131 21.3651V9.84028H4.28963V21.3651H8.34131ZM6.31631 8.26588C7.72875 8.26588 8.60794 7.38217 8.60794 6.27515C8.58262 5.1442 7.73044 4.28442 6.34331 4.28442C4.95619 4.28442 4.05 5.14579 4.05 6.27515C4.05 7.38217 4.92919 8.26588 6.28931 8.26588H6.31631ZM14.5986 21.3651V14.9288C14.5986 14.5842 14.6256 14.2397 14.7336 13.994C15.0255 13.3065 15.6921 12.5935 16.8126 12.5935C18.279 12.5935 18.8646 13.6495 18.8646 15.1999V21.3651H22.9162V14.7549C22.9162 11.2137 20.9183 9.56751 18.252 9.56751C16.1021 9.56751 15.1386 10.6841 14.5986 11.4705V11.5104H14.5716C14.5805 11.4971 14.5895 11.4838 14.5986 11.4705V9.84028H10.5486C10.5992 10.9218 10.5486 21.3651 10.5486 21.3651H14.5986Z" fill="#545454">
                                                </path>
                                            </svg>

                                        </div>
                                        <div><div class="copyright">© Copyrights 2023 PT Braincode Solution </div></div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div class="contact">
                            <div>
                                <div>
                                    <div class="contact-title">Contact Us</div>
                                </div>
                                <div class="button">
                                    <button class="a sip btn btn-sm wa">
                                        <a link href="#/./sign-up" class="inactive">Whatsapp our Sales</a></button>
                                    <button class="b btn btn-sm lok">Our Locations</button>
                                </div>
                            </div>
                        </div>
                    </footer> */}
               

               <div class="partner-title">
                        <div style="" class='our-partner'>Our Partner</div>

                        <div class="carousel w-full">
                            <For each={Atas()}>{(ats: any, i) =>
                                <div id={i.toString()} class="carousel-item relative w-full">
                                    <div class="partner1" style=" flex-wrap: wrap; width:100%; margin-left:-5vw; margin-top:-1vw; height:25vw">
                                        <For each={ats.datas}>{(c, i) =>
                                            <img src={c.img_client} />
                                        }
                                        </For>

                                    </div>
                                    {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div> */}
                                </div>
                            }
                            </For>
                            {/* <div id="slide2" class="carousel-item relative w-full">
                                <div class="partner1" style=" flex-wrap: wrap; width:100%; margin-left:-5vw; margin-top:-1vw; height:25vw">
                                    <For each={Atas()}>{(ats, i) =>
                                        <img src={ats.img_client} style="margin:3vw" />
                                    }
                                    </For>
                                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                        <a href="#slide1" class="btn btn-circle">❮</a>
                                        <a href="#slide3" class="btn btn-circle">❯</a>
                                    </div>
                                </div>
                            </div> */}
                        </div>


                        {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style="margin:5vh">
                                        <a href="#slide3" class="btn btn-circle slide">❮</a>
                                        <a href="#slide2" class="btn btn-circle slide">❯</a>
                                    </div>
                                </div>
                                <div id="slide2" class="carousel-item relative w-full">
                                    <div class='kotak'>
                                        <div class="partner1">
                                        <img src={imG()} />
                                            <a link href="#/projectdetails" class="P2 marginimg inactive"></a>
                                            <a link href="#/projectdetails" class="P3 marginimg inactive"></a>
                                            <a link href="#/projectdetails" class="P4 marginimg inactive"></a>
                                        </div>
                                        <div class="partner2">
                                            <a link href="#/projectdetails" class="P5 inactive"></a>
                                            <a link href="#/projectdetails" class="P6 inactive"></a>
                                            <a link href="#/projectdetails" class="P7 inactive"></a>
                                            <a link href="#/projectdetails" class="P8 inactive"></a>
                                        </div>
                                        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2" style="margin:5vh">
                                            <a href="#slide3" class="btn btn-circle slide">❮</a>
                                            <a href="#slide2" class="btn btn-circle slide">❯</a>
                                        </div>
                                    </div> */}


                    </div>
               

                </div>

            </div>



        </>
    );
};

export default About;