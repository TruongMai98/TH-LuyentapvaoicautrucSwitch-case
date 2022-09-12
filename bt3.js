/*
let value = +prompt('Type a number');


if (value > 0){
    alert('1');
}else if (value < 0){
    alert('-1');
}else {
    alert('0');
}
*/
let value = +prompt('type a number');
let absValue  = Math.abs(value)/value;
switch (absValue){
    case 1:
        alert(1);
        break;
    case -1:
        alert(-1);
        break;
    default:
        alert(0);
        break;
}