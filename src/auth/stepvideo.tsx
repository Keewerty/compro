import { createSignal, type Component, JSXElement, For, onMount, Show, createEffect } from 'solid-js';
export interface TestProps { children?: JSXElement }
import './stepvideo.css'
import { style } from 'solid-js/web';
import { addStep, getTrainingDetail, getTrainingDetailQuestions, nextValid, valid, validLast } from '../service/Service';
import { dataPreTrigger, setDataPre, setDataPreTrigger, setDataStore, setDataStoreAuth } from '../store/store';
import { useNavigate } from '@solidjs/router';
import Sertificate from './sertificate';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


const Stepvideo: Component<TestProps> = (props: any) => {

    const [detail, setDetail]: any = createSignal({
        "id": 1,
        "title": "Rust ",
        "price": 3500000,
        "kategori": "Back End Developer ",
        "img": "satu",
        "description": "Rust is an attractive and powerful programming language, with a focus on security, performance, and maintainability of code. However, using Rust can be challenging for beginners, but if you're willing to invest in learning, it can be a very useful tool in modern software development.",
        "class": "8 class",
        "id_training": 1,
        "title_detail": "Introduction to Rust",
        "step": "step 1",
        "rating": "4.5",
        "difficult": "beginner",
        "url": "test",
        "description_detail": "Rust is a programming language focused on security, performance and simplicity. This language was developed by Mozilla Research and was first released in 2010. The main goal of Rust is to address several common problems in software development, including bugs that are hard to detect, code vulnerability to security attacks, and poor performance.",
        "img_detail": "r3"
    },)
    const [detailAll, setdetailAll]: any = createSignal([{
        "id": 1,
        "title": " ",
        "price": 3500000,
        "kategori": "",
        "img": "satu",
        "description": "Rust is an attractive and powerful programming language, with a focus on security, performance, and maintainability of code. However, using Rust can be challenging for beginners, but if you're willing to invest in learning, it can be a very useful tool in modern software development.",
        "class": "8 class",
        "id_training": 1,
        "title_detail": "Introduction to Rust",
        "step": "step 1",
        "rating": "4.5",
        "difficult": "beginner",
        "url": "test",
        "description_detail": "Rust is a programming language focused on security, performance and simplicity. This language was developed by Mozilla Research and was first released in 2010. The main goal of Rust is to address several common problems in software development, including bugs that are hard to detect, code vulnerability to security attacks, and poor performance.",
        "img_detail": "r3"
    }])



    const [userData, setUserData]: any = createSignal();
    const [cekUser, setCekUser]: any = createSignal(false);
    const [cekUserLive, setCekUserLive]: any = createSignal(false);
    const [lastStep, setLastStep]: any = createSignal(false);
    const [ceklastStep, setCekLastStep]: any = createSignal(false);

    const [usernames , setUsername] = createSignal();
    const [kategori , setKategori] = createSignal();
    const [types , setTypes] = createSignal();

    onMount(() => {




        const det = localStorage.getItem('tr-detail');
        if (det !== null) {

            // valid(userData().id,evt.id_detail,'pre-test').then((data: any) => {
            // })
            // nextValid(userData().id,evt.id_detail,'pre-test').then((data: any) => {
            //     // // console.log("cek next valid", data)
            //     })

            // let res = {
            //     "id_userss":userData().id,
            //     "id_detail_training": evt.id_detail,
            //     "step_detail":"pre-test",
            //     "score":55
            //   }
            // addStep(res).then((data: any) => {
            //     // // console.log("cek add", data)
            //     })



            setDetail(JSON.parse(det))
            getTrainingDetailQuestions(detail().id_detail).then((data: any) => {
                const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type == 'quiz');
                setData(notquizTypeQuizData);

            })

            let res = localStorage.getItem('auth')
            if (res) {
                setUserData(JSON.parse(res));
                if (userData().user_type !== 'live') {
                    setCekUser(true)
                    setIsVisible(true)
                } else {
                    setCekUser(false)
                    nextValid(userData().id, detail().id_detail, 'pre-test').then((data: any) => {
                        if(data.id == detail().id_detail){
                            validLast(userData().id, data.id, 'post-test').then((data: any) => {
                                // console.log(" data[0].score >= 60 0> ",  data[0].score )
                                if(data.length === 0 ){
                                         setLastStep(false)
                                         setCekLastStep(true) 
                                console.log('setCekLastStep 1',ceklastStep())
                                }else if (data[0].score >= 60){
                                    setLastStep(false)
                                    setCekLastStep(false) 
                                }
                                else{
                                    setLastStep(false)
                                    setCekLastStep(true)
                                    // console.log('setCekLastStep 2',ceklastStep())
                                }
                            })
                        }else{
                         setLastStep(true)
                        }
                        // // console.log("cek next valid", data)
                        valid(userData().id, data.id, 'pre-test').then((data: any) => {
                            // // console.log("cek valid post", data)
                            if (data.message.toLowerCase() === 'ok') {
                                setIsVisibleLive(true)
                                setCekUserLive(true)
                                setShowBtP(true);
                            }else{
                                setIsVisibleLive(true)
                                setCekUserLive(false)
                                setShowBtP(false);
                            }
                        }
                        )
                    })

                }
            }

        } else {
            // // // // // console.log("kosong")p
        }

        const all = localStorage.getItem('all_detail');
        if (all !== null) {
            // Now TypeScript knows that authData is a string 

            setdetailAll(JSON.parse(all))
            // // console.log("ALL -> ", all)


        } else {
            // // // // // console.log("kosong")
        }
    })

    createEffect(() => {
        const all = localStorage.getItem('all_detail');
        if (all !== null) {
            // Now TypeScript knows that authData is a string 

            setdetailAll(JSON.parse(all))
            // // console.log("ALL -> ", all)
           


        } else {
            // // // // // console.log("kosong")
        }
   
    })
    const [detSel, setDetsel] = createSignal({
        "id": 1,
        "title": "Rust ",
        "price": 3500000,
        "kategori": "Back End Developer ",
        "img": "satu",
        "description": "Rust is an attractive and powerful programming language, with a focus on security, performance, and maintainability of code. However, using Rust can be challenging for beginners, but if you're willing to invest in learning, it can be a very useful tool in modern software development.",
        "class": "8 class",
        "id_training": 1,
        "title_detail": "Introduction to Rust",
        "step": "step 1",
        "rating": "4.5",
        "difficult": "beginner",
        "url": "test",
        "description_detail": "Rust is a programming language focused on security, performance and simplicity. This language was developed by Mozilla Research and was first released in 2010. The main goal of Rust is to address several common problems in software development, including bugs that are hard to detect, code vulnerability to security attacks, and poor performance.",
        "img_detail": "r3"
    })
    const detSelect = (evt: any) => {
        // // // console.log("evt cek => ", evt)
        setDetail(evt);
        setCb(true);
        getTrainingDetailQuestions(evt.id_detail).then((data: any) => {
            // // // // // console.log('qs ->' ,data)
            const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type == 'quiz');
            // setData(notquizTypeQuizData);
            setData(notquizTypeQuizData);

        })
    }

    const detSelectC = (evt: any) => {
        // // // console.log("evt cek => ", evt)

        valid(userData().id,evt.id_detail,'pre-test').then((data: any) => {
            // // console.log("cek valid", data)
            if(data.message.toLowerCase() !== 'ok'){
                openModalAlert() 
            }else{
                valid(userData().id,evt.id_detail,'post-test').then((data: any) => {
                    if(data.message.toLowerCase() !== 'ok'){
                  getTrainingDetailQuestions(evt.id_detail).then((data : any) => {
                  const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type !== 'quiz'); 
                    setData(notquizTypeQuizData);
                    // setModalOpenPre(true); 
                    
                    setDataPreTrigger(true);
                    // setDataPre(evt)
                    setDataStore('no_auth')
                    // // console.log("sampe sini 1", dataPreTrigger())
                  })
                    }
                    else{
                        setDetail(evt);
                        setCb(true);
                        getTrainingDetailQuestions(evt.id_detail).then((data: any) => {
                            // // // // // console.log('qs ->' ,data)
                            const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type == 'quiz');
                            // setData(notquizTypeQuizData);
                            setData(notquizTypeQuizData);
                
                        })
                     nextStep()
                    }
                })
            }
           
            })

        // ---------

       
    }

    const [cb, setCb]: any = createSignal(true);
    const [cq, setCq]: any = createSignal();
    const [q, setQ]: any = createSignal();
    const clickQ = (index: any, i: any, e: any) => {
        // // // // // console.log("click index -> ", index);
        // // // // // console.log("click i-> ", i);
        setQ(i);
        setCq(index);
        setData((prevData: any) => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], "index": (index), "value": (e) };
            // // // // // console.log("newData -> ", newData);
            return newData;
        });
        setCb(checkDataHasUnfilledValue(data()))
        //   // // // // console.log("cek -> ", checkDataHasUnfilledValue(data()))
    }
    const checkDataHasUnfilledValue = (data: any[]) => {
        return data.some(item => !item.hasOwnProperty('value'));
    }

    const showConditionally = (cars: string | any[]) => {
        return cars.length === 3;
    }


    const [data, setData]: any = createSignal([{ "id": 1, "detail_training_id": 1, "question": "Perusahaan apa yang berperan dalam pengembangan rust programming?", "options_choice": "[\"Mozilla Research\", \"Google Resarch\", \"Facebook Research\", \"Amazon Research\"]", "answer": "Mozilla Research" }]);


    function handleModifyData(index: any) {
        setData((prevData: any) => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], "index": (index + 1).toString() };
            // // // // // console.log("newData -> ", newData);
            return newData;
        });
    }

    const [score, setScore]: any = createSignal();
    const [qr, setQr]: any = createSignal([]);
    const cekValue = () => {
        let score = 0;
        let ps = [];
        // // // // // console.log('len cek ',data().length);
        for (const item of data()) {
            if (item.value === item.answer) {
                score += 1;
                ps.push(item)
            }
        }
        // // // // console.log("score 1 -> ",score);
        // // // // console.log("data 1 -> ",data().length);
        const scorer = (score / data().length) * 100;
        setScore(Math.round(scorer));
        setQr(ps);
        // // // // // console.log("value -> ",scorer);
        setShowBtP(true);
    }

    // -------------------------------


    const [isModalOpenPost, setModalOpenPost] = createSignal(false);
    const [isModalOpenAlert, setModalOpenAlert] = createSignal(false);
    const [isModalScore, setModalScore] = createSignal(false);
    const [dataP, setDataP]: any = createSignal([{ "id": 1, "detail_training_id": 1, "question": "Perusahaan apa yang berperan dalam pengembangan rust programming?", "options_choice": "[\"Mozilla Research\", \"Google Resarch\", \"Facebook Research\", \"Amazon Research\"]", "answer": "Mozilla Research" }]);
    const [scoreMsg, setscoreMsg]: any = createSignal('Congratulations !');
    const [nextData, setNextData]: any = createSignal([]);
    const [scoreNext, setscoreNext]: any = createSignal(false);
    const [cbP, setCbP]: any = createSignal(true);
    const [scoreP, setScoreP]: any = createSignal();
    const [qrP, setQrP]: any = createSignal([]);
    const [cqP, setCqP]: any = createSignal();
    const [qP, setQP]: any = createSignal();
    const [showBtP, setShowBtP]: any = createSignal(false);
    const [isVisible, setIsVisible] = createSignal(false);
    const [isVisibleLive, setIsVisibleLive] = createSignal(false);

    const dynamicStyle = () => ({
        display: isVisible() ? 'block' : 'none',
      });
      const dynamicStyleLive = () => ({
        display: isVisibleLive() ? 'block' : 'none',
      });

    const clickQP = (index: any, i: any, e: any) => {
        // // // // // console.log("click index -> ", index);
        // // // // // console.log("click i-> ", i);
        setQP(i);
        setCqP(index);
        setDataP((prevData: any) => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], "index": (index), "value": (e) };
            // // // // // console.log("newData -> ", newData);
            return newData;
        });
        setCbP(checkDataHasUnfilledValue(dataP()))
        //   // // // // console.log("cek -> ", checkDataHasUnfilledValue(data()))
    }

    const cekValueP = () => {
        let score = 0;
        let ps = [];
        // // // // // console.log('len cek ',data().length);
        for (const item of dataP()) {
            if (item.value === item.answer) {
                score += 1;
                ps.push(item)
            }
        }
        // // // // console.log("score 1 -> ",score);
        // // // // console.log("data 1 -> ",dataP().length);
        const scorer = (score / dataP().length) * 100;
        if (Math.round(scorer) >= 60) {
            setscoreMsg('Congratulations !')
            setscoreNext(true)
            setScoreP(Math.round(scorer));
            setQr(ps);

            openModalScore()
            if (userData().user_type === 'live') {
                let res: any = {
                    "id_userss": userData().id,
                    "id_detail_training": nextData().id_detail,
                    "step_detail": "post-test",
                    "score": Math.round(scorer)
                }
                addStep(res).then((data: any) => {
                    // // console.log("cek add post", data)
                })

                 nextValid(userData().id, detail().id_detail, 'pre-test').then((data: any) => {
                        if(data.id == detail().id_detail){
                            validLast(userData().id, data.id, 'post-test').then((data: any) => {
                                // console.log(" data[0].score >= 60 0> ",  data[0].score )
                                if(data.length === 0 ){
                                         setLastStep(false)
                                         setCekLastStep(true)
                                         
                                // console.log('setCekLastStep a1',ceklastStep())
                                }else if (data[0].score >= 60){
                                    setLastStep(false)
                                    setCekLastStep(false) 
                                }
                                else{
                                    setLastStep(false)
                                    setCekLastStep(true)
                                    // console.log('setCekLastStep a2',ceklastStep())
                                }
                            })
                        }
                    })
            } else {

            }
        } else {
            setscoreMsg('Keep striving and try again !')
            setscoreNext(false)
            setScoreP(Math.round(scorer));
            setQr(ps);

            openModalScore()
            if (userData().user_type === 'live') {
                let res: any = {
                    "id_userss": userData().id,
                    "id_detail_training": nextData().id_detail,
                    "step_detail": "post-test",
                    "score": Math.round(scorer)
                }
                addStep(res).then((data: any) => {
                    // // console.log("cek add post", data)
                })
            } else {

            }
        }

        // // // // // console.log("value -> ",scorer);
    }

    const openModalPost = () => {
        setNextData(detail());

        getTrainingDetailQuestions(detail().id_detail).then((data: any) => {

            const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type !== 'quiz');
            setDataP(notquizTypeQuizData);
            setModalOpenPost(true);

        })
    };

    const closeModalPost = () => {
        setModalOpenPost(false);
    };
    const openModalScore = () => {
        // // // // console.log("masuk")
        setModalScore(true);
    };
    const closeModalScore = () => {
        setModalScore(false);
    };
    const navigate = useNavigate();
    const nextStep = () => {
        setModalScore(false);
        nextValid(userData().id, detail().id_detail, 'pre-test').then((data: any) => {
            // // console.log("cek next valid", data)
            const targetData = detailAll().find((item: { id_detail: any; }) => item.id_detail === data.id);
            detSelect(targetData)
            setModalScore(false);
            closeModalPost()
            localStorage.setItem('next-step', JSON.stringify(detail()))
            navigate('/training')
            // valid(userData().id,data.id,'pre-test').then((data: any) => {
            //     // // console.log("cek valid post", data)
            //     if(data.message.toLowerCase() === 'ok'){
            //       setCekUser(true)
            //       setShowBtP(true);
            //     }
            // }
            // )
        })
        // const ids = detail().id_detail + 1
        // const targetData = detailAll().find((item: { id_detail: any; }) => item.id_detail === ids); 
        // detSelect(targetData)
        // setModalScore(false); 
        // closeModalPost() 
    };

    const openModalAlert = () => {
        // // // console.log("cek o")
        setModalOpenAlert(true);
    };
    const closeModalAlert = () => {
        setModalOpenAlert(false);
    };

    
    const [isModalOpenFinish, setModalOpenFinish] = createSignal(false);
    const openModalFinish = () => {
        // // // console.log("cek o")asfafasf
        setModalOpenFinish(true)
        closeModalPost()
        closeModalScore()
    };
    const closeModalFinish = () => {
        setModalOpenFinish(false);
    };


    const [htmlContent, setHtmlContent]: any = createSignal();
    const convertToPDF = () => {

        setUsername(userData().username);
        setKategori(detailAll()[0].kategori);
        setTypes(detailAll()[0].title);
        // // console.log("username -> ", usernames())
        // // console.log("kategori -> ", kategori())
        // // console.log("types -> ", types())
        setHtmlContent(`
        <div>
        <div style="    background-size: cover;
        background-image: url(../../public/sdp.png);
        width: 100%;
        height: 150vh;
        background-repeat: no-repeat;
        text-align: center;
        ">
        <div style="width: 165px;
        margin-left: 70px;
        padding-top: 77px;"><img src="../../public/logo_bc_alt-c.png" /></div>
        <div style="    padding-top: 163px;
        font-size: 20px;
        font-style: italic;
        font-weight: 500;">${kategori()} ${types()}</div>
        <div style="    font-size: 50px;
        padding-top: 10px;
        font-style: italic;">${usernames()}</div> 
        <div style="    padding-top: 15px;
        font-style: italic;
        font-weight: 500;
        font-size: 20px;">Diberikan kepada</div>
        <div style="font-style: italic;
        padding-top: 75px;
        font-weight: 500;
        font-size: 20px;">Karena telah menyelesaikan pelatihan selama waktu pelathian (1 jam)</div>
        <div style="font-size: 20px;
        font-weight: bold;
        padding-top: 18px;
        font-style: italic;">LULUS dengan predikat "SANGAT BAIK"</div>
        
        <div ><img src="../../public/ttd.png" style="    width: 210px;
        margin-left: 70vw;
        padding-top: 70px;" /></div>
        <div style="margin-left: 51vw; 
        font-size: 25px;
        font-weight: 600;">Yahya Ayyash Nasrullah</div>
        
        </div>
        
        `)
        const pdf = new jsPDF('p', 'px', [500, 500]);
        const element = document.createElement('div');
        element.innerHTML = htmlContent();
        document.body.appendChild(element);
                
        // Convert the HTML element to canvas
        html2canvas(element,{
            allowTaint: true,
            useCORS: true,
            scale: 1
        }).then(canvas => {
            const imageData = canvas.toDataURL('image/png', 1.0);
            pdf.addImage(imageData, 'PNG', 10, 10, 480, 320);
            pdf.save('converted_content.pdf');
        });

      

      
    };



    return (
        <>
        {isModalOpenFinish() && (
        <div class="modal modal-open" >
          <div class="modal-box">
            <h3 class="font-bold text-lg" style="color:green">Congratulations!</h3>
            <p class="py-4">You've completed all the questions. </p>
            <div class="modal-action">
            <button class="btn" onClick={convertToPDF}>Sertificate</button>
              <button class="btn" onClick={closeModalFinish}>Close</button>
            </div>
          </div>
        </div>
      )}
            <div style="padding:16px">

                <div class="judulcourse1">
                    <div class="sad-card w-96 bg-base-100 shadow-xl namajudul1">
                        <h1 class="managementext">{detail().kategori} ( {detail().title} ) - <span style="    color: #e08e13;text-transform: capitalize;">{detail().step}</span></h1>
                    </div>
                </div>
                <div class="dropdown">
                    <label tabindex="0" class=" bg-base-100 shadow-xl namajudul2">
                        <h1 class="managementext">{detail().kategori} ( {detail().title} ) - <span style="color: #e08e13;text-transform: capitalize;">{detail().step} v</span></h1>
                    </label>
                    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52" style="margin-top:18px;width:50%">
                        <li>                            <For each={detailAll()}>{(det, i) => (
                            <>
                                <Show
                                    when={det.id_detail == detail().id_detail}
                                    fallback={
                                        <div onClick={() => detSelect(det)}  >
                                            <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer;
        margin: 2% !important;
        border-radius: 0;
        margin-top: 10px !important;    font-family: 'pm';">
                                                <div class="card-body" style="  cursor:pointer;   padding: 10px !important;">
                                                    <h2 class="card-title" style="    margin-top: -8px !important;
        margin-bottom: -7px !IMPORTANT;
        color: #000000;
        border-bottom: 1px solid #dddddd;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 200;">{det.step}</h2>
                                                    <p style="font-size: 13px;
        color: #777777;"><span style="color: #3f3fff;
        font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                >
                                    <div onClick={() => detSelect(det)}  >
                                        <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer
    margin: 2% !important;
    border-radius: 0;
    margin-top: 10px !important;    font-family: 'pm';">
                                            <div class="card-body" style=" cursor:pointer;   padding: 10px !important;    background: #94949480;">
                                                <h2 class="card-title" style="    margin-top: -8px !important;
    margin-bottom: -7px !IMPORTANT;
    color: #000000;
    border-bottom: 1px solid #dddddd;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 200;">{det.step}</h2>
                                                <p style="font-size: 13px;
    color: #000000;"><span style="color: #3f3fff;
    font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                            </div>
                                        </div>
                                    </div>
                                </Show>


                            </>
                        )
                        }</For></li>
                    </ul>
                </div>
            </div>
            <div class="crcontent1" style="display: flex; width:100%;">
                <div class="placecrvideo">
                    <div class="crvideo">
                        <div class="crvideo2">
                            <iframe src={detail().url} width="100%" height="500px" style="border-radius: 7px;" allow="autoplay"></iframe>
                        </div>
                    </div>
                </div>
{/* ------------------------step 3 -------------------------------- */}
                <div style="" class="step3">
                    <div class="sad-card w-96 bg-base-100 shadow-xl" style=" width: auto;
background: #f8f8f8;border">
                        <div style="  align-items: center;
    justify-content: center;
    display: flex;
    height: 70px;
    text-align: center;
    background: #111648;
    color: #ffffff;
    border-top-right-radius: 7px;
    border-top-left-radius: 7px;
    --un-shadow: var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgba(0,0,0,0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgba(0,0,0,0.1));
    box-shadow: var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);">
                            <h1 class="card-title optiontrainingtext ">Training Option List</h1>
                            {/* <div class="logobc2"></div> */}
                        </div>
                    </div>
                    <div style="   width: auto;
    height: 429px;
    background: white;
    margin-top: 0.1vw;
    position: relative;
    overflow: auto;">
                        <div>
                            <For each={detailAll()}>{(det, i) => (
                                <>
                                    <Show
                                        when={det.id_detail == detail().id_detail}
                                        fallback={
                                         
                                            <span>
                                                <div style={dynamicStyle()}>
                                                <Show when={cekUser()}
                                                    fallback={
                                                        <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer;
        margin: 2% !important;
        border-radius: 0;
        margin-top: 10px !important;    font-family: 'pm';">
                                                            <div class="card-body" style="  cursor:pointer;   padding: 10px !important;" onClick={openModalAlert}>
                                                                <h2 class="card-title" style="    margin-top: -8px !important;
        margin-bottom: -7px !IMPORTANT;
        color: #000000;
        border-bottom: 1px solid #dddddd;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 200;">{det.step}</h2>
                                                                <p style="font-size: 13px;
        color: #777777;"><span style="color: #3f3fff;
        font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                                            </div>
                                                        </div>
                                                    }>
                                                    <div onClick={() => detSelect(det)}  >
                                                        <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer;
        margin: 2% !important;
        border-radius: 0;
        margin-top: 10px !important;    font-family: 'pm';">
                                                            <div class="card-body" style="  cursor:pointer;   padding: 10px !important;">
                                                                <h2 class="card-title" style="    margin-top: -8px !important;
        margin-bottom: -7px !IMPORTANT;
        color: #000000;
        border-bottom: 1px solid #dddddd;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 200;">{det.step}</h2>
                                                                <p style="font-size: 13px;
        color: #777777;"><span style="color: #3f3fff;
        font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Show>
                                                </div>
                                                <div style={dynamicStyleLive()}>
                                                 <Show when={cekUserLive()} fallback={ <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer;
        margin: 2% !important;
        border-radius: 0;
        margin-top: 10px !important;    font-family: 'pm';">
                                                            <div class="card-body" style="  cursor:pointer;   padding: 10px !important;" onClick={openModalAlert}>
                                                                <h2 class="card-title" style="    margin-top: -8px !important;
        margin-bottom: -7px !IMPORTANT;
        color: #000000;
        border-bottom: 1px solid #dddddd;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 200;">{det.step}</h2>
                                                                <p style="font-size: 13px;
        color: #777777;"><span style="color: #3f3fff;
        font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                                            </div>
                                                        </div>} >
                                                        {/* <div onClick={() => detSelectC(det)}  >  */}
                                                        <div onClick={openModalAlert}  > 
                                                        <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer;
        margin: 2% !important;
        border-radius: 0;
        margin-top: 10px !important;    font-family: 'pm';">
                                                            <div class="card-body" style="  cursor:pointer;   padding: 10px !important;">
                                                                <h2 class="card-title" style="    margin-top: -8px !important;
        margin-bottom: -7px !IMPORTANT;
        color: #000000;
        border-bottom: 1px solid #dddddd;
        text-transform: capitalize;
        font-size: 14px;
        font-weight: 200;">{det.step}</h2>
                                                                <p style="font-size: 13px;
        color: #777777;"><span style="color: #3f3fff;
        font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                 </Show>
                                                 </div>
                                                 </span>
                                           


                                        }
                                    >
                                        <div onClick={() => detSelect(det)}  >
                                            <div class="card w-96 bg-base-100 shadow-xl" style="width: 96% !important;cursor:pointer
    margin: 2% !important;
    border-radius: 0;
    margin-top: 10px !important;    font-family: 'pm';">
                                                <div class="card-body" style=" cursor:pointer;   padding: 10px !important;    background: #94949480;">
                                                    <h2 class="card-title" style="    margin-top: -8px !important;
    margin-bottom: -7px !IMPORTANT;
    color: #000000;
    border-bottom: 1px solid #dddddd;
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 200;">{det.step}</h2>
                                                    <p style="font-size: 13px;
    color: #000000;"><span style="color: #3f3fff;
    font-weight: 500;">{det.title}</span> - {det.title_detail} </p>
                                                </div>
                                            </div>
                                        </div>
                                    </Show>


                                </>
                            )
                            }</For>


                        </div>

                    </div>
                </div>
                
            </div>
            <div class="bowlss">
                <div class="crread1">
                    <div class="crreadcontent1">
                        <div style="font-size: 20px;
    margin-bottom: 18px;">Description ({detail().title})</div>
                        <div style="font-family: 'pr';width: 90%;">
                            {detail().description}
                        </div>
                    </div>
                    <div class="crreadcontent1">
                        <div style=" margin-bottom: 18px;font-size: 20px"> {detail().title_detail}</div>
                        <div style="font-family: 'pr';margin-top:12pxwidth: 90%;"> {detail().description_detail}</div>
                    </div>
                </div>
                <div style="font-size: 20px; margin-bottom: 18px;    padding-top: 20px;  padding-left: 20px;">Quiz</div>
                <div style="    padding-top: 13px; padding-left: 20px;">
                    {data().map((a: any, index: any) => {

                        // // // // // console.log("AAA", a)
                        return (<>
                            <div style="padding-bottom: 10px;padding-top:10px"><span>{index + 1}. </span>{a.question}</div>

                            {JSON.parse(a.options_choice).map((e: any, i: any) => {
                                const firstLetter = String.fromCharCode(65 + i);
                                setCq(e)
                                // // // // // console.log("iiii -> ", data()[index].q.length)
                                return (<>
                                    <Show
                                        when={a.index == index && e == a.value}
                                        fallback={
                                            (<>
                                                <div style="font-family: 'pr'; font-size: 15px;cursor:pointer" onClick={() => clickQ(index, i, e)}><span style="font-family: 'pm'; ">{firstLetter}.</span> {e}</div>
                                            </>)
                                        } >
                                        <div style="font-family: 'pm';
    font-size: 15px;
    cursor: pointer;
    color: green;" onClick={() => clickQ(index, i, e)}><span style=" font-family: 'pm';
    background: green;
    color: white;
    border-radius: 22px;
    height: 22px !important;
    display: inline-block;
    width: 22px;
    padding-left: 5px; ">{firstLetter}</span> {e}</div>


                                    </Show>
                                </>)

                            })}



                        </>
                        )
                    }
                    )}



                    <input type="checkbox" id="my_modal_7" class="modal-toggle" />
                    <div class="modal" style="margin-top:70px;">
                        <div class="modal-box">
                            <label style="justify-content: end;
    align-items: end;
    align-self: end;
    display: flex;margin-bottom: -25px;
    font-size: 15px;"><label for="my_modal_7" style="background: #fe5b5b;
    height: 25px;
    color: white;
    width: 25px;
    border-radius: 16px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: grid;">x</label></label>
                            <h3 class="text-lg font-bold" style="color: #33ca46;">Congratulations !</h3>
                            <p class="py-4">You have answered the quiz </p>
                            <div style="text-align: center;
    font-size: 20px;
    color: #939393;">Score</div>
                            <div style="text-align: center;
    font-size: 100px;">{score()}</div>
                            <div style="font-size: 13px;
    margin-bottom: 3px;">The correct quiz and answer is :</div>
                            {data().map((a: any, index: any) => {
                                return (
                                    <>

                                        <div style="font-size: 12px;">{index + 1} . {a.question}</div>
                                        <div style="font-size: 12px;">Answer : <span style="font-size: 12px; 
    color: #2bb815;">{a.answer}</span></div>
                                    </>
                                )
                            })}
                        </div>

                    </div>

                    <Show
                        when={cb()}
                        fallback={
                            <>
                                <label for="my_modal_7" class="btn" style="    background: #392863;  color: white; font-family: 'pr';    margin-top: 40px;
    margin-bottom: 40px;" onClick={cekValue}>Submit Quiz</label>

                                <Show
                                    when={showBtP()}>  <label class="btn" style="    background: #392863;  color: white; font-family: 'pr';    margin-top: 40px;
    margin-bottom: 40px;" onClick={openModalPost}>POST QUESTION</label>
                                </Show>
                            </>
                        }
                    >
                        <button class="btn" disabled style="background: #dfdfdf; color: #747474;    margin-top: 40px;
    margin-bottom: 40px;">Submit Quiz</button>

                    </Show>
                    <Show when={cekUser()} >
                        <button style="    background: #e08e13; border: none; color: white; margin-left: 10px;" class="btn btn-primary" onClick={nextStep}>
                            Next
                        </button>
                    </Show>

                    <Show when={cekUserLive()} >
                    <Show when={lastStep()} fallback={
                          <Show when={!ceklastStep()} >
                          <button style="    background: #13e04c; border: none; color: white; margin-left: 10px;" class="btn btn-primary" onClick={openModalFinish}>
                                                 Complete
                                             </button>
                                                             </Show>
                    } >
                          <button style="    background: #e08e13; border: none; color: white; margin-left: 10px;" class="btn btn-primary" onClick={nextStep}>
                            Next 
                        </button>

                        </Show>
                      
                    </Show>




                </div>
            </div>







            {/* ------------------------------- */}



            {isModalOpenPost() && (

                <>
                    {isModalScore() && (

                        <div class="modal modal-open" style="    z-index: 99999999999 !important; display: flex;">

                            <div class="modal-box">
                                <div  >
                                    <label style="justify-content: end;
align-items: end;
align-self: end;
display: flex;margin-bottom: -25px;
font-size: 15px;"><label onclick={closeModalScore} style="background: #fe5b5b;
height: 25px;
color: white;
width: 25px;
border-radius: 16px;
cursor: pointer;
justify-content: center;
align-items: center;
display: grid;">x</label></label>
                                    <Show when={scoreNext()} fallback={
                                        (<>
                                            <h3 class="text-lg font-bold" style=" color:  #ff2626;">{scoreMsg}</h3> </>)
                                    } >
                                        <h3 class="text-lg font-bold" style="color:#33ca46;">{scoreMsg}</h3>
                                    </Show>

                                    <p class="py-4">You have answered the question </p>
                                    <div style="text-align: center;
font-size: 20px;
color: #939393;">Score</div>
                                    <div style="text-align: center; 
font-size: 100px;">{scoreP()}</div>


                                    <Show when={scoreNext()} fallback={
                                        (<>  <div style="text-align: center;">
                                            <button onclick={closeModalScore} class="btn" style="background: #ff2626; color: #ffffff;    margin-top: 20px; ">Try Again</button> </div>  </>)
                                    } >

<Show when={lastStep()} fallback={
                                      <Show when={!ceklastStep()} >
                                        <div style="text-align: center;">
   <button style="    background: #13e04c; border: none; color: white; margin-left: 10px;" class="btn btn-primary" onClick={openModalFinish}>
                          Complete
                      </button>
                      </div>
                                      </Show>
                       
                    } >
                                 <div style="text-align: center;"> <button class="btn" style="    background: #00c437;
color: #ffffff;    margin-top: 20px; " onclick={nextStep} >Next step</button></div>

                        </Show>
                                
                                    </Show>

                                </div>

                            </div>
                        </div>
                    )}

                    <div class="modal modal-open">
                        <div class="modal-box" style="       max-width: 100%;
background: #ffffffed;
margin-top: 5vw;
backdrop-filter: blur(10px) !important;">
                            <div style="font-size: 20px; margin-bottom: 18px;    padding-top: 20px;  padding-left: 20px;font-weight: bold;">Question Post Test</div>
                            <div style="    padding-top: 13px; padding-left: 20px;">
                                {dataP().map((a: any, index: any) => {

                                    // // // // // console.log("AAA", a)
                                    return (<>
                                        <div style="padding-bottom: 10px;padding-top:10px"><span>{index + 1}. </span>{a.question}</div>

                                        {JSON.parse(a.options_choice).map((e: any, i: any) => {
                                            const firstLetter = String.fromCharCode(65 + i);
                                            setCq(e)
                                            return (<>
                                                <Show
                                                    when={a.index == index && e == a.value}
                                                    fallback={
                                                        (<>
                                                            <div style="font-family: 'pr'; font-size: 15px;cursor:pointer" onClick={() => clickQP(index, i, e)}><span style="font-family: 'pm'; ">{firstLetter}.</span> {e}</div>
                                                        </>)
                                                    } >
                                                    <div style="font-family: 'pm';
font-size: 15px;
cursor: pointer;
color: green;" onClick={() => clickQP(index, i, e)}><span style=" font-family: 'pm';
background: green;
color: white;
border-radius: 22px;
height: 22px !important;
display: inline-block;
width: 22px;
padding-left: 5px; ">{firstLetter}</span> {e}</div>


                                                </Show>
                                            </>)

                                        })}



                                    </>
                                    )
                                }
                                )}

                                <Show
                                    when={cbP()}
                                    fallback={

                                        <label for="my_modal_9" class="btn" style="    background: #392863;  color: white; font-family: 'pr';    margin-top: 40px;
margin-bottom: 40px;" onClick={cekValueP}>Submit Question</label>
                                    }
                                >
                                    <button class="btn" disabled style="background: #dfdfdf; color: #747474;    margin-top: 40px;
margin-bottom: 40px;">Submit Question</button>
                                    {/* <button onclick={openModalScore}>cek</button> */}

                                </Show>
                            </div>
                            <div style="text-align: end;">
                                <Show when={cekUser()} >
                                    <button style="    background: #e08e13; border: none; color: white; margin-right: 10px;" class="btn btn-primary" onClick={nextStep}>
                                        Next
                                    </button>
                                </Show>
                                <Show when={cekUserLive()} >
                                <Show when={lastStep()} fallback={
                                      <Show when={!ceklastStep()} >
   <button style="    background: #13e04c; border: none; color: white; margin-left: 10px;" class="btn btn-primary" onClick={openModalFinish}>
                          Complete
                      </button>
                                      </Show>
                       
                    } >
                          <button style="    background: #e08e13; border: none; color: white; margin-left: 10px;" class="btn btn-primary" onClick={nextStep}>
                            Next 
                        </button>

                        </Show>
                                </Show>
                                <button class="btn btn-primary" style="margin-left: 10px;" onClick={closeModalPost}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </>)}

            {isModalOpenAlert() && (
                <div class="modal modal-open" >
                    <div class="modal-box">
                        <h3 class="font-bold text-lg" style="color:red">Attention !</h3>
                        <p class="py-4">Please use the 'Next' button below once you've completed the POST QUESTION.</p>
                        <div class="modal-action">
                            <button class="btn" onClick={closeModalAlert}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    );
};

export default Stepvideo;