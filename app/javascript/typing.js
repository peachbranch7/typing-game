function questions(){
  const question = document.getElementById("typing-words");



  var checkTexts = [];
  var checkIds = [];
  var count = 0;


  function createTexts() {
    count += 1;
    console.log(count);
    const countNumber = document.getElementById("count-number");
    countNumber.textContent = count
    var rnd = Math.floor(Math.random() * gon.word.length);
    question.textContent = '';

    // ↓ここでIDを格納している
    gon.ids = checkIds.push(gon.word[rnd].id);
    console.log(checkIds);
    
    
    
    checkTexts = gon.word[rnd].name.split('').map(function(value) {
      var span = document.createElement('span');
      span.textContent = value;
      question.appendChild(span);
      // console.log(span);
      return span;
    })};
    
    
    gon.ids = checkIds.push(gon.word[0].id);
    checkTexts = gon.word[0].name.split('').map(function(value) {
      var span = document.createElement('span');
      span.textContent = value;
      question.appendChild(span);
      return span;
    });
    
    
    
    document.addEventListener('keydown', keydown);
    
    function keydown(e) {
      if (e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';
        
        checkTexts.shift();
        if (!checkTexts.length) createTexts();
      }
    }
    // let count = 0;
    // count += 1
    // console.log(count);
    window.addEventListener("load", post);
    function post() {
      const submit = document.getElementById("end_btn")
      end_btn.addEventListener("click", () => {
      const form = document.getElementById("form")
      const formData = new FormData(form)
      const XHR = new XMLHttpRequest();
      XHR.open("POST", "/scores", true);
      XHR.responseType = "json";
      XHR.send(formData);
      })
    };
    
  };
  window.addEventListener("load", questions);