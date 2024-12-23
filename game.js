word = "PRISM";
lives = 3;
score = 0;
playerLost = false;

textInputField = document.getElementById("input-field");
letterImages = document.getElementsByClassName("letter-image");
resetGame();

function updateTexts() {
  document.getElementById("lives-text").innerHTML = lives;
  document.getElementById("score-text").innerHTML = score;
}

function resetGame() {
  for (let i = 0; i < letterImages.length; i++) {
    const letterImage = letterImages[i];
    letterImage.style.visibility = "hidden";
  }

  playerLost = false;
  lives = 3;
  score = 0;
  updateTexts();
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
  if (playerLost) return;

  let input = textInputField.value;
  if (input.length != 1) {
    if (input == word) {
      score = 100;
      updateTexts();
      for (let i = 0; i < word.length; i++) {
        revealLetter(i);
      }
      alert("Correct guess! You win.");
    } else {
      alert("Wrong guess! You lost.");
      playerLost = true;
    }

    return;
  }

  let letterIndex = getLetterIndexOf(input);

  // -1 is for invalid letter
  if (letterIndex == -1) {
    lives--;
  } else if (letterImages[letterIndex].style.visibility == "hidden") {
    score += 20;
    revealLetter(letterIndex);
  }

  updateTexts();

  if (lives == 0) {
    playerLost = true;
    alert("You lost! You ran out of lives...");
  }

  if (score == 100) {
    alert("You won! Very impressive.");
  }
}
