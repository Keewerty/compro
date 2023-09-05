import { createSignal, type Component, onMount, For, Match, Switch, Suspense, Show } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import foto from "../assets/huawei-logo.png"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./tabelblog.css"
import { createStore } from "solid-js/store";
import { Column } from "ag-grid-community";
const [well, setWell] = createSignal('');
import logo from '../assets/images/mediahub.png';
import eng from '../assets/images/ENG.png';
import ling from '../assets/images/bulet.png';
import enam from '../assets/images/62.png';
import nam from '../assets/images/Frame.png';
import tujuh from '../assets/images/67.png';
import enamdelapan from '../assets/images/68.png';
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { AiOutlineDownload } from "solid-icons/ai";
import { getExplore, getProject, Inputblog, updateblog, deleteblog } from "../service/Service";
import { SelectionChangedEvent } from 'ag-grid-community';
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'

const TabelBlog: Component = () => {
    const navigate = useNavigate();



    let gridRefTabel: AgGridSolidRef;

    const [project] = createStore([
        {
            field: 'title',
            checkboxSelection: true,
            showDisabledCheckboxes: true,
        },
        { field: 'content' },

    ]);

    const [dataproject, setDataproject]: any = createStore([

    ]);

    // const [isRowSelectable] : any = useMemo(() => {
    //     return (params) => {
    //       return !!params.data && params.data.id === 2012;
    //     };
    //   }, []);

    const defaultColDef = {
        flex: 1,
        // editable: true,
    };




    getProject().then((data: any) => {
        setDataproject(data)
        gridRefTabel.api.setRowData(data);
    })

    const [blogs1, setblogs1] = createSignal('');
    const [blogs2, setblogs2] = createSignal('');
    const [blogs3, setblogs3] = createSignal('');
    const [base64Data, setBase64Data] = createSignal('');
    const [pros, setPros] = createSignal(false);
    const toggle = () => setPros(!pros())



    const onSelectionChanged = (event: SelectionChangedEvent) => {
        var rowCount = event.api.getSelectedNodes().length;
        setPros(rowCount > 0);
        if (rowCount > 0) {
            const selectedData = event.api.getSelectedNodes()[0]?.data;
            if (selectedData) {
                // // console.log(selectedData);
                setblogs1(selectedData.id)
                setblogs2(selectedData.title)
                setblogs3(selectedData.content)

            }
        }
    };


    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        // // console.log("cek upload file", file)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result: any = reader.result;
                // // console.log("result base64 -> ", result)
                setBase64Data(result);
            };
            reader.readAsDataURL(file);
        }
    }



    const [inputValueeee1, setInputValueeee1] = createSignal("");
    const [inputValueeee2, setInputValueeee2] = createSignal("");
    const [inputValueeee3, setInputValueeee3] = createSignal("");
    const [isKosong, setIsKosong] = createSignal(false);
    const hasil1 = async () => {


        setIsKosong(false);
        // // console.log("title ->", inputValueeee1());
        // // console.log("content ->", inputValueeee2());
        // // console.log("img ->", inputValueeee3());

        var todayDate = new Date().toISOString().slice(0, 10);
        // // console.log(todayDate);

        // // // console.log("gender ->", RadioValue1());
        // // // console.log("gender ->", RadioValue2());
        if (inputValueeee1() == "", inputValueeee2() == "", base64Data() == "") {

            setIsKosong(true);

        } else {
            Inputblog({
                id: blogs1(),
                title: inputValueeee1(),
                content: inputValueeee2(),
                cover_img: base64Data(),
                date_creation: todayDate,

            }).then((data: any) => {
                // // console.log("detail account->", data);
            });
        }
    };

    const [inputValues1, setInputValues1] = createSignal("");
    const [inputValues2, setInputValues2] = createSignal("");
    const [inputValues3, setInputValues3] = createSignal("");

    const hasil2 = async () => {


        setIsKosong(false);
        // // console.log("title ->", inputValues1());
        // // console.log("content ->", inputValues2());
        // // console.log("img ->", inputValues3());


        var todayDate = new Date().toISOString().slice(0, 10);
        // // console.log(todayDate);

        updateblog({
            id: blogs1(),
            title: inputValues1(),
            content: inputValues2(),
            cover_img: base64Data(),
            date_creation: todayDate,


        }).then((data: any) => {
            // // console.log("detail account->", data);
        });
        // }
    };

    const delete34 = async () => {

        deleteblog(blogs1()).then((data: any) => {
            // // console.log("detail account->", data);
        });
    };


    return (
        <>
            <div class="blog">
                <div class="blog2" style="width:40%; margin-top:-37vw">
                    <h2 class="jdxl2" style="font-size: 25px;margin-left: 3%; margin-top: 3%; font-weight: bold;">Blog</h2>
                    <Show
                        when={pros()}
                        fallback={<label for="my_modal_99" style="margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

                        <div class="perindos" style="display:flex;">
                            <label for="tambah-12" style="margin-top: -2vh; margin-left: 83%; display: grid; width:5%"  >
                                <label for="my_modal_99" style="margin-top: 0vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
                            </label>
                            <label for="my_modal_86" class="CRUD 1v" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3 /> </label>
                            <label for="my_modal_22" class="CRUD 2" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>


                        </div>
                    </Show>


                    <input type="checkbox" id="my_modal_99" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:60%;">
                            <label for="my_modal_99" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="TTL2" style="font-weight: bold;font-size: 40px;text-align: center;">Create Blog</div>
                            <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValueeee1(f.currentTarget.value); }} />
                            <input type="file" class="file-input w-full max-w-xs inn" style=" margin-top:10px ;width:100%; height:50px; border: 1px solid #545454;" onChange={handleFileChange} onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
                            <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:100%; height:200px; border: 1px solid #545454;" onchange={(r) => { setInputValueeee2(r.currentTarget.value); }}></textarea>

                            <div class="modal-action">
                                <label for="my_modal_99" style="color:white; width:90%; margin-top:10px; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil1}>Submit</label>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="my_modal_86" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:60%;">
                            <label for="my_modal_86" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="TTL2" style="font-weight: bold;font-size: 40px;text-align: center;">Edit blog</div>
                            <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValues1(f.currentTarget.value); }} value={blogs2()} />
                            <input type="file" class="file-input w-full max-w-xs inn" style="width:100%; height:50px; border: 1px solid #545454;" onChange={handleFileChange} onchange={(f) => { setInputValues3(f.currentTarget.value); }} />
                            <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(r) => { setInputValues2(r.currentTarget.value); }} value={blogs3()}></textarea>
                            <div class="modal-action">
                                <label for="my_modal_86" style="color:white; width:90%; margin-top:10px; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil2}>Submit</label>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="my_modal_22" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:30%;">
                            <label for="my_modal_22" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
                            <div class="modal-action">
                                <label for="my_modal_22" style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={delete34}>Yes</label>
                            </div>
                        </div>
                    </div>

                    <div class="geser">

                    </div>

                    <div class="ag-theme-alpine" style="width: 100%; height: 349px; margin-top:12%; --ag-borders: none; --ag-header-background-color: #082032;">
                        <AgGridSolid
                            columnDefs={project}
                            rowData={dataproject}
                            defaultColDef={defaultColDef}
                            ref={gridRefTabel!}
                            paginationAutoPageSize={true}
                            pagination={true}
                            rowSelection={'single'}
                            onSelectionChanged={onSelectionChanged}
                        />
                    </div>
                </div>
            </div>










        </>
    );
};

export default TabelBlog;