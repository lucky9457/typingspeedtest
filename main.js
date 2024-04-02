let container = document.getElementById("speedTypingTest");
let timer = document.getElementById("timer");
let quotedisplay = document.getElementById("quoteDisplay");
let result = document.getElementById("result");
let quoteinput = document.getElementById("quoteInput");
let submitbtn = document.getElementById("submitBtn");
let resetbtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");
let uniqueid;

function main() {
    let counter = 0;
    uniqueid = setInterval(function() {
        counter = counter + 1;
        timer.textContent = String(counter);
    }, 1000);



    let options = {
        method: "GET"
    };
    spinner.classList.remove("d-none");
    fetch("https://apis.ccbp.in/random-quote", options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            spinner.classList.add("d-none");
            console.log(jsonData.content);
            quotedisplay.textContent = jsonData.content;
        });
}
main();

function submittext() {
    if (quotedisplay.textContent === quoteinput.value) {
        let sec = timer.textContent;
        result.textContent = "you typed in " + String(sec) + " seconds";
        clearInterval(uniqueid);
    } else {
        result.textContent = "you typed incorrect sentence";
    }
}

function resetbtnclick() {
    clearInterval(uniqueid);
    timer.textContent = "0";
    quoteinput.value = "";
    main();



}

resetbtn.addEventListener("click", resetbtnclick);
submitbtn.addEventListener("click", submittext);
