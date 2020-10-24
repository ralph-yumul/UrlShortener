function LinkServices() {

    // Data Type Constants
    const JSON_DATA = 'json';

    // Http Method Constants
    const HTTP_GET = 'GET';
    const HTTP_POST = 'POST';
    const HTTP_PUT = 'PUT';


    // URL Constants
    const CREATE_LINK_URL = '/Links/Create';
    const DELETE_LINK_URL = '/Links/Delete/';
    const GET_ALL_URL = '/Links/GetAll';
    const GET_LINK_URL = '/Links/Get';
    const SEARCH_LINK_URL = '/Links/GetAsync/';
    const EDIT_LINK_URL = '/Links/Edit/';


    // Utility Constants
    const APPLICATION_JSON = 'application/json';
    const FALSE = false;


    this.createLink = function (params) {
        $.ajax({
            url: CREATE_LINK_URL,
            method: HTTP_POST,
            contentType: APPLICATION_JSON,
            //beforeSend: params.beforeSend,
            data: params.data,
            success: params.callback
        });
    };

    this.deleteLink = function (params) {
        $.ajax({
            url: DELETE_LINK_URL + params.id,
            method: HTTP_PUT,
            contentType: APPLICATION_JSON,
            success: params.callback
        });
    };

    this.getLink = function (params) {
        $.ajax({
            cache: FALSE,
            url: GET_LINK_URL + params.id,
            method: HTTP_GET,
            success: params.callback
        });
    };

    this.getAllLinks = function (params) {
        $.ajax({
            cache: FALSE,
            url: GET_ALL_URL,
            dataType: JSON_DATA,
            success: params.callback
        });
    };

    this.searchLink = function (params) {
        $.ajax({
            cache: FALSE,
            url: SEARCH_LINK_URL,
            method: HTTP_POST,
            contentType: APPLICATION_JSON,
            data: JSON.stringify({
                search: params.search,
                skip: params.skip,
                take: params.take,
                field: params.field,
                direction: params.direction
            }),
            success: params.callback
            
        });
    };

    this.updateLink = function (params) {
        console.log(params);
        $.ajax({
            url: EDIT_LINK_URL + params.id,
            method: HTTP_PUT,
            contentType: APPLICATION_JSON,
            data: params.data,
            success: params.callback
        });
    };
}