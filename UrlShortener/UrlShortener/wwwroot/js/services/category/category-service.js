function CategoryService() {

    // Data Type Constants
    const JSON_DATA = 'json';

    // Http Method Constants
    const HTTP_GET = 'GET';
    const HTTP_POST = 'POST';
    const HTTP_PUT = 'PUT';


    // URL Constants
    const CREATE_CATEGORY_URL = '/Category/Create';
    const DELETE_CATEGORY_URL = '/Category/Delete/';
    const GET_ALL_URL = '/Category/GetAll';
    const GET_CATEGORY_URL = '/Category/Get/';
    const SEARCH_CATEGORY_URL = '/Category/GetAsync/';
    const EDIT_CATEGORYE_URL = '/Category/Edit/';


    // Utility Constants
    const APPLICATION_JSON = 'application/json';
    const FALSE = false;


    this.create = function (params) {
        $.ajax({
            url: CREATE_CATEGORY_URL,
            method: HTTP_POST,
            contentType: APPLICATION_JSON,
            //beforeSend: params.beforeSend,
            data: params.data,
            success: params.callback
        });
    };

    this.deleteCategory = function (params) {
        $.ajax({
            url: DELETE_CATEGORY_URL + params.id,
            method: HTTP_PUT,
            contentType: APPLICATION_JSON,
            success: params.callback
        });
    };

    this.get = function (params) {
        $.ajax({
            cache: FALSE,
            url: GET_CATEGORY_URL + params.id,
            method: HTTP_GET,
            success: params.callback
        });
    };

    this.getAll = function (params) {
        $.ajax({
            cache: FALSE,
            url: GET_ALL_URL,
            dataType: JSON_DATA,
            success: params.callback
        });
    };

    this.searchCategory = function (params) {
        $.ajax({
            cache: FALSE,
            url: SEARCH_CATEGORY_URL,
            method: HTTP_POST,
            contentType: APPLICATION_JSON,
            data: JSON.stringify({
                'search': params.search,
                'skip': params.skip,
                'take': params.take,
                'field': params.field,
                'direction': params.direction
            }),
            success: params.callback
        });
    };

    this.updateCategory = function (params) {
        console.log(params);
        $.ajax({
            url: EDIT_CATEGORYE_URL + params.id,
            method: HTTP_PUT,
            contentType: APPLICATION_JSON,
            data: params.data,
            success: params.callback
        });
    };
}