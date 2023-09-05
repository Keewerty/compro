import { createSignal, type Component, onMount, For } from "solid-js";
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import foto from "../assets/huawei_logo_icon-48baa4d7.png";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "./tabelproject.css";
import { createStore } from "solid-js/store";
import { AiOutlineDownload } from 'solid-icons/ai';
import { style } from "solid-js/web";
import { getProject } from "../service/Service";
import {SelectionChangedEvent} from 'ag-grid-community';

const [well, setWell] = createSignal('');

const TableProject: Component = () => {
  let gridRefProject: AgGridSolidRef;

  const [table]: any = createStore([
    { field: 'content' ,
      checkboxSelection: true,
      },
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
    // // // console.log('konsul ->', data);
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
    // window.alert('selection changed, ' + rowCount + ' rows selected');
    // // // console.log(event.api.getSelectedNodes()[0].data);

  };

  const defaultColDef = {
    flex: 1,
  };

  return (
    <>
    <div class="latar2">
        <div class="bungkusan2">
        <label for="plus2" class="btn btn-circle btn-outline btn-sm " style="margin-top: 4vh; background-color: #red; margin-left:90%; font-size:35px; ">
        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 8 8"><path fill="currentColor" d="M3 0v3H0v2h3v3h2V5h3V3H5V0H3z" />
                        </svg>
                            </label>

        <div class="ag-theme-alpine" style="width: 78%;height: 346px;margin-left: 121px;padding-top: 1px;--ag-borders: none;--ag-header-background-color: white;--ag-row-border-color: none;">
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
    </>
  );
};

export default TableProject;