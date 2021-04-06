function questions(){
  const question = document.getElementById("typing-words");
  // question.innerHTML = gon.word[0];


var checkTexts = [];
checkTexts = gon.word[0].split('').map(function(value) {
  var span = document.createElement('span');
  span.textContent = value;
  question.appendChild(span);
  // console.log(span);
  return span;
});

console.log(checkTexts);


document.addEventListener('keydown', keydown);

function keydown(e) {
  if (e.key === checkTexts[0].textContent) {
    checkTexts[0].className = 'add-blue';

  }

}}

window.addEventListener("load", questions);