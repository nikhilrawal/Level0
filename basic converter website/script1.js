function temperature() {
    //To convert celcius to farenheit
    //(CEL * 9/5) + 32
    var c = document.getElementById("c").value;
    var f = (c * 9 / 5) + 32
    document.getElementById("f").value = f
}
function weight() {
    //To convert KGs to Pounds
    // KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("pounds").value = p
}
function distance() {
    var km = document.getElementById("km").value;
    var mil = (km * 1.609);
    document.getElementById("miles").value = mil;
}
