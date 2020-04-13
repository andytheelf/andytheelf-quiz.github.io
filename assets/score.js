function getScore() {
  for (var i = 0; i < localStorage.length; i++) {
    document.write(localStorage.getItem(localStorage.key(i)) + "<br>");
  }
}

getScore();