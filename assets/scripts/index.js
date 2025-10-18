(function() {
    document.addEventListener('DOMContentLoaded', function() {
        if (window.console) {
            console.log('williamwdoyle.com loaded...');
        }

        var send = wwd.getSingle('.test');
        var form = wwd.getSingle('.form');

        if (send) {
            send.addEventListener('click', function() {
                if (wwd.validateForm(form)) {
                    var serializedForm = wwd.serializeForm(form);

                    if (!serializedForm) return
                    
                    wwd.sendForm(serializedForm);
                } else {
                    var errors = wwd.getErrors();
                }
            });
        }
    });
}());