const cipherEncode = function (offset, text) {
   let result = "";
   for (let i = 0; i < text.length; i++) {
     let letterPosition = text[i].charCodeAt();
 
     if (letterPosition >= 65 && letterPosition <= 90) {
       letterPosition += offset % 26;
 
       if (letterPosition > 90) letterPosition -= 26;
       if (letterPosition < 65) letterPosition += 26;
     }
 
     result += String.fromCharCode(letterPosition);
   }
 
   return result;
 };
 
 
 const cipher = {
   encode: function (userOffset, userText) {
     const encodedResult = cipherEncode(userOffset, userText);
     return encodedResult;
   },
   decode: function (userOffset, userText) {
     const decodedResult = cipherEncode(-userOffset, userText);
     return decodedResult;
   },
 };
 
 export default cipher;
 