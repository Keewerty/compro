import { createSignal, Component, onMount, Show } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./teams_table.css";
import { createStore } from "solid-js/store";
import { AiOutlineDownload } from 'solid-icons/ai'
import { deletejob, getJobVacancy, getKaryawan, Inputjob, updatejobs } from "../service/Service";
import { RowNode, SelectionChangedEvent } from 'ag-grid-community';
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'

const [well, setWell] = createSignal('');


const Tablejobs: Component = () => {
  const [pros, setPros] = createSignal(false);
  const toggle = () => setPros(!pros())
  const [jobs, setJobs] = createSignal('');
  const [jobs2, setJobs2] = createSignal('');
  const [jobs3, setJobs3] = createSignal('');
  const [jobs4, setJobs4] = createSignal('');
    
  let gridRefTeamsJob: AgGridSolidRef;

  const [reports] = createStore([
    { field: 'working_type',
    checkboxSelection: true,
    },
    { field: 'position' },
    { field: 'content' },
    
  ]);

  const onSelectionChanged = (event: SelectionChangedEvent) => {
    var rowCount = event.api.getSelectedNodes().length;
    setPros(rowCount  > 0);
    if (rowCount > 0) {
      const selectedData = event.api.getSelectedNodes()[0]?.data;
      if (selectedData) {
        // // console.log(selectedData);
          setJobs4(selectedData.id)
          setJobs(selectedData.working_type)
          setJobs2(selectedData.position)
          setJobs3(selectedData.content)
        
      }
    }
  };
  
  getJobVacancy().then((data : any) => {
    // // // console.log('konsul ->', data);
    // gridRefDokumen.api.setColumnDefs(konsultasi);
    setDataJobs(data)
    gridRefTeamsJob.api.setRowData(data);
  })


  const [dataJobs, setDataJobs] = createStore([
    // {
    //   name: 'Subhan Fauzi',
    //   position: 'CTO Braincode Solutions',
    //   link: 'id.linkedin.com',
    //   quotes: 'Lorem Ipsum',
    // },

    // {
    //     name: 'Subhan Fauzi',
    //     position: 'CTO Braincode Solutions',
    //     link: 'id.linkedin.com',
    //     quotes: 'Lorem Ipsum',
    // },
    // {
    //     name: 'Subhan Fauzi',
    //     position: 'CTO Braincode Solutions',
    //     link: 'id.linkedin.com',
    //     quotes: 'Lorem Ipsum',
    // },

  ]);

  const defaultColDef = {
    flex: 1,
    // editable: true,
  };

  const [inputValueee, setInputValueee] = createSignal("");
    const [inputValueee1, setInputValueee1] = createSignal("");
    const [inputValueee3, setInputValueee3] = createSignal("");

    const hasil7 = async () => {


        // // console.log("working_type ->", inputValueee());
        // // console.log("position ->", inputValueee1());
        // // console.log("content ->", inputValueee3());
        var todayDate = new Date().toISOString().slice(0, 10);
        // // console.log(todayDate);

        // // // console.log("gender ->", RadioValue1());
        // // // console.log("gender ->", RadioValue2());
        Inputjob({
            id_user: 6,
            working_type: inputValueee(),
            position: inputValueee1(),
            date_creation: todayDate,
            content: inputValueee3(),
        }).then((data: any) => {
            // // console.log("detail account->", data);
        });
    };

    const [inputValuex, setInputValuex] = createSignal("");
    const [inputValuex1, setInputValuex1] = createSignal("");
    const [inputValuex2, setInputValuex2] = createSignal("");
    // const [isKosong, setIsKosong] = createSignal(false);
    const updatejobi = async () => {



      // // console.log("working_type ->", inputValuex());
      // // console.log("position ->", inputValuex1());
      // // console.log("content ->", inputValuex2());
      var todayDate = new Date().toISOString().slice(0, 10);
      // // console.log(todayDate);


        // // // console.log("gender ->", RadioValue1());
        // // // console.log("gender ->", RadioValue2());
        // if (inputValueeee() == "", inputValueeee1() == "",inputValueeee3() == "",inputValueeee4() == "",base64Data() == "") {

        //   setIsKosong(true);

        // } else {
          updatejobs({
            id: jobs4(),
            working_type: inputValuex(),
            position: inputValuex1(),
            content: inputValuex2(),
        }).then((data: any) => {
            // // console.log("detail account->", data);
        });
      // }
    };

    const deletejobi = async () => {

      deletejob(jobs4()).then((data : any) => {
        // // // console.log('konsul ->', data);
        // gridRefDokumen.api.setColumnDefs(konsultasi);
        setDataJobs(data)
        gridRefTeamsJob.api.setRowData(data);
      })
    }
  return (
    <>
      <div class="warna">
        <div class="warnas2" style="width:40%">
          <h2 class="jdxl2" style="font-size: 25px;margin-left: 3%; margin-top: 3%; font-weight: bold;">Job-Vacancy</h2>
          <Show
            when={pros()}
            fallback={<label for="my_modal_5" style="margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

            <div class="perindos" style="display:flex;">
              <label for="tambah-12" style="margin-top: -2vh; margin-left: 83%; display: grid; width:5%">
                <label for="my_modal_5" style="margin-top: 0vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
              </label>
              <label for="my_modal_9" class="CRUD 1v" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3 /> </label>
              <label for="my_modal_433" class="CRUD 2v" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>

            </div>
          </Show>


          <input type="checkbox" id="my_modal_5" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box" style="width:100%; height:50%;">
              <label for="my_modal_5" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
              <div class="TTL2" style="font-weight: bold;font-size: 24px;text-align: center;">Add</div>
              <input type="text" placeholder="workingtyoe" class="input input-bordered innne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueee(f.currentTarget.value); }} />
              <input type="text" placeholder="position" class="input input-bordered innne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueee1(f.currentTarget.value); }} />
              <input type="text" placeholder="content" class="input input-bordered innne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueee3(f.currentTarget.value); }} />
              <div class="modal-action">
                <label for="my_modal_5" style="color:white; width:90%; margin-top:-0.1vw; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil7}>Submit</label>
              </div>
            </div>
          </div>

          <input type="checkbox" id="my_modal_9" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box" style="width:100%; height:50%;">
              <label for="my_modal_9" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
              <div class="TTL2" style="font-weight: bold;font-size: 24px;text-align: center;">Edit</div>
              <input type="text" placeholder="workingtyoe" class="input input-bordered innne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueee(f.currentTarget.value); }} value={jobs()} />
              <input type="text" placeholder="position" class="input input-bordered innne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueee1(f.currentTarget.value); }} value={jobs2()} />
              <input type="text" placeholder="content" class="input input-bordered innne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueee3(f.currentTarget.value); }} value={jobs3()} />
              <div class="modal-action">
                <label for="my_modal_9" style="color:white; width:90%; margin-top:-0.1vw; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={updatejobi}>Submit</label>
              </div>
            </div>
          </div>

          <input type="checkbox" id="my_modal_433" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box" style="width:100%; height:30%;">
              <label for="my_modal_433" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
              <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
              <div class="modal-action">
                <label for="my_modal_433" style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={deletejobi}>Yes</label>
              </div>
            </div>
          </div>

          <div class="geser">
            {/* <div class="filxx">
            <div class="form-control w-full max-w-xs plh-00">
              <div class="kmpln-px">
                <span class="label-text lbl-10">Number of Entries</span>
              </div>
              <select class="select select-bordered select-xs w-full max-w-xs slct-11">
                <option disabled selected>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>
            <div class="form-control w-full max-w-xs plh-11">
              <div class="kmpln-px">
                <span class="label-text lbl-10">Sorting by</span>
              </div>
              <select class="select select-bordered select-xs w-full max-w-xs slct-11">
                <option disabled selected>Latest</option>
                <option>Tiny Apple</option>
                <option>Tiny Orange</option>
                <option>Tiny Tomato</option>
              </select>
            </div>

            <input type="text" placeholder="Search" class="input input-bordered input-sm w-full max-w-xs inpt-70" />

            <div class="dwndld">
              <AiOutlineDownload />
            </div> */}
          </div>

          <div class="ag-theme-alpine" style="width: 100%; height: 349px; margin-top:12%; --ag-borders: none; --ag-header-background-color: #082032;font-family:'pm';">
            <AgGridSolid
              columnDefs={reports}
              rowData={dataJobs}
              defaultColDef={defaultColDef}
              ref={gridRefTeamsJob!}
              paginationAutoPageSize={true}
              pagination={true}
              rowSelection={'single'}
              onSelectionChanged={onSelectionChanged}
            />
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Tablejobs;