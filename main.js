function calculateTimezone() {
    var timeNow = parseInt(document.getElementById("timeNow").value);
    var answer = document.getElementById("answer");
    var UTC = document.getElementById("utc") 
    
    var timeZone = timeNow-12;
    if(timeZone>=0) {
        UTC.innerHTML = "UTC +";
    }
    else {
        UTC.innerHTML = "UTC "
    }
    answer.innerHTML = `${timeZone}`;
}