
const form = document.getElementById('#form1');
form.addEventListener('submit',
function(e){
e.defaultPrevented();
window.alert(1);
});