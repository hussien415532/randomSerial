let serial = document.querySelector(".serial");
let copy = document.querySelector(".copy");
let generate = document.querySelector(".gen");
let ascii = [];

for (let i = 48; i <= 122; i++) {
  ascii.push(i);
}

generate.addEventListener("click", () => {
  let serialArr = [];
  for (let i = 0; i < 12; i++) {
    let newChar = String.fromCharCode(
      Math.floor(Math.random() * ascii.length + 48)
    );
    serialArr.push(newChar);
  }
  serial.innerHTML = serialArr.join("");
});
copy.onclick = () => {
  navigator.clipboard.writeText(serial.innerHTML);
};
