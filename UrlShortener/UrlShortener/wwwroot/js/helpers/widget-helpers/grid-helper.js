function GridHelper() {
    // Utility Constants
    const ID_SELECTOR = '#';
    const TRUE = true;
    const FALSE = false;
    const undefined = 'undefined';

    // Selector Constants
    const KENDO_GRID = 'kendoGrid';

    /*
        PRIVATE MEMBERS
     */

    let _getDataSource = function (id) {
        return $(ID_SELECTOR + id).data(KENDO_GRID).dataSource;
    };

    let _getDataItem = function (id) {
        let gridData = _getGridData(id);
        return gridData.dataItem(gridData.select());
    };

    let _getGrid = function (id) {
        return $(ID_SELECTOR + id).kendoGrid();
    };

    let _getGridData = function (id) {
        return $(ID_SELECTOR + id).data(KENDO_GRID);
    };

    let _transformConfigurations = function (params) {
        let input = params || {};
        let dataSource = {
            aggregate: input.aggregate || FALSE
        };

        let config = {
            columns: input.columns,
            toolbar: input.toolbar,
            scrollable: input.scrollable || FALSE,
            selectable: input.selectable || TRUE,
            pageable: input.pageable || { pageSizes: [10, 20] },
            sortable: input.sortable || TRUE,
            detailInit: input.detailInit || FALSE,
            dataBound: input.dataBound || FALSE
        };

        if (typeof input.transport !== undefined) {
            dataSource.transport = input.transport;
            dataSource.serverPaging = TRUE;
            dataSource.serverSorting = TRUE;
            dataSource.serverFiltering = TRUE;
        }

        if (typeof input.schema !== undefined) {
            dataSource.schema = {
                data: input.schema.data,
                total: input.schema.total
            };
        }

        if (input.pageSize !== undefined)
            dataSource.pageSize = input.pageSize || 10;

        config.dataSource = dataSource;

        return config;
    };

    let _transformOptions = function (params) {
        let input = params || {};

        return {
            dataSource: input.dataSource,
            columns: input.columns,
            toolbar: input.toolbar,
            height: input.height,
            pageSize: input.pageSize || 5,
            pageable: {
                pageSizes: [5, 10, 20]
            },
            scrollable: input.scrollable || TRUE,
            selectable: input.selectable || TRUE,
            sortable: input.sortable || TRUE
        };
    };

    /*
        PUBLIC MEMBERS
     */

    this.render = function (params) {
        let input = params || {};
        let options = _transformOptions(input.options);
        let grid = _getGrid(input.id);

        if (typeof grid !== undefined) {
            grid.kendoGrid(options);
        }
    };

    this.getSelectedItem = function (params) {
        let input = params || {};
        return _getDataItem(input.id);
    };

    this.removeItem = function (params) {
        let input = params || {};
        let grid = _getGridData(input.id);

        grid.dataSource.remove(input.selectedData);
        grid.refresh();

        if (grid.dataSource.view().length === 0) {
            let currentPage = grid.dataSource.page();
            if (currentPage > 1) {
                grid.dataSource.page(currentPage - 1);
            }
        }
    };

    this.renderWithTransport = function (params) {
        let input = params || {};
        let configuration = _transformConfigurations(input.options);
        let grid = _getGrid(input.id);

        if (grid !== undefined) {
            grid.kendoGrid(configuration);
        }
    };

    this.setDataSource = function (params) {
        let input = params || {};
        let dataSource = _getDataSource(input.id);

        if (typeof dataSource !== undefined) {
            dataSource.data(input.data);
            dataSource.page(1);
        }
    };
}