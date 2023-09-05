import { createSignal, type Component, onMount, For, Show } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import foto from "../assets/huawei-logo.png";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./project.css";
import { createStore } from "solid-js/store";
import { AiOutlineDownload } from 'solid-icons/ai';
import { style } from "solid-js/web";
import { deleteproject, getProject, input_project, update_project } from "../service/Service";
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'
import {SelectionChangedEvent} from 'ag-grid-community';
import Projectdetails from './projectdetails';

const [pro, setPro] = createSignal(false);
const [inputValuee, setInputValuee] = createSignal("");
    const [inputValuee1, setInputValuee1] = createSignal("");
    const [inputValuee2, setInputValuee2] = createSignal("");
    const [inputValuees, setInputValuees] = createSignal("");
    const [inputValuees1, setInputValuees1] = createSignal("");
    const [inputValuees2, setInputValuees2] = createSignal("");
    const [inputValuee3, setInputValuee3] = createSignal("");
    const [inputValuees4, setInputValuees4] = createSignal("");
    const [inputValuees5, setInputValuees5] = createSignal("");
    const [base64Data, setBase64Data] = createSignal('');
    const [form1, setForm1] = createSignal("");
    const [edit, setEdit] = createSignal("");
    const [del, setDel] = createSignal("");


    const hasil2 = async () => {
        // // // console.log("img ->", inputValuee3());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        input_project({
            id_client: Number(inputValuee()),
            content: inputValuee1(),
            priority: inputValuee2(),
            img_projeect: base64Data(),
        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
    };

    const update = async () => {
      // // // console.log("img ->", inputValuees4());
      var todayDate = new Date().toISOString().slice(0, 10);
      // // // console.log(todayDate);

      update_project({
          id:edit(),
          id_client:inputValuee() ,
          content: inputValuees1(),
          priority: inputValuees2(),
          img_projeect: base64Data(),
      }).then((data: any) => {
          // // // console.log("detail account->", data);
      });
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
const Project: Component = () => {
  let gridRefProject: AgGridSolidRef;

  const [table]: any = createStore([
    { field: 'id',checkboxSelection: true,},
    { field: 'content'},
    { field: 'priority' },
    // {field: 'Status',
    //   cellStyle: (params: { value: string }) => {
    //     if (params.value === 'Failed') {
    //       //mark police cells as red
    //       return { color: 'red' };
    //     } else if (params.value === 'Success') {
    //       //mark police cells as red
    //       return { color: 'green' };
    //     }
    //   }
    // },

  ]);
  getProject().then((data : any) => {
    // // // // console.log('konsul ->', data);
    // gridRefDokumen.api.setColumnDefs(konsultasi);
    setDataproject(data)
    gridRefProject.api.setRowData(data);
  })
 
  const [dataproject, setDataproject]: any = createStore([
    // {
    // title: 'Lorem Ipsum', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', priority:'',
    // },
   
  ]);

 


  const onSelectionChanged = (event: SelectionChangedEvent) => {
    var rowCount = event.api.getSelectedNodes().length;
    setPro(rowCount  > 0);
    if (rowCount > 0) {
      const selectedData = event.api.getSelectedNodes()[0]?.data;
      if (selectedData) {
        // // // console.log(selectedData);
        setForm1(selectedData.content);
        setForm1(selectedData.priority);
        setEdit(selectedData.id);
      
      }
    }
  };

  const defaultColDef = {
    flex: 1,
  };

  const delete55 = async () => {

    deleteproject(edit()).then((data : any) => {
      // // // // console.log('konsul ->', data);
      // gridRefDokumen.api.setColumnDefs(konsultasi);
      setDataproject(data)
      gridRefProject.api.setRowData(data);
     
    })
  }
  
  return (
    <div class="latar2">
        <div class="bungkusan2" style="width:40%; margin-top:-5vw">
          
        <h2 style="font-size: 25px;margin-left: 1%; margin-top: 3%; font-weight: bold;">Project</h2>

<Show
  when={pro()} 
  fallback={<label for="my_modal_6" style="margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

   <div class="line_project" style="display:flex;">
    <label for="ex-modal_6"style="margin-top:margin-top: -2vh; margin-left: 83%; display: grid; width:5%">
    <label for="my_modal_6" style="margin-top: -2vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
                           </label>
                   <label for="my_modal_2" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3/> </label>
                  
                   <label for="my_modal_14" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>
   
                   </div>
</Show>
<input type="checkbox" id="my_modal_6" class="modal-toggle" />
<div class="modal">
  <div class="modal-box" style="width:100%; height:70%;">
  <label for="my_modal_6" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-3">✕</label>
  <h3 class="font-bold text-lg" style="font-size:24px; text-align: center;">ADD</h3>
    <h3 class="font-bold text-lg" style="font-size:15px;" >ID</h3>
    <input type="text" class="input input-bordered inne1" placeholder="ID" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValuee(f.currentTarget.value); }} />
    <h3 class="font-bold text-lg" style="font-size:15px;">Content</h3>
<textarea class="textarea textarea-secondary inn1" placeholder="Content" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValuee1(f.currentTarget.value); }}></textarea>
<h3 class="font-bold text-lg" style="font-size:15px;">Priority</h3>
<textarea class="textarea textarea-secondary inn1" placeholder="Priority" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValuee2(f.currentTarget.value); }}></textarea>
<div style="width:43%;">
<h3 class="font-bold text-lg" style="font-size:15px;">Upload</h3>
<input type="file" onChange={handleFileChange} class="inn1" style="width:450px; height:29.5px; border: 1px solid #545454; margin-top:2%; margin-left:-0.01vw;" onchange={(f) => { setInputValuee3(f.currentTarget.value); }} />
</div>
    <div class="modal-action">
    <label for="my_modal_6" style="color:white; width:90%; margin-top:-0.1vw; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil2}>SUBMIT</label>
    </div>
  </div>
</div>


<input type="checkbox" id="my_modal_2" class="modal-toggle" />
<div class="modal">
  <div class="modal-box" style="width:100%; height:70%;">
  <label for="my_modal_2" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-3">✕</label>
  <h3 class="font-bold text-lg" style="font-size:24px; text-align: center;">EDIT</h3>
    <h3 class="font-bold text-lg" style="font-size:15px;">Content</h3>
<textarea class="textarea textarea-secondary inn1" placeholder="Content" style="width:100%; height:100px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValuee1(f.currentTarget.value); }}>{form1()}</textarea>
<h3 class="font-bold text-lg" style="font-size:15px;">Priority</h3>
<textarea class="textarea textarea-secondary inn1" placeholder="Priority" style="width:100%; height:100px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValuee2(f.currentTarget.value); }}>{form1()}</textarea>
<div style="width:43%;">
<h3 class="font-bold text-lg" style="font-size:15px;">Upload</h3>
<input type="file" onChange={handleFileChange} class="inn1" style="width:465px; height:29.5px; border: 1px solid #545454; margin-top:2%; margin-left:-0.01vw;" onchange={(f) => { setInputValuee3(f.currentTarget.value); }} />
</div>
    <div class="modal-action">
    <label for="my_modal_2" style="color:white; width:90%; margin-bottom:5vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={update}>SUBMIT</label>
    </div>
  </div>
</div>


<input type="checkbox" id="my_modal_14" class="modal-toggle" />
                    <div class="modal">
                        <div class="modal-box" style="width:100%; height:30%;">
                            <label for="my_modal_14" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
                            <div class="modal-action">
                                <label for="my_modal_14"  style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={delete55}>Yes</label>
                            </div>
                        </div>
                    </div>
                    

        <div class="ag-theme-alpine" style=" font-family:'pm'; width: 100%;height: 307px;--ag-borders: none;--ag-header-background-color: #093032;--ag-row-border-color: #083032; ">
          <AgGridSolid
            columnDefs={table}
            rowData={dataproject}
            defaultColDef={defaultColDef}
            ref={gridRefProject!}
            paginationAutoPageSize={true}
            pagination={true}
            onSelectionChanged={onSelectionChanged}
          />
        </div>
        
      </div>
      
    </div>
  );
};


export default Project;