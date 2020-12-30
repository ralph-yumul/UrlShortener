function ServiceHelper() {
    // Data Type Constants
    const JSON_DATA = 'json';

    // Http Method Constants
    const HTTP_GET = 'GET';
    const HTTP_POST = 'POST';
    const HTTP_PUT = 'PUT';

    // Utility Constants
    const APPLICATION_JSON = 'application/json';
    const FALSE = false;


    this.createService = function (params) {
        console.log(params);
        $.ajax({
            url: params.url,
            method: HTTP_POST,
            contentType: APPLICATION_JSON,
            //beforeSend: params.beforeSend,
            data: params.data,
            success: params.callback
        });
    };
}