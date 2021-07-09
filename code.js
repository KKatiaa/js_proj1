function calcResultEvent() {
    var x, y, tips;
    x = document.getElementById("amountmoney").value;
    y = document.getElementById("tipspercent").value;
    if (x < 0) {
        document.getElementById("negativeValueX").innerHTML = "*value is less than zero!";  
    }
    if ( y < 0) {
        document.getElementById("negativeValueY").innerHTML = "*value is less than zero!";
    }
    if (typeof(x)==undefined) {
        document.getElementById("noValueX").innerHTML = "*please enter the value";
    }
    if (typeof(y)==undefined) {
        document.getElementById("noValueY").innerHTML = "*please enter the value";
    }
    if(isNaN(x)) {
        document.getElementById("strX").innerHTML = "*please enter a number not a string";
    }
    if(isNaN(y)) {
        document.getElementById("strY").innerHTML = "*please enter a number not a string";
    }
    if(y > 100) {
        document.getElementById("percent").innerHTML = "*percent must be less then 100";
    }
    else {
        document.getElementById("x").innerHTML = "Check number: " + x +"$";
        document.getElementById("y").innerHTML = "Tip: " + y + "%";
        tips = (x*y)/100;
        document.getElementById("tips").innerHTML = "Tip amount: " + tips +"$";
        res = Number(tips) + Number(x);
        document.getElementById("sum").innerHTML = "Total num to pay: " + res +"$";
    }
}

