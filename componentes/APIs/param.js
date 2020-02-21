function insertParam(key, value) {
    key = encodeURIComponent(key); value = encodeURIComponent(value);
    var s = document.location.search;
    var kvp = key + "=" + value;
    var r = new RegExp("(&|\\?)" + key + "=[^\&]*");
    s = s.replace(r, "$1" + kvp);
    if (!RegExp.$1) { s += (s.length > 0 ? '&' : '?') + kvp; };
    document.location.search = s;
}

function getParam(param) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'), sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === param) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function getModulo() {
    
}