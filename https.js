(function(){
var url = window.location.href;
if(url.indexOf("http://")===0) {
window.location.replace(location.href.replace(url.substring(0,7), "https://"));
}
})();