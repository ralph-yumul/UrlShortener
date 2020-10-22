function FormHelper() {

    // Element Constants
    const INPUT_SELECT_TEXTAREA_SELECTOR = 'input, select, textarea';

    // Attributes Constants
    const ATTRIBUTE_NAME = 'name';

    this.deserialize = function (form) {
        let json = {};

        $.each($(INPUT_SELECT_TEXTAREA_SELECTOR, form), function () {
            var name = $(this).attr(ATTRIBUTE_NAME);
            var value = $(this).val();

            if (name !== undefined)
                json[name] = value;
        });

        return json;
    };
}