import { createSignal, type Component, onMount, For, Show } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import foto from "../assets/huawei-logo.png";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./tabelclient.css";
import { createStore } from "solid-js/store";
import { AiOutlineDownload } from 'solid-icons/ai';
import { style } from "solid-js/web";
import { deleteclient, getClient, input_client } from "../service/Service";
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'
import { SelectionChangedEvent } from 'ag-grid-community';


const TableClient: Component = () => {
  let gridRefClient: AgGridSolidRef;

  const [clien, setClien] = createSignal(false);
  const [form2, setForm2] = createSignal("");
  const [inputValue, setInputValue] = createSignal("");
  const [inputValueeee5, setInputValueeee5] = createSignal("");
  const [isOpen, setIsOpen] = createSignal(false);
  const [isEror, setIsEror] = createSignal(false);
  const [isKosong, setIsKosong] = createSignal(false);
  const [base64Data, setBase64Data] = createSignal('');
  const [cid, setCid] = createSignal("");
  const hasil1 = async () => {

    setIsOpen(false);
    setIsEror(false);
    setIsKosong(false);
    // // // console.log("img ->", inputValueeee5());
    var todayDate = new Date().toISOString().slice(0, 10);
    // // // console.log(todayDate);

    if (base64Data() == "", inputValue() == "") {

      setIsKosong(true);

    } else {
      input_client({
        id_user: 6,
        tittle: inputValue(),
        img_client: base64Data(),

      }).then((data: any) => {
        // // // console.log("detail account->", data);

        if (data == undefined) {
          setIsEror(true);
          // // // console.log("eror")
        }


        else if (data.status == 'OK') {
          setIsOpen(true);
          // // // console.log("OK")

        }
      });
    }


  };


  const [table]: any = createStore([
    { field: 'id', checkboxSelection: true },
    {
      field: 'tittle',
    }

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

  getClient().then((data: any) => {
    // // // // console.log('konsul ->', data);
    // gridRefDokumen.api.setColumnDefs(konsultasi);
    setDataclient(data)
    gridRefClient.api.setRowData(data);
  })


  const onSelectionChanged = (event: SelectionChangedEvent) => {
    var rowCount = event.api.getSelectedNodes().length;
    setClien(rowCount > 0);
    if (rowCount > 0) {
      const selectedData = event.api.getSelectedNodes()[0]?.data;
      if (selectedData) {
        // // // console.log(selectedData);
        setForm2(selectedData.tittle)
        setCid(selectedData.id)
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
  const [dataclient, setDataclient]: any = createStore([
    // {
    // title: 'Lorem Ipsum', content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', priority:'',
    // },

  ]);

  const defaultColDef = {
    flex: 1,
  };
  const delete22 = async () => {

    deleteclient(cid()).then((data: any) => {
      // // // // console.log('konsul ->', data);
      // gridRefDokumen.api.setColumnDefs(konsultasi);
      // setDataclient(data)
      // gridRefClient.api.setRowData(data);
      getClient().then((data: any) => {
        // // // // console.log('konsul ->', data);
        // gridRefDokumen.api.setColumnDefs(konsultasi);
        setDataclient(data)
        gridRefClient.api.setRowData(data);
      })



    })
  }

  return (
    <div class="latar">
      <div class="bks" style="width:40%; margin-top:-5vw">
        <h2 style="font-size: 25px;margin-left: 1%; margin-top: 3%; font-weight: bold;">Client</h2>

        <Show
          when={clien()}
          fallback={<label for="my_modal_11" style=" margin-top: -2vh; margin-left: 93%; display: grid; font-size:23px"><FaSolidPlus /></label>}>

          <div class="line_client" style="display:flex;">
            <label for="ex_modal_11" style="margin-top:margin-top: -2vh; margin-left: 83%; display: grid; width:5%">
              <label for="my_modal_11" style="margin-top: -2vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>

            </label>
            <label for="my_modal_3" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3 /> </label>

            <label for="my_modal_13" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>

          </div>
        </Show>
        <input type="checkbox" id="my_modal_11" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box" style="width:100%; height:40%;">
            <label for="my_modal_11" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg" style="font-size:24px; text-align: center;">ADD</h3>
            <h1 font-bold text-lg>Tittle</h1>
            <input type="text" placeholder="Tittle" class="oi input input-bordered inne1" style="width:90%; height:50px;margin-top:-3vw; border: 1px solid #545454; margin-left:32.5vw;" onchange={(f) => { setInputValue(f.currentTarget.value); }} />
            <h1 font-bold text-lg style="margin-top:75px">Upload</h1>
            <input type="file" onChange={handleFileChange} class='nplot' style="width:90%; height:31px; margin-top:-4vw; border: 1px solid #545454; margin-left:-36.5vw; " onchange={(f) => { setInputValueeee5(f.currentTarget.value); }} />
            <div class="modal-action">
              <div class="modal-action">
                <label for="my_modal_11" style="color:white; width:90%; margin-left:1vw; background:#082032; margin-top:-0.1px" class="btn habits" onClick={hasil1}>SUBMIT</label>
              </div>
            </div>
          </div>
        </div>

        <input type="checkbox" id="my_modal_3" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box" style="width:100%; height:40%;">
            <label for="my_modal_3" class="btn btn-sm btn-circle btn-ghost absolute right-2 tip-2">✕</label>
            <h3 class="font-bold text-lg" style="font-size:24px; text-align: center;">EDIT</h3>
            <h1 font-bold text-lg>Tittle</h1>
            <input type="text" placeholder="Tittle" class="oi input input-bordered inne1" style="width:90%; height:50px;margin-top:-3vw; border: 1px solid #545454; margin-left:32.5vw;" onchange={(f) => { setInputValue(f.currentTarget.value); }} value={form2()} />
            <input type="file" onChange={handleFileChange} class='nplot' style="width:90%; height:31px; margin-top:-5vw; border: 1px solid #545454; margin-left:-36.5vw; " onchange={(f) => { setInputValueeee5(f.currentTarget.value); }} />
            <div class="modal-action">
              <div class="modal-action">
                <label for="my_modal_3" style="color:white; width:90%; margin-left:1vw; background:#082032;" class="btn habits" onClick={hasil1}>SUBMIT</label>
              </div>
            </div>
          </div>
        </div>

        <input type="checkbox" id="my_modal_13" class="modal-toggle" />
        <div class="modal">
          <div class="modal-box" style="width:100%; height:30%;">
            <label for="my_modal_13" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
            <div class="p1" style="margin-top:20px; font-size: 20px;text-align: center;">Are you sure you want to delete this?</div>
            <div class="modal-action">
              <label for="my_modal_13" style="color:white; width:15%; margin-top:-0.1vw; margin-left:1vw; background:#082032; " class="btn worldpost" onClick={delete22}>Yes</label>
            </div>
          </div>
        </div>

        <div class="ag-theme-alpine" style="font-family:'pm'; width: 100%;height: 307px;--ag-borders: none;--ag-header-background-color: #093032;--ag-row-border-color: #083032;">
          <AgGridSolid
            columnDefs={table}
            rowData={dataclient}
            defaultColDef={defaultColDef}
            ref={gridRefClient!}
            paginationAutoPageSize={true}
            pagination={true}
            onSelectionChanged={onSelectionChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default TableClient;