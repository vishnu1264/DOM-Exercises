var checkboxSelection = function (params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  var headerCheckboxSelection = function (params) {
    // we put checkbox on the name if we are not doing grouping
    return params.columnApi.getRowGroupColumns().length === 0;
  };
  const columnDefs = [
    { field: "OrderID", sortable: true, filter: true},
    { field: "OrderDate", sortable: true, filter: true },
    { field: "Freight", sortable: true, filter: true },
    { field: "ShipCity", sortable: true, filter: true },
    { field: "ShipCountry", sortable: true, filter: true }
  ];
  
  var autoGroupColumnDef = {
    headerName: 'Group',
    minWidth: 170,
    field: 'athlete',
    valueGetter: function (params) {
      if (params.node.group) {
        return params.node.key;
      } else {
        return params.data[params.colDef.field];
      }
    },
    headerCheckboxSelection: true,
    cellRenderer: 'agGroupCellRenderer',
    cellRendererParams: {
      checkbox: true,
    },
  };
  
  const gridOptions = {
    defaultColDef: {
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      sortable: true,
      resizable: true,
      filter: true,
      flex: 1,
      minWidth: 100,
    },
    suppressRowClickSelection: true,
    groupSelectsChildren: true,
    // debug: true,
    rowSelection: 'multiple',
    rowGroupPanelShow: 'always',
    pivotPanelShow: 'always',
    enableRangeSelection: true,
    columnDefs: columnDefs,
    pagination: true,
    paginationPageSize: 5,
    autoGroupColumnDef: autoGroupColumnDef,
    onFirstDataRendered: onFirstDataRendered,
    paginationNumberFormatter: function (params) {
      return '[' + params.value.toLocaleString() + ']';
    },
  };
  
  function onFirstDataRendered(params) {
    params.api.paginationGoToPage(0);
  }
  
  function onPageSizeChanged() {
    var value = document.getElementById('page-size').value;
    gridOptions.api.paginationSetPageSize(Number(value));
  }
  
  // setup the grid after the page has finished loading
  document.addEventListener('DOMContentLoaded', function () {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);
  
    agGrid.simpleHttpRequest({
        url: 'https://mocki.io/v1/f82f7143-7a26-4a91-aed7-20dcc89a7ad3'
    })
    
    .then(function(data){
        gridOptions.api.setRowData(data);
    })
  });
  