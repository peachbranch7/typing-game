function count() {
  var time = 60;
  var counter;
  var sec = document.getElementById("sec");
  var start = document.getElementById("start");
  var stop = document.getElementById("stop");
  

  start.onclick = function() {
    toggle();
    counter = setInterval( count, 1000 );
  }

  stop.onclick = function() {
    toggle();
    clearInterval( counter );
  }

  function toggle() {
    if( start.disabled ) {
     start.disabled = false;
     stop.disabled = true;
    } else {
     start.disabled = true
     stop.disabled = false;
    }
  }

  function count() {
    if( time === 0 ) {
    sec.innerHTML = 0;
    toggle();
    alert("1分経過しました。");
    clearInterval( counter );

    } else {
    time -= 1;
    sec.innerHTML = time % 60;
    }
  }
}





window.addEventListener("load", count);