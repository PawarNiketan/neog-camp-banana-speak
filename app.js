var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#text-input");
var txtOutput = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occurred", error)
    alert("Something went wrong with server! try again after some time.")
}

function clickhandler() {
    //taking input
    var inputText = txtInput.value;

    //calling server for processinng
    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText; //output
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click", clickhandler)