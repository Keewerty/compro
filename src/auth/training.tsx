import { createSignal, type Component, JSXElement, For, createEffect, Show, onCleanup } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './training.css'
import { addStep, getClient, getTraining, getTrainingDetail, getTrainingDetailQuestions, input_client, nextValid, valid } from '../service/Service';

import gambar34 from '../assets/3wong.png'
import { dataPre, dataPreTrigger, dataStore, setDataStore, setDataStoreAuth } from '../store/store';



const Training: Component<TestProps> = (props: any) => {
    const [inputValue, setInputValue] = createSignal("");

    const [imG, setImG]: any = createSignal();
    const hasil1 = async () => {


        // // // // // console.log("img ->", inputValue());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // // // console.log(todayDate);

        input_client({
            id_user: 6,
            tittle: "Test",
            img_client: base64Data(),
        }).then((data: any) => {
            // // // // // console.log("detail account->", data);
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
    // //         // // // // // console.log('base64:', srcData)
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


    const [loginVer, setLoginVer]: any = createSignal(false);
    const [preVer, setPreVer]: any = createSignal(false);
    
const [userData, setUserData] : any = createSignal('');
const [cekUser, setCekUser] : any = createSignal(false);
    onMount(() => {
        // // // console.log("sessionStorage.getItem('token') -> ", sessionStorage.getItem('token'))
        // // // console.log("olgibad -> ", loginVer())

      

        let res =  localStorage.getItem('auth')
        if(res){
           setUserData(JSON.parse(res));
           if(userData().user_type !== 'live'){
            setCekUser(true)
                            }else{
            setCekUser(false)
                            }
           // // console.log(userData())

           let next_step =  localStorage.getItem('next-step')
           if(next_step){
                  // console.log("next_step -> ", next_step)
               openModalPre(JSON.parse(next_step))
           }

        }
           });


    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);

    const [base64Data, setBase64Data] = createSignal('');
    const [training, setTraining]: any = createSignal();
    const [trainingSelect, setTrainingSelect]: any = createSignal(
        {
            "id": 1,
            "title": "Rust ",
            "price": 3500000,
            "kategori": "Back End Developer ",
            "img": "satu",
            "description": "Rust is an attractive and powerful programming language, with a focus on security, performance, and maintainability of code. However, using Rust can be challenging for beginners, but if you're willing to invest in learning, it can be a very useful tool in modern software development.",
            "class": "8 class"
        }
    );
    const [detail, setDetail]: any = createSignal({
        "id": 1,
        'gambar_to': 'ngehack.png',
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
        "description_detail": "Rust is a programming language focused on security, performance and simplicity. This language was developed by Mozilla Research and was first released in 2010. The main goal of Rust is to address several common problems in software development, including bugs that are hard to detect, code vulnerability to security attacks, and poor performance."
    },);

    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        // // // // // console.log("cek upload file", file)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result: any = reader.result;
                // // // // // console.log("result base64 -> ", result)
                setBase64Data(result);
            };
            reader.readAsDataURL(file);
        }
    }


    const selectTrain = (evt: any) => {
        // // // // // console.log("Train -> ",evt)
        setTrainingSelect(evt)

        getTrainingDetail(evt.id).then((data: any) => {
            // // // // // console.log('training ->', data);
            localStorage.setItem('all_detail', JSON.stringify(data))
            setDetail(data);
            // gridRefDokumen.api.setColumnDefs(konsultasi);

        })
    }


    createEffect(() => {
        // console.log("PRE TRIGGER 1",dataPreTrigger())
        // console.log("PRE DATA TRIGGER 1",dataPre())
        getTraining().then((data: any) => {
            // // // // // console.log('training ->', data);
            setTraining(data)
            setTrainingSelect(data[0])
            getTrainingDetail(data[0].id).then((data: any) => {
                // // // // // console.log('training ->', data);
                localStorage.setItem('all_detail', JSON.stringify(data))
                setDetail(data);
                // gridRefDokumen.api.setColumnDefs(konsultasi);

            })

            // // // // // console.log('training!!! ->', trainingSelect());
            // gridRefDokumen.api.setColumnDefs(konsultasi);

        })
    })

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


    const [dumi, setDumi] = createSignal([
        { nama: 'IT Project Managemen', nama2: 'adib', harga: 'IDR 3,500.000', cover_img: "austin.jpg" },
        { nama: 'Risk Management for Fintech', nama2: 'adib', harga: 'IDR 3,500.000', cover_img: "nubelson.jpg" },
        { nama: 'IT Project Managemen', nama2: 'adib', harga: 'IDR 3,500.000', cover_img: "annie.jpg" },
        { nama: 'IT Project Managemen', nama2: 'adib', harga: 'IDR 3,500.000', cover_img: "austin.jpg" },
        { nama: 'Risk Management for Fintech', nama2: 'adib', harga: 'IDR 3,500.000', cover_img: "nubelson.jpg" },
        { nama: 'IT Project Managemen', nama2: 'adib', harga: 'IDR 3,500.000', cover_img: "annie.jpg" },




    ]);

    const [rafli, setrafli] = createSignal([
        { gambar_to: 'ngehack.png', step: 'Step 1', nama: 'Lorem Ipsum', bintang: '4.75', tittle: 'Beginer' },
        { gambar_to: 'ngehack.png', step: 'Step 2', nama: 'Lorem Ipsum', bintang: '4.75', tittle: 'Beginer' },
        { gambar_to: 'ngehack.png', step: 'Step 3', nama: 'Lorem Ipsum', bintang: '4.75', tittle: 'Beginer' },
        { gambar_to: 'ngehack.png', step: 'Step 4', nama: 'Lorem Ipsum', bintang: '4.75', tittle: 'Beginer' },

    ])

    const navigate = useNavigate();
    const videoUrl = (evt: any) => {
        // // // console.log('masuk')
        localStorage.setItem('tr-detail', JSON.stringify(evt))
        navigate('/stepvideo')
    }

    const [isModalOpen, setModalOpen] = createSignal(false);
    const handleLinkClick = () => {
        // // // console.log('asas')
        setDataStoreAuth('1')
        setModalOpen(true);
       
    }

    // const data = dataStore();

    onMount(() => {
        // // console.log("INI COBA MONMOUNT ",dataStore() )
    })
    createEffect(() => {
        if(dataStore() == 'accepted'){
            if (sessionStorage.getItem('token') !== null) {
    // // // console.log("INI COBA MAS 1",dataStore() )
                setLoginVer(true)
                setDataStore('accepted')
                let res =  localStorage.getItem('auth')
                if(res){
                   setUserData(JSON.parse(res));
                   if(userData().user_type !== 'live'){
                    setCekUser(true)
                                    }else{
                    setCekUser(false)
                                    }
                   // // console.log(userData())
        
                }


               
               
            }
            // // // console.log("INI COBA MAS 1",dataStore() )
        }else{
            setLoginVer(false)
            // setDataStore('denied')
            // // // console.log("INI COBA MAS 2 ",dataStore() )
        }

        // console.log("PRE TRIGGER 1",dataPreTrigger())
        // console.log("PRE DATA TRIGGER 1",dataPre())
        if(dataPreTrigger()){
            // console.log("PRE TRIGGER 2",dataPreTrigger())
            // console.log("PRE DATA TRIGGER 2",dataPre())

            valid(userData().id,dataPre().id_detail,'pre-test').then((data: any) => {
                // console.log("cek valid", data)
                if(data.message.toLowerCase() !== 'ok'){
                    openModalAlert()
                   
                }else{
                    valid(userData().id,dataPre().id_detail,'post-test').then((data: any) => {
                        if(data.message.toLowerCase() !== 'ok'){
         getTrainingDetailQuestions(dataPre().id_detail).then((data : any) => {
                      const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type !== 'quiz'); 
                        setData(notquizTypeQuizData);
                        setModalOpenPre(true);
                      
                      })
                        }
                        else{
                         nextStep()
                        }
                    })
                }
               
                })
        }
       
       
    })

    onCleanup(() => {
        dataStore()
        // // // // console.log("INI COBA MASaa ",dataStore() )
      });

      const [data, setData]: any = createSignal([{"id":1,"detail_training_id":1,"question":"Perusahaan apa yang berperan dalam pengembangan rust programming?","options_choice":"[\"Mozilla Research\", \"Google Resarch\", \"Facebook Research\", \"Amazon Research\"]","answer":"Mozilla Research"}]);

    const [isModalOpenPre, setModalOpenPre] = createSignal(false);
     const [isModalScore, setModalScore] = createSignal(false);
    const [cb, setCb]: any = createSignal(true);
    const [score,setScore] : any = createSignal();
    const [qr,setQr] : any = createSignal([]);
    const [cq, setCq]: any = createSignal();
    const [q, setQ]: any = createSignal();
    const [scoreNext, setscoreNext]: any = createSignal(false); 
    const [scoreMsg, setscoreMsg]: any = createSignal('Congratulations !');
    const [nextData, setNextData]: any = createSignal([]); 
    const [isModalOpenAlert, setModalOpenAlert] = createSignal(false);
    const openModalAlert = () => { 
        // // console.log("cek o")
        setModalOpenAlert(true); 
      };
      const closeModalAlert = () => {
        setModalOpenAlert(false); 
      };

    const checkDataHasUnfilledValue = (data: any[]) => {
        return data.some(item => !item.hasOwnProperty('value'));
      }
    const cekValue = () => {
        let score = 0;
        let ps = [];
        // // // // console.log('len cek ',data().length);
        for (const item of data()) {
            if (item.value === item.answer) {
              score += 1;
          ps.push(item)
            }
          }
          // // // console.log("score 1 -> ",score);
          // // // console.log("data 1 -> ",data().length);
        const scorer = (score / data().length) * 100; 
        if(Math.round(scorer) >= 60){
            setscoreMsg('Congratulations !')
            setscoreNext(true)
            setScore( Math.round(scorer));
            setQr(ps); 
    
            openModalScore()
            if(userData().user_type === 'live'){
                let res :any = {
                    "id_userss":userData().id,
                    "id_detail_training": nextData().id_detail,
                    "step_detail":"pre-test",
                    "score":Math.round(scorer)
                  }
                addStep(res).then((data: any) => {
                    // console.log("cek add", data)
                    })
            }else{

            }
            
        }else{
            setscoreMsg("Keep striving !")
            setscoreNext(false)
            setScore( Math.round(scorer));
            setQr(ps); 
    
            openModalScore()
            if(userData().user_type === 'live'){
                let res :any = {
                    "id_userss":userData().id,
                    "id_detail_training": nextData().id_detail,
                    "step_detail":"pre-test",
                    "score":Math.round(scorer)
                  }
                addStep(res).then((data: any) => {
                    // console.log("cek add", data)
                    })
            }else{

            }
        }
      
        // // // // console.log("value -> ",scorer);
    }
    const clickQ = (index: any, i: any, e : any) => {
        // // // // console.log("click index -> ", index);
        // // // // console.log("click i-> ", i);
        setQ(i);
        setCq(index);
        setData((prevData: any) => {
            const newData = [...prevData];
            newData[index] = { ...newData[index], "index": (index) , "value" : (e) };
            // // // // console.log("newData -> ", newData);
            return newData;
          });
          setCb(checkDataHasUnfilledValue(data()))
        //   // // // console.log("cek -> ", checkDataHasUnfilledValue(data()))
    }
      const openModalPre = (evt : any ) => {
        setNextData(evt);
        // console.log('aa1',evt)
        let res =  localStorage.getItem('auth')
        if(res){
           setUserData(JSON.parse(res));
           if(userData().user_type !== 'live'){
            setCekUser(true)
            getTrainingDetailQuestions(Number(evt.id_detail)).then((data : any) => {
                const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type !== 'quiz'); 
                  setData(notquizTypeQuizData);
                  setModalOpenPre(true);
                  localStorage.removeItem('next-step')
                
                })
                            }else{
                                valid(userData().id,Number(evt.id_detail),'pre-test').then((data: any) => {
                                    // console.log("cek valid", data)
                                    if(data.message.toLowerCase() !== 'ok'){
                                        openModalAlert()
                                       
                                    }else{
                                        valid(userData().id,Number(evt.id_detail),'post-test').then((data: any) => {
                                            if(data.message.toLowerCase() !== 'ok'){
                             getTrainingDetailQuestions(Number(evt.id_detail)).then((data : any) => {
                                          const notquizTypeQuizData = data.filter((item: { quiz_type: string; }) => item.quiz_type !== 'quiz'); 
                                            setData(notquizTypeQuizData);
                                            setModalOpenPre(true);
                                            localStorage.removeItem('next-step')
                                          
                                          })
                                            }
                                            else{
                                             nextStep()
                                             
                                            localStorage.removeItem('next-step')
                                            }
                                        })
                                    }
                                   
                                    })
                            }
                        }
      
        
        // valid(userData().id,evt.id_detail,'pre-test').then((data: any) => {
        // })
        // nextValid(userData().id,evt.id_detail,'pre-test').then((data: any) => {
        //     // console.log("cek next valid", data)
        //     })

        // let res = {
        //     "id_userss":userData().id,
        //     "id_detail_training": evt.id_detail,
        //     "step_detail":"pre-test",
        //     "score":55
        //   }
        // addStep(res).then((data: any) => {
        //     // console.log("cek add", data)
        //     })
        
       
      }; 
      
      const closeModalPre = () => {
        setModalOpenPre(false); 
      };
      const openModalScore = () => {
        // // // console.log("masuk")
        setModalScore(true); 
      };
      const closeModalScore = () => {
        setModalScore(false); 
      };
      const nextStep = () => {
        setModalScore(false); 
        videoUrl(nextData())
      };

    return (
        <>

{isModalOpenAlert() && (
        <div class="modal modal-open" >
          <div class="modal-box">
            <h3 class="font-bold text-lg" style="color:red">Attention !</h3>
            <p class="py-4">Sorry you had to complete the previous step.</p>
            <div class="modal-action">
              <button class="btn" onClick={closeModalAlert}>Close</button>
            </div>
          </div>
        </div>
      )}

{/* <button class="btn" onClick={openModalPre}>
        Open modal
      </button> */}

      {isModalOpenPre() && (

        <>
        {isModalScore() && (
        <div class="modal modal-open" style="    z-index: 99999999999 !important; display: flex;">
        <div class="modal-box">
          <div  >
  <label  style="justify-content: end;
    align-items: end;
    align-self: end;
    display: flex;margin-bottom: -25px;
    font-size: 15px;"><label  onclick={closeModalScore} style="background: #fe5b5b;
    height: 25px;
    color: white;
    width: 25px;
    border-radius: 16px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: grid;">x</label></label>
     <Show when={scoreNext()}  fallback={
         (<>
             <h3 class="text-lg font-bold" style=" color:  #33ca46;">{scoreMsg}</h3> </>)
           } > 
             <h3 class="text-lg font-bold" style="color:#33ca46;">{scoreMsg}</h3>
            </Show>
  
    <p class="py-4">You have answered the question </p>
    <div style="text-align: center;
    font-size: 20px;
    color: #939393;">Score</div>
    <div style="text-align: center; 
    font-size: 100px;">{score()}</div>


     <Show when={scoreNext()}  fallback={
         (<>  <div style="text-align: center;">  
         <button onclick={nextStep}  class="btn" style="background: #00c437; color: #ffffff;    margin-top: 20px; ">Next step</button> </div>  </>)
           } > 
        
       <div style="text-align: center;"> <button class="btn" style="    background: #00c437;
    color: #ffffff;    margin-top: 20px; " onclick={nextStep} >Next step</button></div>
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
            <div style="font-size: 20px; margin-bottom: 18px;    padding-top: 20px;  padding-left: 20px;font-weight: bold;">Question Pre Test - (<span style="text-transform: capitalize;color: #e08e13;">{nextData().step} </span>)</div>
                <div style="    padding-top: 13px; padding-left: 20px;">
                    {data().map((a : any, index : any) => {

// // // // console.log("AAA", a)
                        return (<>
                            <div style="padding-bottom: 10px;padding-top:10px"><span>{index + 1}. </span>{a.question}</div>

                            {JSON.parse(a.options_choice).map((e: any, i : any) => {
                                const firstLetter = String.fromCharCode(65 + i);
                                setCq(e)
                                // // // // console.log("iiii -> ", data()[index].q.length)
                                return (<>
                                    <Show
                                        when={a.index == index && e == a.value}
                                        fallback={
                                            (<>
                                                <div style="font-family: 'pr'; font-size: 15px;cursor:pointer" onClick={() => clickQ(index, i,e)}><span style="font-family: 'pm'; ">{firstLetter}.</span> {e}</div>
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

<Show
  when={cb()}
  fallback={
    
    <label for="my_modal_9" class="btn" style="    background: #392863;  color: white; font-family: 'pr';    margin-top: 40px;
    margin-bottom: 40px;" onClick={cekValue}>Submit Question</label>
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
              <button class="btn btn-primary" onClick={closeModalPre}>
                Close
              </button>
            </div>
          </div>
        </div>
     </> )} 
    

            <div class="training-jd">
                <h1 class="h1-trainingjd">Training Option</h1>   
                {/* <label for="login-modal" ><li><a  link aria-current="page">Login</a></li></label> */}

                <div class="karosel">
                    <For each={training()}>{(train, i) =>
                        <div class="carousel-items bowl2">

                            <div class="to-rac" onClick={() => { selectTrain(train) }} style="cursor:pointer">
                                <img src={train.img + '.jpg'} class="to-car" />
                                <div class="main-car">
                                    <h1 class="to-car1">{train.kategori}</h1>
                                    <h1 class="to-car3">{train.title}</h1>
                                    {/* <p class="to-car2" style="display: none;">IDR {train.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', })}</p> */}
                                </div>
                                {/* <div class="tes">
                                        <p class="to-car2">IDR {train.price.toLocaleString('id-ID', {style: 'currency',currency: 'IDR',})}</p>
                                    </div> */}

                            </div>
                        </div>
                    }
                    </For>
                </div>
            </div>

            <div class="bowl">
                <div class="main-bowl">
                    <div class="">
                        <div class="isi-bowl">
                            <h1 style=" font-weight: 400;font-family: 'pm';">{trainingSelect().kategori} - <span style="font-weight: 500;">{trainingSelect().title}</span></h1>
                            <p >{trainingSelect().class}</p>
                            <p class='student' >119k Students study on this {trainingSelect().kategori}</p>
                        </div>
                        <div class="isi-bowl2">
                            <p> {trainingSelect().description} </p></div>
                    </div>
                </div>
                <div class="main-bowl2">

                    <For each={detail()}>{(evt, i) =>
                        <div class="carousel-items bowl2" style="cursor:pointer">
                            <Show when={loginVer()} fallback={
                                <> 
                                    <label for="login-modal" onClick={handleLinkClick}> <a link  aria-current={isModalOpen() ? "page" : undefined} >  </a>
                                        <div class="to-rac2" >
                                            <div class="tr-img">
                                                <img src={evt.img_detail + '.jpg'} class="to-cardo" />
                                            </div>
                                            <div class="isi-card" style="font-family:'pm'">
                                                <p style="text-transform: capitalize;font-size: 13px;font-weight: 400;">{evt.step}</p>
                                                <h1 style="font-size: 16px;color: #0c2b42;" ><a >{evt.title_detail}</a></h1>
                                                <div class="sub-isi">
                                                    <p style="display:flex;margin-top: 7px;"><img src='st.png' style="width: 15px;height:15px" /><span style="margin-left: 3px;font-size: 11px;">{evt.rating}</span></p>
                                                    <p style="margin-top: 3px;text-transform: capitalize;display:flex;color: #1324e0;"><img src='level.png' style="width: 15px;height:15px" /><span style="margin-left: 3px;font-size: 11px;">{evt.difficult}</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </label>

                                </>
                            }>
                                <Show when={preVer()} fallback={
                                    <>
                                   
                                     <div class="to-rac2" onClick={() => openModalPre(evt)}>
                                     <div class="tr-img">
                                         <img src={evt.img_detail + '.jpg'} class="to-cardo" />
                                     </div>
                                     <div class="isi-card" style="font-family:'pm'">
                                         <p style="text-transform: capitalize;font-size: 13px;font-weight: 400;">{evt.step}</p>
                                         <h1 style="font-size: 16px;color: #0c2b42;" ><a >{evt.title_detail}</a></h1>
                                         <div class="sub-isi">
                                             <p style="display:flex;margin-top: 7px;"><img src='st.png' style="width: 15px;height:15px" /><span style="margin-left: 3px;font-size: 11px;">{evt.rating}</span></p>
                                             <p style="margin-top: 3px;text-transform: capitalize;display:flex;color: #1324e0;"><img src='level.png' style="width: 15px;height:15px" /><span style="margin-left: 3px;font-size: 11px;">{evt.difficult}</span></p>
                                         </div>
                                     </div>
                                 </div>
                                 </>
                                } >
                                   
                             <div class="to-rac2" onClick={() => videoUrl(evt)}>
                                    <div class="tr-img">
                                        <img src={evt.img_detail + '.jpg'} class="to-cardo" />
                                    </div>
                                    <div class="isi-card" style="font-family:'pm'">
                                        <p style="text-transform: capitalize;font-size: 13px;font-weight: 400;">{evt.step}</p>
                                        <h1 style="font-size: 16px;color: #0c2b42;" ><a >{evt.title_detail}</a></h1>
                                        <div class="sub-isi">
                                            <p style="display:flex;margin-top: 7px;"><img src='st.png' style="width: 15px;height:15px" /><span style="margin-left: 3px;font-size: 11px;">{evt.rating}</span></p>
                                            <p style="margin-top: 3px;text-transform: capitalize;display:flex;color: #1324e0;"><img src='level.png' style="width: 15px;height:15px" /><span style="margin-left: 3px;font-size: 11px;">{evt.difficult}</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Show>

                            </Show>

                        </div>
                    }
                    </For>

                </div>
            </div>

            <div class="tr-content">
                <div class="card-content" >
                    <div class="cont">

                        <h1 class="judul-conte">Training Option</h1>

                        <p class='card-description'>Options training is an important step for anyone interested in getting involved in options trading. With a good understanding of trading strategies, risk management and market analysis, options traders can increase their chances of success in this complex market</p>
                        <p class='yellow-bt'>Read More</p>
                    </div>
                    <div class="cont-img">
                        <div style="display:flex;    margin: 2vh;">
                            <div> <img src='f1.jpg' style="width: 18vw !important;    border-radius: 10px; height: 16vh;"></img></div>
                            <div style="padding: 1vh;"> <img src='f2.jpg' style="   width: 34vw !important; height: 34vh;border-radius: 15px;"></img></div>
                        </div>
                        <div style="    align-self: center; width: 100%; margin-top: -21vh; margin-left: 2vh;">
                            <div> <img src='f4.jpg' style="  width: 13.5vw !important; height: 18vh; border-radius: 10px; "></img></div>
                            {/* <div> <img src='f4.jpg' style="width: 35vw !important; height: 11vh;"></img></div>  */}
                        </div>
                        {/* <div style="display:flex;    margin: 2vh;">
                            <div> <img src='f5.jpg' style="width: 35vw !important; height: 11vh;"></img></div> 
                            <div> <img src='f6.jpg' style="width: 35vw !important; height: 11vh;"></img></div> 
                        </div> */}


                    </div>
                </div>
            </div>

        </>
    );
};

export default Training;