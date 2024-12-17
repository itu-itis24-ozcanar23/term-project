word = "PRISM";
textInputField = document.getElementById("input-field");
letterImages = document.getElementsByClassName("letter-image");
resetGame();

function resetGame() {
  for (let i = 0; i < letterImages.length; i++) {
    const letterImage = letterImages[i];
    letterImage.style.visibility = "hidden";
  }
}

function revealLetter(letterIndex) {
  letterImages[letterIndex].style.visibility = "visible";
}

function getLetterIndexOf(letter) {
  for (let i = 0; i < word.length; i++) {
    const c = word[i];
    if (c == letter) return i;
  }

  return -1;
}

function onSubmit() {
  let input = textInputField.value;
  let letterIndex = getLetterIndexOf(input);
  revealLetter(letterIndex);
}
