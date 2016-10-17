//Make all articles draggable
$('article').draggable({ handle: ".title" });

//Some API stuff

//Der Browser
var browser = document.getElementById('browser');

var browser_bar  = document.getElementById('browser_bar');
var browser_view = document.getElementById('browser_view');
browser_view.style.backgroundColor = 'white';

browser_bar.addEventListener("keyup", function(event) {
  if(event.key!="Enter")
    return;
  
  var url = formatURL(browser_bar.value);
  
  browser_view.src = url;
  browser_bar.value = url;
});


function formatURL(url) {
  url = url.trim();
  
  if(url.substr(0,7)!='http://')
    return 'http://' + url;
  else
    return url;
}


//Vollbild-Stuff

document.addEventListener("keydown", function(e) {
  if (e.keyCode == 13) {  //Enter
    if (!document.fullscreenElement) {
      launchIntoFullscreen(document.documentElement);
    }
  }
}, false);


function launchIntoFullscreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
      launchIntoFullscreen(document.documentElement);
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}