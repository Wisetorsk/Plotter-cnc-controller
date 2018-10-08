// JavaScript source code
function updateX() {
    console.log("updateX");
    document.getElementById('xline').style.left = document.getElementById('myRangeX').value;
}

function updateY() {
    console.log("updateY");
    document.getElementById('yline').style.top = document.getElementById('myRangeY').value;
}

function xjog(element) {
    console.log('x:');
    if (element.value == "right") {
        console.log('jog right');
    } else {
        console.log('jog left');
    }
}

function yjog(element) {
    console.log('Y:');
    if (element.value == "right") {
        console.log('jog right');
    } else {
        console.log('jog left');
    }
}

function getMachineStatus() {
    console.log('Fetching current machine state');
    document.getElementById('linkText').innerHTML = "Inactive";
}

function main() {
    getMachineStatus();
}

function home() {
    console.log('Going Home');
}

function goTo(x, y) {
    console.log('Moving to (' + x + ',' + y + ')');
}

main();