function questions(){
  const question = document.getElementById("typing-words");
  question.innerHTML = gon.word[0];
};

addEventListener("load", questions);