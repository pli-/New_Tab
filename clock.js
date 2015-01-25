window.onload=createalarm();

chrome.alarms.onAlarm.addListener(function (alarm) {
console.log("called time");
    timeStart();
});

function createalarm(){
console.log("alarm created");
chrome.alarms.create("My alarm", {periodInMinutes: (0.01)});
}

function timeStart() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m = timeCheck(m);
    s = timeCheck(s);
    document.getElementById("txt").innerHTML = h+":"+m+":"+s;
}

function timeCheck(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}