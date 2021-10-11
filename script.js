function encryptText() {
    let originalText = document.querySelector("#decryptedInput").value
    let password = document.querySelector("#passInput").value
    let passLocation = document.querySelector('input[name="passLocation"]:checked').value
    let encryptedText = ""
    let passCharCode = 0;
    for (let i = 0; i < password.length; i++) {
      passCharCode += password.charCodeAt(i)
    }
    for (let i = 0; i < originalText.length; i++) {
        encryptedText += String.fromCharCode(originalText.charCodeAt(i) - passCharCode - 1)
    }
    if (passLocation === "beginning") {
      encryptedText = password + encryptedText
    } else {
      encryptedText += password
    }
    document.querySelector("h3").textContent = encryptedText
}

function decryptText() {
  let originalText = document.querySelector("#encryptedInput").value
  let passLength = document.querySelector("#passLength").value
  let passLocation = document.querySelector('input[name="encryptedPassLocation"]:checked').value
  let decryptedText = ""
  let passCharCode = 0;

  if (passLocation === "beginning") {
    for (let i = 0; i < passLength; i++) {
      passCharCode += originalText.charCodeAt(i)
    }
    originalText = originalText.slice(passLength)
  } else {
    for (let i = originalText.length; password.length - i < passLength; i--) {
      passCharCode += originalText.charCodeAt(i)
    }
    originalText = originalText.slice(0, originalText.length - passLength)
  }
  for (let i = 0; i < originalText.length; i++) {
    decryptedText += String.fromCharCode(originalText.charCodeAt(i) + passCharCode + 1)
  }
  document.querySelector("h3").textContent = decryptedText
}
