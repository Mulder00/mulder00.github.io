// Parse the URL parameter
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
// Give the parameter a variable name
var dynamicContent = getParameterByName('box');


$(document).ready(function () {
    // Check if the URL parameter is apples
    if (dynamicContent == 'in') {
        $('#boxin').show();
    }
    // Check if the URL parameter is oranges
    else if (dynamicContent == 'out') {
        $('#boxout').show();
    } else
        $('#boxdefault').show();
});