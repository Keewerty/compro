import { createSignal, type Component, onMount, For, Match, Switch, Suspense, Show } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import foto from "../assets/huawei-logo.png"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./explore.css"
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
import { getExplore, getProject, Inputexplore, updateexplore, deleteexplore } from "../service/Service";
import { SelectionChangedEvent } from 'ag-grid-community';
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'

const Explore: Component = () => {
    const navigate = useNavigate();




    let gridRefExplore: AgGridSolidRef;

    const [columnexplore] = createStore([
        {
            field: 'judul_explore',
            checkboxSelection: true,
            showDisabledCheckboxes: true,
        },
        { field: 'content_explore' },

    ]);

    const [dataexplore, setDataexplore]: any = createStore([

    ]);

    const defaultColDef = {
        flex: 1,
        // editable: true,
    };



    getExplore().then((data: any) => {
        setDataexplore(data)
        gridRefExplore.api.setRowData(data);
    })


    const [explore1, setexplore1] = createSignal('');
    const [explore2, setexplore2] = createSignal('');
    const [explore3, setexplore3] = createSignal('');
    const [base64Data, setBase64Data] = createSignal('');
    const [pros, setPros] = createSignal(false);
    const toggle = () => setPros(!pros())

    const onSelectionChanged = (event: SelectionChangedEvent) => {
        var rowCount = event.api.getSelectedNodes().length;
        setPros(rowCount > 0);
        if (rowCount > 0) {
            const selectedData = event.api.getSelectedNodes()[0]?.data;
            if (selectedData) {
                // // // console.log(selectedData);
                setexplore1(selectedData.id)
                setexplore2(selectedData.judul_explore)
                setexplore3(selectedData.content_explore)

            }
        }
    };

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



    const [inputValueeee1, setInputValueeee1] = createSignal("");
    const [inputValueeee2, setInputValueeee2] = createSignal("");
    const [inputValueeee3, setInputValueeee3] = createSignal("");
    const [isKosong, setIsKosong] = createSignal(false);
    const hasil1 = async () => {


        setIsKosong(false);
        // // // console.log("judul_explore ->", inputValueeee1());
        // // // console.log("content_explore ->", inputValueeee2());
        // // // console.log("img_explore ->", inputValueeee3());

        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        // // // // console.log("gender ->", RadioValue1());
        // // // // console.log("gender ->", RadioValue2());
        if (inputValueeee1() == "", inputValueeee2() == "", base64Data() == "") {

            setIsKosong(true);

        } else {
            Inputexplore({
                id: explore1(),
                judul_explore: inputValueeee1(),
                content_explore: inputValueeee2(),
                img_explore: base64Data(),


            }).then((data: any) => {
                // // // console.log("detail account->", data);
            });
        }
    };

    const [inputValues1, setInputValues1] = createSignal("");
    const [inputValues2, setInputValues2] = createSignal("");
    const [inputValues3, setInputValues3] = createSignal("");

    const hasil2 = async () => {


        setIsKosong(false);
        // // // console.log("judul_explore ->", inputValues1());
        // // // console.log("content_explore ->", inputValues2());
        // // // console.log("img_explore ->", inputValues3());


        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        updateexplore({
            id: explore1(),
            judul_explore: inputValues1(),
            content_explore: inputValues2(),
            img_explore: base64Data(),


        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
        // }
    };

    const delete34 = async () => {

        deleteexplore(explore1()).then((data: any) => {
            setDataexplore(data)
            gridRefExplore.api.setRowData(data);
        })
    }
    //     <div class="blog">
    //     <div class="blog2" style="width:40%; margin-top:-37vw">
    //         <h2 class="jdxl2" style="font-size: 25px;margin-left: 3%; margin-top: 3%; font-weight: bold;">Blog</h2>
    //         <Show
    //             when={pros()}
    //             fallback={<label for="my_modal_99" style="margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

    //             <div class="perindos" style="display:flex;">
    //                 <label for="tambah-12" style="margin-top: -2vh; margin-left: 83%; display: grid; width:5%"  >
    //                     <label for="my_modal_99" style="margin-top: 0vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
    //                 </label>
    //                 <label for="my_modal_86" class="CRUD 1v" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3 /> </label>
    //                 <label for="my_modal_22" class="CRUD 2" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>


    //             </div>
    //         </Show>


    //         <input type="checkbox" id="my_modal_99" class="modal-toggle" />
    //         <div class="modal">
    //             <div class="modal-box" style="width:100%; height:60%;">
    //                 <label for="my_modal_99" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
    //                 <div class="TTL2" style="font-weight: bold;font-size: 40px;text-align: center;">Create Blog</div>
    //                 <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValueeee1(f.currentTarget.value); }} />
    //                 <input type="file" class="file-input w-full max-w-xs inn" style=" margin-top:10px ;width:100%; height:50px; border: 1px solid #545454;" onChange={handleFileChange} onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
    //                 <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:100%; height:200px; border: 1px solid #545454;" onchange={(r) => { setInputValueeee2(r.currentTarget.value); }}></textarea>

    //                 <div class="modal-action">
    //                     <label for="my_modal_99" style="color:white; width:90%; margin-top:10px; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil1}>Submit</label>
    //                 </div>
    //             </div>
    //         </div>

    //         <input type="checkbox" id="my_modal_86" class="modal-toggle" />
    //         <div class="modal">
    //             <div class="modal-box" style="width:100%; height:60%;">
    //                 <label for="my_modal_86" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
    //                 <div class="TTL2" style="font-weight: bold;font-size: 40px;text-align: center;">Edit blog</div>
    //                 <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValues1(f.currentTarget.value); }} value={blogs2()} />
    //                 <input type="file" class="file-input w-full max-w-xs inn" style="width:100%; height:50px; border: 1px solid #545454;" onChange={handleFileChange} onchange={(f) => { setInputValues3(f.currentTarget.value); }} />
    //                 <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(r) => { setInputValues2(r.currentTarget.value); }} value={blogs3()}></textarea>
    //                 <div class="modal-action">
    //                     <label for="my_modal_86" style="color:white; width:90%; margin-top:10px; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil2}>Submit</label>
    //                 </div>
    //             </div>
    //         </div>

    //         <input type="checkbox" id="my_modal_22" class="modal-toggle" />
    //         <div class="modal">
    //             <div class="modal-box" style="width:100%; height:30%;">
    //                 <label for="my_modal_22" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
    //                 <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
    //                 <div class="modal-action">
    //                     <label for="my_modal_22" style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={delete34}>Yes</label>
    //                 </div>
    //             </div>
    //         </div>

    //         <div class="geser">

    //         </div>

    //         <div class="ag-theme-alpine" style="width: 100%; height: 349px; margin-top:12%; --ag-borders: none; --ag-header-background-color: #082032;">
    //             <AgGridSolid
    //                 columnDefs={project}
    //                 rowData={dataproject}
    //                 defaultColDef={defaultColDef}
    //                 ref={gridRefTabel!}
    //                 paginationAutoPageSize={true}
    //                 pagination={true}
    //                 rowSelection={'single'}
    //                 onSelectionChanged={onSelectionChanged}
    //             />
    //         </div>
    //     </div>
    // </div>




    return (
        <>
            <div class="explore">
                <div class="explore2" style="width:40%; margin-top:-37vw">
                    <h2 class="tab_explore" style="font-size: 25px;margin-left: 3%; margin-top: 3%; font-weight: bold;">Explore</h2>
                    <Show
                        when={pros()}
                        fallback={<label for="my_modal_55" style="margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

                        <div class="perindos" style="display:flex;">
                            <label for="tambah-12" style="margin-top: -2vh; margin-left: 83%; display: grid; width:5%" >
                                <label for="my_modal_55" style="margin-top: 0vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
                            </label>
                            <label for="my_modal_25" class="CRUD 1v" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3 /> </label>
                            <label for="my_modal_35" class="CRUD 2" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>

                        </div>
                    </Show>


                    <input type="checkbox" id="my_modal_55" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:60%;">
                            <label for="my_modal_55" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="TTL2" style="font-weight: bold;font-size: 40px;text-align: center;">Create Explore</div>
                            <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValueeee1(f.currentTarget.value); }} />
                            <input type="file" class="file-input w-full max-w-xs inn" style=" margin-top:10px ;width:100%; height:50px; border: 1px solid #545454;" onChange={handleFileChange} onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
                            <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:100%; height:200px; border: 1px solid #545454;" onchange={(r) => { setInputValueeee2(r.currentTarget.value); }}></textarea>

                            <div class="modal-action">
                                <label for="my_modal_55" style="color:white; width:90%; margin-top:10px; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil1}>Submit</label>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="my_modal_25" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:60%;">
                            <label for="my_modal_25" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="TTL2" style="font-weight: bold;font-size: 40px;text-align: center;">Edit Explore</div>
                            <input type="text" placeholder="Tittle" class="input input-bordered inne" style="width:100%; height:50px; border: 1px solid #545454;" onchange={(f) => { setInputValueeee1(f.currentTarget.value); }} />
                            <input type="file" class="file-input w-full max-w-xs inn" style=" margin-top:10px ;width:100%; height:50px; border: 1px solid #545454;" onChange={handleFileChange} onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
                            <textarea class="textarea textarea-secondary inn" placeholder="write your content" style="width:100%; height:200px; border: 1px solid #545454;" onchange={(r) => { setInputValueeee2(r.currentTarget.value); }}></textarea>

                            <div class="modal-action">
                                <label for="my_modal_25" style="color:white; width:90%; margin-top:10px; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil2}>Submit</label>
                            </div>
                        </div>
                    </div>

                    <input type="checkbox" id="my_modal_35" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:30%;">
                            <label for="my_modal_35" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
                            <div class="modal-action">
                                <label for="my_modal_35" style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={delete34}>Yes</label>
                            </div>
                        </div>
                    </div>


                    <div class="geser">

                    </div>

                    <div class="ag-theme-alpine" style="font-family:'pm';width: 100%; height: 349px; margin-top:12%; --ag-borders: none; --ag-header-background-color: #082032;">
                        <AgGridSolid
                            columnDefs={columnexplore}
                            rowData={dataexplore}
                            defaultColDef={defaultColDef}
                            ref={gridRefExplore!}
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

export default Explore;


function useMemo(arg0: () => (params: any) => boolean, arg1: never[]): any {
    throw new Error("Function not implemented.");
}