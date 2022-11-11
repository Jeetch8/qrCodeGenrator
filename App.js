const inputSel = document.getElementById("input");
const btn = document.getElementById("submit");
const main = document.getElementById("main");
const qrCodeSpace = document.querySelector(".qrCodeSpace");

let inputValue = "";
inputSel.addEventListener("change", (e) => (inputValue = e.target.value));
console.log(inputValue);

btn.addEventListener("click", () => {
  if (inputValue.length === 0) {
    alert("Data cannot be empty");
  }
  generateNewQrCode();
});

function generateNewQrCode() {
  qrCodeSpace.innerHTML = "";
  const newImg = document.createElement("img");
  fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
  )
    .then((resp) => resp)
    .then((data) => newImg.setAttribute("src", data.url));
  qrCodeSpace.appendChild(newImg);
  main.style.height = "500px";
  img.classList = "margin-top:20px;";
}

console.log(img);
