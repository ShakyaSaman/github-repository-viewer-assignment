import { useContext, useState } from 'react';
import {GHStateContext} from '../contexts/GHContext'
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';


const Table: React.FC = () => {
  
    const context = useContext(GHStateContext);

    const { tableData,loading} = context;

    const columnDefs = [
      { headerName: 'ID', field: 'id' },
      { headerName: 'Name', field: 'name' },
      { headerName: 'Privacy', field: 'private' },
      { headerName: 'Description', field: 'description' },
      { headerName: 'Fork', field: 'fork' },
      { headerName: 'Url', field: 'url' },
      { headerName: 'Language', field: 'language' },
      { headerName: 'Clone Url', field: 'clone_url' },
      { headerName: 'Visibility', field: 'visibility'},
      
    ];
  
    return (
      <div className="ag-theme-alpine" style={{ height: 400, width: 800, margin:"2% auto" }}>
        {loading ? "LOADING..." : (
          <AgGridReact
          columnDefs={columnDefs}
          rowData={tableData}
          pagination={true}
          paginationPageSize={10}
          domLayout='autoHeight'
        />
        )}
       
      </div>
    );
  };
  
  export default Table;