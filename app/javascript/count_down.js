function count() {
  let time = 5;
  let counter;
  let sec = document.getElementById("sec");
  let start = document.getElementById("start");
  let stop = document.getElementById("stop");
  document.getElementById("end_btn").style.display = "none";
  

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
    const numberCount = document.getElementById("count-number");
    const numberText = numberCount.textContent;
    alert(`お疲れ様でした!\n${numberText}問正解でした!`);
    const correctNumber = document.getElementById("correct-number");
    correctNumber.value = numberText;
    document.getElementById("end_btn").click();
    clearInterval( counter );
    } else {
    time -= 1;
    sec.innerHTML = time % 5;
    }
  }
}





window.addEventListener("load", count);