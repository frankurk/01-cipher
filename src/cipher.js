const cipher = {
  // ...
  const newLetters = {};
  const adjustedKey = {key % 26};

  for (const letter of string) {
     let newLetter = (letter.charCodeAt() + adjustedKey)
     if (newLetter <= 122) {
        newLetters.push(String.fromCharCode(newLetter));
     } else if (newLetter > 122) {
        newLetters.push(String.fromCharCode(96 + (newLetter % 122)));
     }
  }
  return (newLetters.join(''))
}
encode(){}
};

export default cipher;
