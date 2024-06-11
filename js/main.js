let inputBox = document.getElementById('input-box');
let resultBox = document.getElementById("result-box");
let changecolor = () => {
    let input = inputBox.value;
    resultBox.style.backgroundColor = input;
    resultBox.style.borderRadius = input;
}
inputBox.addEventListener('input', changecolor);
window.addEventListener('load', changecolor());