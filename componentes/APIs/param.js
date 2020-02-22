function getParam() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function addParam(param, value) {
    if(param != "") {
        window.history.replaceState( {} , "", "?" + param + "=" + value);
    }
}

function removeParam() {
    window.history.replaceState(null, null, window.location.pathname);
}