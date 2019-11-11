var input = "";

document.getElementById("btn").onclick = function() {
    input = document.getElementById("input").value;
    document.getElementById("text").innerHTML = message[input]
    alert(massive[input]);
}

var massive = new Array();

massive[0] = "pizza";

massive[1] = "chocolate";

var message = ["Higtning day", "Hello, I love you"];

massive.push("Back");
message.push("I all be back")
