(function ($) {
    // Event Constants
    const LOAD_EVENT = 'load';
    const CLICK_EVENT = 'click';
    const KEYDOWN_EVENT = 'keydown';

    // Field Constants
    const LINK_ORIG_FIELD = 'txt-link';

    // Helper Constants
    const gridHelper = new GridHelper();
    // Service Constants
    const linksService = new LinkServices();

    // Kendo Grid Data Source Constants
    const COUNT_KEY = 'count';
    const DATA_KEY = 'data';

    // Message Constants
    const CONFIRM_DELETE_LINK_MESSAGE = 'Are you sure you want to delete ';

    // Selector Constants
    const ACTION_BUTTONS_TEMPLATE_ID = 'action-buttons-template';
    const LINKS_GRID_ID = 'links-grid';
    const TOOLBAR_TEMPLATE_ID = 'toolbar-template';
    const STRING_SEARCH_ID = 'searchString';
    const BUTTON_SEARCH_ID = 'btnSearch';
    const DELETE_LINK_CLASS = 'delete-link';
    const K_HEADER_CLASS = '.k-header';

    // TItle Constants
    const NAME_TITLE = 'Name';

    // Utility Constants
    const ID_SELECTOR = '#';
    const CLASS_SELECTOR = '.';
    const FALSE = false;
    const TRUE = true;
    const EMPTY_STRING = '';

    let getClassSelector = function (classElement) {
        return CLASS_SELECTOR + classElement;
    };

    let getElementById = function (idElement) {
        return $(ID_SELECTOR + idElement);
    };

    let getElementByClass = function (classElement) {
        return $(CLASS_SELECTOR + classElement);
    };

    let attachEvents = function () {
        getElementById(BUTTON_SEARCH_ID).on(CLICK_EVENT, onSearchIconClicked);
        getElementById(STRING_SEARCH_ID).on(KEYDOWN_EVENT, onEnterPressed);
        getElementById(LINKS_GRID_ID).on(CLICK_EVENT,
            getClassSelector(DELETE_LINK_CLASS),
            onCategoryDeleteIconClicked);
    };

    let getLinks = function (search, skip, take, field, direction, callback) {
        linksService.searchLink({
            search: search,
            skip: skip,
            take: take,
            field: field,
            direction: direction,
            callback: callback
        });
    };

    let onCategoryDeleteIconClicked = function () {
        let selectedData = gridHelper.getSelectedItem({
            id: LINKS_GRID_ID
        });

        kendo.confirm(CONFIRM_DELETE_LINK_MESSAGE + selectedData.categoryName + '?')
            .done(function () {
                linksService.deleteCategory({
                    id: selectedData.linkId,
                    callback: gridHelper.removeItem({
                        id: LINKS_GRID_ID,
                        selectedData: selectedData
                    })
                });
                location.reload();
            });
    };

    let onEnterPressed = function (e) {
        if (e.which === 13) {
            onSearchIconClicked();
        }
    };

    let onSearchIconClicked = function () {
        let searchString = getElementById(STRING_SEARCH_ID).val();
        renderLinksGrid(searchString);
    };

    let renderLinksGrid = function (searchString) {
        gridHelper.renderWithTransport({
            id: LINKS_GRID_ID,
            options: {
                transport: {
                    read: function (options) {
                        let search = searchString || EMPTY_STRING;
                        let skip = options.data.skip;
                        let take = options.data.take;
                        let field = EMPTY_STRING;
                        let direction = EMPTY_STRING;

                        if (options.data.sort && options.data.sort.length) {
                            field = options.data.sort[0].field;
                            direction = options.data.sort[0].dir;
                        }

                        getLinks(search, skip, take, field, direction, options.success);
                    }
                },
                schema: {
                    data: DATA_KEY,
                    total: COUNT_KEY
                },
                toolbar: kendo.template(getElementById(TOOLBAR_TEMPLATE_ID).html()),
                sortable: {
                    mode: "multiple",
                    allowUnsort: true
                },
                columns: [{
                    field: LINK_ORIG_FIELD,
                    title: NAME_TITLE
                },
                {
                    template: kendo.template(getElementById(ACTION_BUTTONS_TEMPLATE_ID).html()),
                    width: 120
                }]
            }
        });
    };

    let sort = function () {
        $(K_HEADER_CLASS).trigger(CLICK_EVENT);
    };

    $(window).on(LOAD_EVENT, function () {
        renderLinksGrid();
        sort();
        attachEvents();
    });
})(jQuery);