function encryptText() {
    let originalText = document.querySelector("#decryptedInput").value
    let password = document.querySelector("#passInput").value
    let passLocation = document.querySelector('input[name="passLocation"]:checked').value
    let encryptedText = ""
    let passCharCode = addCharCode(password)

    for (let i = 0; i < originalText.length; i++) {
        encryptedText += String.fromCharCode(originalText.charCodeAt(i) - passCharCode)
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
  let password = document.querySelector("#decryptPass").value
  let passLocation = document.querySelector('input[name="encryptedPassLocation"]:checked').value
  let decryptedText = ""
  let passCharCode = addCharCode(password);

  if (password.length > originalText.length - 1) {
    document.querySelector("h3").textContent = "Invalid Password"
    return
  }

  if (passLocation === "beginning") {
    originalText = originalText.slice(password.length)
  } else {
    originalText = originalText.slice(0, originalText.length - password.length)
  }
  for (let i = 0; i < originalText.length; i++) {
    decryptedText += String.fromCharCode(originalText.charCodeAt(i) + passCharCode)
  }
  document.querySelector("h3").textContent = decryptedText
}

function addCharCode(text) {
  let charCode = 0
  for (let i = 0; i < text.length; i++) {
    charCode += text.charCodeAt(i)
  }
  return charCode
}