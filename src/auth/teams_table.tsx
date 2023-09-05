import { createSignal, Component, onMount, Show  } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./teams_table.css";
import { createStore } from "solid-js/store";
import { deleteTeams, getKaryawan, Inputkaryawan, updateteams } from "../service/Service";
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'
import {RowNode, SelectionChangedEvent} from 'ag-grid-community';
import { Routes, Route, A, useNavigate } from '@solidjs/router';
import { VsError } from 'solid-icons/vs'


const [well, setWell] = createSignal('');


const Tableteams: Component = () => {

  const [teams, setTeams] = createSignal('');
  const [teams2, setTeams2] = createSignal('');
  const [teams3, setTeams3] = createSignal('');
  const [teams4, setTeams4] = createSignal('');
  const [teams5, setTeams5] = createSignal('');
  const [base64Data, setBase64Data] = createSignal('');
  const [pros, setPros] = createSignal(false);
  const toggle = () => setPros(!pros())

  let gridRefTeams: AgGridSolidRef;

  const [reports] = createStore([
    { field: 'name',
    checkboxSelection: true,
    },
    { field: 'position' },
    { field: 'link' },
    { field: 'quotes' },
    
  ]);

//   const onSelectionChanged = (event: SelectionChangedEvent) => {
//     var rowCount = event.api.getSelectedNodes().length;
//     // window.alert('selection changed, ' + rowCount + ' rows selected');
//     // // // console.log(event.api.getSelectedNodes());
//     setPros(rowCount  > 0);
    
//     const arr = [];

// if (!arr.length) {
//   // // // console.log(event.api.getSelectedNodes()[0].data);
// } else {
//   // // // console.log(event.api.getSelectedNodes()[0].data);
// }

//   };

const onSelectionChanged = (event: SelectionChangedEvent) => {
  var rowCount = event.api.getSelectedNodes().length;
  setPros(rowCount  > 0);
  if (rowCount > 0) {
    const selectedData = event.api.getSelectedNodes()[0]?.data;
    if (selectedData) {
      // // // console.log(selectedData);
      setTeams5(selectedData.id)
      setTeams(selectedData.name)
      setTeams2(selectedData.position)
      setTeams3(selectedData.link)
      setTeams4(selectedData.quotes)
    }
  }
};


  getKaryawan().then((data : any) => {
    // // // // console.log('konsul ->', data);
    // gridRefDokumen.api.setColumnDefs(konsultasi);
    setDatareports(data)
    gridRefTeams.api.setRowData(data);
  })



  const [datareports, setDatareports] = createStore([
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

  // const isRowSelectable :any = (params : any) => {
  //   // // // console.log("params: ", params)
  //   // return (params: IRowNode<IOlympicData>) => {
  //   //   return !!params.data.id;
  //   // };
  // } ;

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

    const [inputValueeee, setInputValueeee] = createSignal("");
    const [inputValueeee1, setInputValueeee1] = createSignal("");
    const [inputValueeee3, setInputValueeee3] = createSignal("");
    const [inputValueeee4, setInputValueeee4] = createSignal("");
    const [inputValueeee5, setInputValueeee5] = createSignal("");
    const [isKosong, setIsKosong] = createSignal(false);
    const hasil6 = async () => {


        setIsKosong(false);
        // // // console.log("name ->", inputValueeee());
        // // // console.log("quotes ->", inputValueeee1());
        // // // console.log("position ->", inputValueeee3());
        // // // console.log("link ->", inputValueeee4());
        // // // console.log("img ->", inputValueeee5());

        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        // // // // console.log("gender ->", RadioValue1());
        // // // // console.log("gender ->", RadioValue2());
        if (inputValueeee() == "", inputValueeee1() == "",inputValueeee3() == "",inputValueeee4() == "",base64Data() == "") {

          setIsKosong(true);

        } else {
          Inputkaryawan({
            id_user: 6,
            name: inputValueeee(),
            quotes: inputValueeee1(),
            date_creation: todayDate,
            position: inputValueeee3(),
            link: inputValueeee4(),
            img_teams: base64Data(),

        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
      }
    };

    const [inputValues, setInputValues] = createSignal("");
    const [inputValues1, setInputValues1] = createSignal("");
    const [inputValues2, setInputValues2] = createSignal("");
    const [inputValues3, setInputValues3] = createSignal("");
    const [inputValues4, setInputValues4] = createSignal("");
    // const [isKosong, setIsKosong] = createSignal(false);
    const updateteam = async () => {


        setIsKosong(false);
        // // // console.log("name ->", inputValues());
        // // // console.log("quotes ->", inputValues1());
        // // // console.log("position ->", inputValues2());
        // // // console.log("link ->", inputValues3());
        // // // console.log("img ->", inputValues4());

        var todayDate = new Date().toISOString().slice(0, 10);
        // // // console.log(todayDate);

        // // // // console.log("gender ->", RadioValue1());
        // // // // console.log("gender ->", RadioValue2());
        // if (inputValueeee() == "", inputValueeee1() == "",inputValueeee3() == "",inputValueeee4() == "",base64Data() == "") {

        //   setIsKosong(true);

        // } else {
          updateteams({
            id: teams5(),
            name: inputValues(),
            quotes: inputValues1(),
            position: inputValues2(),
            link: inputValues3(),
            img_teams: base64Data(),

        }).then((data: any) => {
            // // // console.log("detail account->", data);
        });
      // }
    };

    const delete34 = async () => {

      deleteTeams(teams5()).then((data : any) => {
        // // // // console.log('konsul ->', data);
        // gridRefDokumen.api.setColumnDefs(konsultasi);
        setDatareports(data)
        gridRefTeams.api.setRowData(data);
      })
    }
  return (
    <>
      <div class="warna">
        
        <div class="gimme" style="width:40%">

        <h2 class="jdlx" style="font-size: 25px;margin-left: 3%; margin-top: 3%; font-weight: bold;">Teams</h2>
            <Show
                when={pros()} 
                fallback={<label for="my_modal_10" style="margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

                  <div class="perindo" style="display:flex;">
                  <label for="tambah"  style="margin-top: -2vh; margin-left: 83%; display: grid; width:5%">
                  <label for="my_modal_10" style="margin-top: 0vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
                                  </label>
                                  <label for="my_modal_4"  class="CRUD 1" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3/> </label>
                                  <label for="my_modal_12" class="CRUD 2" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>
                  
                                  </div>
              </Show>
              <input type="checkbox" id="my_modal_10" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box" style="width:100%; height:70%;">
                    <label for="my_modal_10" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                    <div class="TTL3" style="font-weight: bold;font-size: 24px;text-align: center; color:#082032">Add</div>
                    <input type="text" placeholder="Name" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueeee(f.currentTarget.value); }} />
                    <input type="text" placeholder="Position" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
                    <input type="text" placeholder="Link" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;;" onchange={(f) => { setInputValueeee4(f.currentTarget.value); }} />
                    <input type="text" placeholder="Quotes" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueeee1(f.currentTarget.value); }} />
                    <input type="file" onChange={handleFileChange} class='nplot' style="width:90%; height:31px; margin-top:150px; border: 1px solid #545454; margin-left:-36vw; " onchange={(f) => { setInputValueeee5(f.currentTarget.value); }} />
                      <div class="modal-action"> 
                      <label for="my_modal_10" style="color:white; width:90%; margin-top:3vw; margin-left:1vw; background:#082032;" class="btn worldpost" onClick={hasil6}>SUBMIT</label>
                      </div>
                    </div>
                  </div>

                  <input type="checkbox" id="my_modal_4" class="modal-toggle" />
                  <div class="modal">
                    <div class="modal-box" style="width:100%; height:70%;">
                    <label for="my_modal_4" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                    <div class="TTL3" style="font-weight: bold;font-size: 24px;text-align: center; color:#082032"> Edit</div>
                    <input type="text" placeholder="Name" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValues(f.currentTarget.value);}} value={teams()} />
                    <input type="text" placeholder="Position" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => {  setInputValues2(f.currentTarget.value);}} value={teams2()} />
                    <input type="text" placeholder="Link" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => {  setInputValues3(f.currentTarget.value);}} value={teams3()} />
                    <input type="text" placeholder="Quotes" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => {  setInputValues1(f.currentTarget.value);}} value={teams4()} />
                    <input type="file" onChange={handleFileChange} class='nplot' style="width:90%; height:31px; margin-top:150px; border: 1px solid #545454; margin-left:-36vw; " onchange={(f) => { setInputValueeee5(f.currentTarget.value); }} />
                      <div class="modal-action"> 
                      <label for="my_modal_4" style="color:white; width:90%; margin-top:; margin-left:1vw; background:#082032;" class="btn pst" onClick={updateteam}>SUBMIT</label>
                      </div>
                    </div>
                  </div>
                  
                  <input type="checkbox" id="my_modal_12" class="modal-toggle" />
                  <div class="modal">
                        <div class="modal-box" style="width:100%; height:30%;">
                            <label for="my_modal_12" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                            <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
                            <div class="modal-action">
                                <label for="my_modal_12" style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={delete34}>Yes</label>
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

         
         
          <div class="ag-theme-alpine" style="font-family:'pm'; width: 100%; height: 349px; margin-top:12%;--ag-header-background-color: #082032; --ag-borders: none;">
            <AgGridSolid
              columnDefs={reports}
              rowData={datareports}
              defaultColDef={defaultColDef}
              ref={gridRefTeams!}
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

export default Tableteams;