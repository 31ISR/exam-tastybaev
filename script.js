document.querySelector('.toggle-menu').addEventListener('click',() =>{
document.querySelector('.menu').classList.toggle('active')});


document.getElementById('login-btn').addEventListener('click', function(){
    const popup=document.getElementById('login-popup');
    if(popup.classList.contains('hidden')) {
        popup.classList.remove('hidden');

    } else{
        popup.classList.add('hidden');
    }
});

let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
};