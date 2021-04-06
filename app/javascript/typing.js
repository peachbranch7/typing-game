function questions(){
  const question = document.getElementById("typing-words");
  question.innerHTML = gon.word[0];
};

document.addEventListener('keydown', keydown);

function keydown(e) {
  console.log(e.key);
}

addEventListener("load", questions);