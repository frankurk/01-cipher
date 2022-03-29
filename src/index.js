import cipher from './cipher.js';

const encodeOption = document.getElementById('encodeOption');

const encodeButton = document.getElementById('encodeMsg');

if(encodeOption) {
    encodeOption.addEventListener("click",function() {
    let userOffset = document.getElementById('userOffset').value;
    window.localStorage.setItem('offset', userOffset);
    window.location.href= 'encode.html';
    }); 
};

if(encodeButton){
    encodeButton.addEventListener("click",function(){
        let userOffset = window.localStorage.getItem('offset');
        let msgEncode = document.getElementById('msgEncode').value;
        const encodeMessage = cipher.encode(userOffset,msgEncode);
        document.getElementById("output").value = encodeMessage;
    });

};






