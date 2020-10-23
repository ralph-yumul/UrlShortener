(function ($, undefined) {
    // Element Constants
    const REQUEST_VERIFICATION_FIELD_SELECTOR = '[name="__RequestVerificationToken"]';
    const CATEGORY_NAME_SELECTOR = '[name = "categoryName"]';
    var initial_form_state = $('#create-category').serialize();

    // Event Constants
    const SUBMIT_EVENT = 'submit';
    const LOAD_EVENT = 'load';
    const UNLOAD_EVENT = 'beforeunload';
    const CHANGE_EVENT = 'change';

    // Helpers
    const formHelper = new FormHelper();

    // Messages
    const UNLOAD_MESSAGE = "You have unsaved changes on this page. Do you want to leave this page and discard your changes or stay on this page?";

    // Services
    const categoryService = new CategoryService();

    // Selector Constants
    const CREATE_FORM_ID = 'create-category';

    // URL Constants
    const CATEGORY_URL = '/Category';

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

            categoryService.create({
                data: jsonString,
                callback: window.location.href = CATEGORY_URL
            });
        }
    };

    let onInputChange = function () {
        let nameInput = $(CATEGORY_NAME_SELECTOR).val();

        $(CATEGORY_NAME_SELECTOR).val($.trim(nameInput));
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