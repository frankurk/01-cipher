import cipher from "./cipher.js";

const encodeOption = document.getElementById("encodeOption");

const encodeButton = document.getElementById("encodeButton");

const decodeOption = document.getElementById("decodeOption");

const decodeButton = document.getElementById("decodeButton");

const goBackButton = document.getElementById("goback");

if (encodeOption) {
  encodeOption.addEventListener("click", function () {
    let userOffset = document.getElementById("userOffset").value;
    window.localStorage.setItem("offset", userOffset);
    window.location.href = "encode.html";
  });
}

if (encodeButton) {
  encodeButton.addEventListener("click", function () {
    let userOffset = window.localStorage.getItem("offset");
    let msgEncode = document.getElementById("msgEncode").value;
    const encodeMessage = cipher.encode(userOffset, msgEncode);
    document.getElementById("output").value = encodeMessage;
  });
}

if (decodeOption) {
  decodeOption.addEventListener("click", function () {
    let userOffset = document.getElementById("userOffset").value;
    window.localStorage.setItem("offset", userOffset);
    window.location.href = "decode.html";
  });
}

if (decodeButton) {
  decodeButton.addEventListener("click", function () {
    let userOffset = window.localStorage.getItem("offset");
    let msgDecode = document.getElementById("msgDecode").value;
    const decodeMessage = cipher.decode(userOffset, msgDecode);
    document.getElementById("output").value = decodeMessage;
  });
}

if(goBackButton) {
    goBackButton.addEventListener("click", function() {
    history.back();
    });
}
