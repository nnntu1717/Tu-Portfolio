//Go to top
var mybutton=document.getElementById("arrow");

window.onscroll=function(){
    scrollfunction()
};
function scrollFunction(){
    if(document.body.scrollTop>60 || document.documentElement.scrollTop>60){
        mybutton.style.display="block";
    }
    else{
        mybutton.style.display="none";
    }
}
function topfunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
// mở tab

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();


// navbar change color on scroll



