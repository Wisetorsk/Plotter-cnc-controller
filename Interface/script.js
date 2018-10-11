// JavaScript source code
function updateX() {
    console.log("updateX");
    xVal = document.getElementById('myRangeX').value;
    document.getElementById('xline').style.left = xVal + 'px';
    xVal++;
    document.getElementById('point').setAttributeNS(null, 'cx', xVal);
    document.getElementById('xCoordinate').innerHTML = 'X: ' + xVal;
}

function updateY() {
    console.log("updateY");
    yVal = document.getElementById('myRangeY').value;
    document.getElementById('yline').style.top = yVal + 'px';
    yVal++;
    document.getElementById('point').setAttributeNS(null, 'cy', yVal);
    document.getElementById('yCoordinate').innerHTML = 'Y: ' + yVal;
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