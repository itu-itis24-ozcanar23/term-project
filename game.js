word = "PRISM";
textInputField = document.getElementById("input-field");

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
  console.log(letterIndex);
}
