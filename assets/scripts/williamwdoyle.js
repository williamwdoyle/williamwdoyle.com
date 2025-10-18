(function(root, factory) {
    root.wwd = factory();
})(this, function() {
    var formErrors = [];

    return {
        getErrors: function() {
            return formErrors;
        },

        getSingle: function(selector, parent) {
            return typeof parent !== 'undefined'
                ? parent.querySelector(selector)
                : document.querySelector(selector);
        },

        getMultiple: function(selector, parent) {
            return typeof parent !== 'undefined'
                ? parent.querySelectorAll(selector)
                : document.querySelectorAll(selector);
        },

        sendForm(json) {
            if (!json) return;

            axios({
                method: 'post',
                url: 'mail.php',
                data: json
            });
        },

        serializeForm(form) {
            var serial = {};
            var input, inputs;

            if (!form) return null;
            
            inputs = this.getMultiple('input, textarea', form);
            for (var i = 0, j = inputs.length; i < j; i++) {
                input = inputs[i]
                serial[input.id] = input.value && input.value.replace(/^\s+|\s+$/, '');
            }

            return serial;
        },

        validateForm(form) {
            formErrors = [];

            if (!form) return false;

            return true;
        }
    };
});