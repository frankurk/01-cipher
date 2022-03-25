const letters = [a,b,c,d,f,g,h,i,j,k,l,m,'ñ',o,p,q,r,s,t,u,v,w,x,y,z]
const ñ = ['\u00F1']
const newLetters = {};
const adjustedKey = {key % 26};
const letterOfString = 'letters'
const cipher = {
  // ...
   for (const letterOfString) {
     let newLetter = (letter.charCodeAt() + adjustedKey)
     if (newLetter <= 122) {
        newLetters.push(String.fromCharCode(newLetter));
     } else if (newLetter > 122) {
        newLetters.push(String.fromCharCode(96 + (newLetter % 122)));
     return (newLetters.join(''))
     }
    }
encode(){}
};
export default cipher;