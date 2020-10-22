function VendorDropdownHelper() {

    // Selectors
    const ALL_VENDORS = 'All Vendors';

    // Services
    const vendorService = new VendorService();

    // Utilities
    const ALL_VENDOR_ITEM = {
        vendorName: ALL_VENDORS,
        vendorId: 0
    };
    const ID_SELECTOR = '#';
    const OPTION = 'option';

    let getElementById = function (idElement) {
        return $(ID_SELECTOR + idElement);
    };

    let clearDropdown = function (id) {
        getElementById(id).find(OPTION).remove();
    };

    let onVendorsRetrieved = function (data, selector, includeAll) {

        clearDropdown(selector);

        if (includeAll === true) {
            data.unshift(ALL_VENDOR_ITEM);
        }

        $.each(data, function (i, val) {
            $('<option/>', {
                text: val.vendorName,
                value: val.vendorId
            }).appendTo(getElementById(selector));
        });

        events.publish('vendorFiltered', data);
    };

    this.render = function (selector, includeAll) {
        vendorService.getAllActive({
            callback: function (data) {
                onVendorsRetrieved(data, selector, includeAll);
            }
        });
    };
}