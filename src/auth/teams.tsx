import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './teams.css'
import { getKaryawan, getPetinggi } from '../service/Service';


const Teams: Component<TestProps> = (props: any) => {

   
    const [Ptinggi, setPtinggi] = createSignal([
        { id: '1', name: '', position: '', img_teams: "", quotes: "Product Manager" },
        { id: '2', name: '', position: '', img_teams: "", quotes: "Product Manager" },
        { id: '3', name: '', position: '', img_teams: "", quotes: "Product Manager" },
    ]);

    const [Karyawan, setKaryawan] = createSignal([
        { id: '1', name: '', position: '', img_teams: "", quotes: "Product Manager" },
        { id: '2', name: '', position: '', img_teams: "", quotes: "Product Manager" },
        { id: '3', name: '', position: '', img_teams: "", quotes: "Product Manager" },
        { id: '4', name: '', position: '', img_teams: "", quotes: "Product Manager" },
        { id: '5', name: '', position: '', img_teams: "", qootes: "Product Manager" },
    ]);
    // const [Petinggi, setPetinggi] = createSignal([{
    //     "ID": 1,
    //     "id_user": 1,
    //     "quotes": "",
    //     "img_teams": "",
    //     "name": "",
    //     "position": "",
    //     "link": "",
    //     "created_time": "2022-05-31",
    //     "updated_time": "2022-05-31"
    // }])


    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);


    // let dataPetinggi;






    // const [store ,setStore] = Store


    onMount(() => {

        // let data12: any[];
        getPetinggi().then((data: any) => {
          
                localStorage.setItem('tm', JSON.stringify(data))
              
            //   data12 = data;
            //   // // // // console.log('ini data agenda',data12)
            var data_filter = data.filter((element: { position: string; }) => element.position == "CTO Braincode Solution" || element.position == "CEO Braincode Solution" || element.position == "Business Solution")
            // // // // console.log(data_filter)
            setPtinggi(data_filter)
            var data_karyawan = data.filter((element: { position: string; }) => element.position !== "CTO Braincode Solution" && element.position !== "CEO Braincode Solution" && element.position !== "Business Solution")
            // // // // console.log(data_filter)
            setKaryawan(data_karyawan)
        })

        const ds = localStorage.getItem('tm')
        if (ds !== null) {
           let data =JSON.parse(ds);
           var data_filter = data.filter((element: { position: string; }) => element.position == "CTO Braincode Solution" || element.position == "CEO Braincode Solution" || element.position == "Business Solution")
           // // // // console.log(data_filter)
           setPtinggi(data_filter)
           var data_karyawan = data.filter((element: { position: string; }) => element.position !== "CTO Braincode Solution" && element.position !== "CEO Braincode Solution" && element.position !== "Business Solution")
           // // // // console.log(data_filter)
           setKaryawan(data_karyawan)
        }

    })

    // onMount(() => {

    //     // let data12: any[];
    //     getKaryawan().then((data :any) => {
    //     //   data12 = data;
    //     //   // // // // console.log('ini data agenda',data12)
    //     var data_filter = data.filter( (element: { position: string; }) => element.position =="CTO Braincode Solution" || element.position =="CEO Braincode Solution"  || element.position == "Business Solution" )
    //     // // // // console.log(data_filter)
    //     setKaryawan(data_filter)
    //        })

    //     })




    return (
        <>
           
            <div class="tms123-content1">
                <div class="tms123-teamlist">
                    <h1 class="tms123-meet">Meet our teams</h1>



                    <div class="tms123-tlist">
                    <div class="tms123-listteam1" >

<For each={Ptinggi()}>{(petinggii, i) =>
    <div class="body card bg-base-100 shadow-xl">

        <h2 style="text-align: center;font-size: 1.1vw;" class="tms123-card-task"></h2>
        {/* <div style={`background-image: url(${petinggii.img_teams})`} class='pakherjuno' /> */}
        <div class="tms123-listeamjudul" style=""><img src={petinggii.img_teams} style="width:137px; height:137px;border-radius:100px;object-fit:cover"/></div>
        <h2 class="tms123-cardname ">{petinggii.name}</h2>
        <h2 class="tms123-jobdesk">{[petinggii.position]}</h2>
        <a><svg style="display:flex; flex-direction:column; width:100%;" xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vh" viewBox="0 0 256 256" class='iconin'>
            <path fill="#0A66C2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path>
        </svg>
        </a>
    </div>
}
</For>
</div>

<div class="tms123-listteam2" >
        <For each={Karyawan()}>{(Karyawan, i) =>
            <div class="body card bg-base-100 shadow-xl">
                <h2 style="text-align: center;font-size: 1.1vw;" class="card-task"></h2>
                {/* <div style={`background-image: url(${Karyawan.img_teams})`} class='amirul' /> */}
                <div class="tms123-listeamjudul"><img src={Karyawan.img_teams} style="width:137px; height:137px;border-radius:100px;object-fit:cover"/></div>
                <h2 class="tms123-cardname ">{Karyawan.name}</h2>
                <h2 class="tms123-jobdesk">{Karyawan.position}</h2>
                <a><svg style="display:flex; flex-direction:column; width:100%;" xmlns="http://www.w3.org/2000/svg" width="2vw" height="2vh" viewBox="0 0 256 256" class='iconin'>
                    <path fill="#0A66C2" d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4c-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009c-.002-12.157 9.851-22.014 22.008-22.016c12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"></path>
                </svg>
                </a>
            </div>

        }
        </For>
</div>
                    </div>
                </div>


                <div style="width: 40%" class="tms123-placeholderteam">
                    <div style="width: 100%;" class="tms123-sih">
                    </div>
                </div>

            </div>


            <h1 class="tms123-see"> See What We’ve Done!</h1>
            <div>
                <div style="display: block">
                    <img class="tms123-case-img" />
                    <div style="display: flex;" class="tms123-case">
                        <div class="tms123-btnslct2">
                        <a href="" class="tms123-case-button btn btn-circle">❮</a>
                        <a href="" class="tms123-case-button btn btn-circle">❯</a>
                        </div>
                        <div class="tms123-contenttxt1">
                            <div class="tms123-case-judul">
                                <h2>Case Study : INAP</h2>
                            </div>
                            <div class="tms123-case-task">
                                <h2>is a Fault Management (FM Umbrella) system. Supervision of alarm detection, automation of Trouble Ticket creation and reporting in statistical visualization</h2>
                            </div>
                        </div>
                        <div class="tms123-logo3">
                            <div class="tms123-case-logo1"></div>
                            <div class="tms123-case-logo2"></div>
                        </div>
                    </div>
                </div>

            </div>
            {/* <footer class="footer p-10 bg-neutral text-neutral-content">
                <div class="company">
                    <p>
                        <a class="company-title">PT. Braincode Solution</a>
                        <a class="cb">
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
        </>
    );
};

export default Teams;