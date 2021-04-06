function questions(){
  const question = document.getElementById("typing-words");



  var checkTexts = [];


  function createTexts() {
    var rnd = Math.floor(Math.random() * gon.word.length);
    question.textContent = '';
    checkTexts = gon.word[rnd].split('').map(function(value) {
      var span = document.createElement('span');
      span.textContent = value;
      question.appendChild(span);
      // console.log(span);
      return span;
  })};


  checkTexts = gon.word[0].split('').map(function(value) {
    var span = document.createElement('span');
    span.textContent = value;
    question.appendChild(span);
    return span;
  });

  console.log(checkTexts);


  document.addEventListener('keydown', keydown);

  function keydown(e) {
    if (e.key === checkTexts[0].textContent) {
      checkTexts[0].className = 'add-blue';
      
      checkTexts.shift();
      if (!checkTexts.length) createTexts();
    }

  }
}

window.addEventListener("load", questions);