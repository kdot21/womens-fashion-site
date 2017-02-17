function getUrlVars() {
   var vars = [], hash;
   var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

   for(var i = 0; i < hashes.length; i++)
       {
        hash = hashes[i].split('=');
        vars.push(hash[1]);
        vars[hash[0]] = hash[1];
        }
    return vars;
}
var get = getUrlVars();


document.addEventListener('DOMContentLoaded', function() {
  console.log('this is after the dom loaded');

get;
document.getElementById("dress-label").value = (get)[0]
document.getElementById("shoe-label").value = (get)[2];
document.getElementById("bag-label").value = (get)[1];


console.log(window.location)
});
