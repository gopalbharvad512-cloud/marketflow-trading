window.onload = function(){
setTimeout(()=>{
document.getElementById("loader").style.display="none";
document.getElementById("content").style.display="block";
},1200);
}
function toggleMenu(){
document.getElementById("nav").classList.toggle("active");
}
