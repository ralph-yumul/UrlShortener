(function ($) {
    // Event Constants
    const LOAD_EVENT = 'load';
    const CLICK_EVENT = 'click';
    const KEYDOWN_EVENT = 'keydown';

    // Field Constants
    const CATEGORY_NAME_FIELD = 'categoryName';

    // Helper Constants
    const gridHelper = new GridHelper();

    // Kendo Grid Data Source Constants
    const COUNT_KEY = 'count';
    const DATA_KEY = 'data';

    // Message Constants
    const CONFIRM_DELETE_CATEGORY_MESSAGE = 'Are you sure you want to delete ';

    // Service Constants
    const categoryService = new CategoryService();

    // Selector Constants
    const ACTION_BUTTONS_TEMPLATE_ID = 'action-buttons-template';
    const CATEGORY_GRID_ID = 'category-grid';
    const TOOLBAR_TEMPLATE_ID = 'toolbar-template';
    const STRING_SEARCH_ID = 'searchString';
    const BUTTON_SEARCH_ID = 'btnSearch';
    const DELETE_CATEGORY_CLASS = 'delete-category';
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
        getElementById(CATEGORY_GRID_ID).on(CLICK_EVENT,
            getClassSelector(DELETE_CATEGORY_CLASS),
            onCategoryDeleteIconClicked);
    };

    let getCategories = function (search, skip, take, field, direction, callback) {
        categoryService.searchCategory({
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
            id: CATEGORY_GRID_ID
        });

        kendo.confirm(CONFIRM_DELETE_CATEGORY_MESSAGE + selectedData.categoryName + '?')
            .done(function () {
                categoryService.deleteCategory({
                    id: selectedData.categoryId,
                    callback: gridHelper.removeItem({
                        id: CATEGORY_GRID_ID,
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
        renderCategoryGrid(searchString);
    };

    let renderCategoryGrid = function (searchString) {
        gridHelper.renderWithTransport({
            id: CATEGORY_GRID_ID,
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

                        getCategories(search, skip, take, field, direction, options.success);
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
                    field: CATEGORY_NAME_FIELD,
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
        renderCategoryGrid();
        sort();
        attachEvents();
    });
})(jQuery);