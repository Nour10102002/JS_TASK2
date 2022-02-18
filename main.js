function calculateTimezone() {
    var timeNow = parseInt(document.getElementById("timeNow").value);
    var answer = document.getElementById("answer");
    
    var timeZone = timeNow-12;
    answer.innerHTML = `${timeZone}`;
}