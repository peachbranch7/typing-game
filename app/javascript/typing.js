function questions(){
  const question = document.getElementById("typing-words");
  question.innerHTML = gon.word.name;
}

addEventListener("load", questions);