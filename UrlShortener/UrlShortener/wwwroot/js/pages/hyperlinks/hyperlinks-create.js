(function ($, undefined) {
    // Element Constants
    const REQUEST_VERIFICATION_FIELD_SELECTOR = '[name="__RequestVerificationToken"]';
    const LINK_ORIG_NAME_SELECTOR = '[name = "linkOrig"]';
    var initial_form_state = $('#create-link').serialize();

    // Event Constants
    const SUBMIT_EVENT = 'submit';
    const LOAD_EVENT = 'load';
    const UNLOAD_EVENT = 'beforeunload';
    const CHANGE_EVENT = 'change';

    // Helpers
    const formHelper = new FormHelper();
    const serviceHelper = new ServiceHelper();

    // Messages
    const UNLOAD_MESSAGE = "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";

    // Services
    //const hyperlinkService = new HyperLinkServices();

    // Selector Constants
    const CREATE_FORM_ID = 'create-link';

    // URL Constants
    const HYPERLINKS_INDEX_URL = '/HyperLinks';

    // Utility Constants
    const REQUEST_VERIFICATION_TOKEN = 'RequestVerificationToken';
    const CLASS_SELECTOR = '.';
    const ID_SELECTOR = '#';

    // Methods
    let attachEvent = function () {
        getElementById(CREATE_FORM_ID).on(SUBMIT_EVENT, onCreateFormSubmit);
        getElementById(CREATE_FORM_ID).on(CHANGE_EVENT, getElementByClass('form-control'), onInputChange);
    };

    let getElementByClass = function (className) {
        return $(CLASS_SELECTOR + className);
    };

    let getElementById = function (id) {
        return $(ID_SELECTOR + id);
    };

    let onCreateFormSubmit = function (e) {
        initial_form_state = getElementById(CREATE_FORM_ID).serialize();

        e.preventDefault();

        if ($(this).valid()) {
            let json = formHelper.deserialize(this);

            delete json.__RequestVerificationToken;

            jsonString = JSON.stringify(json);

            serviceHelper.createService({
                url: '/HyperLinks/Create',
                data: jsonString,
                callback: window.location.href = HYPERLINKS_INDEX_URL
            });
        }
    };

    let onInputChange = function () {
        let nameInput = $(LINK_ORIG_NAME_SELECTOR).val();

        $(LINK_ORIG_NAME_SELECTOR).val($.trim(nameInput));
    };

    let onRequestBeforeSend = function (request) {
        request.setRequestHeader(REQUEST_VERIFICATION_TOKEN, $(REQUEST_VERIFICATION_FIELD_SELECTOR).val());
    };

    $(window).on(LOAD_EVENT, function () {
        attachEvent();
        initial_form_state = getElementById(CREATE_FORM_ID).serialize();
    });

    $(window).on(UNLOAD_EVENT, function (e) {
        let form_state = getElementById(CREATE_FORM_ID).serialize();
        if (initial_form_state !== form_state) {
            e.returnValue = UNLOAD_MESSAGE;
            return UNLOAD_MESSAGE;
        }
    });
}(jQuery));