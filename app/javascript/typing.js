function questions(){
  const question = document.getElementById("typing-words");
  question.innerHTML = gon.word[0];
};

const checkText = []
checkTexts = gon.word[0].split('');
console.log(checkTexts);

document.addEventListener('keydown', keydown);

function keydown(e) {
}

addEventListener("load", questions);