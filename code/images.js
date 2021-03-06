var id = 0
var dict = {1: "google.com",
                2: "yahoo.com",
                3: "facebook.com",
                4: "google.com",
                5: "website.com"}

function show_image(num) {
    var img = document.createElement("img");
    img.src = "images/" + num + ".jpg";
    img.onerror = function() {
        img.src = "images/" + num + ".png";
        img.onerror = function() {
            img.src = "images/" + num + ".gif";
        };
    };
    img.style = "text-align:center; vertical-align:middle; max-width:100%;  max-height:100%;"

    var outerDiv = document.getElementById("outer");
    var innerDiv = document.getElementById("inner");
    innerDiv.parentNode.removeChild(innerDiv);

    var div = document.createElement("div");
    div.id = "inner"
    outerDiv.appendChild(div);
    var theDiv = document.getElementById("inner");
    theDiv.appendChild(img);
    document.getElementById("credits").innerHTML = "The credit of the image goes to " + dict[num] + " !";

}
function increase(){
    id += 1;
    if (id == Object.keys(dict).length - 1) {
        document.getElementById("next").disabled = true;
    }
    if (id > 0) {
        document.getElementById("previous").disabled = false;
    }

    show_image(id + 1);

}

function decrease(){
    id -= 1;
    if (id == 0) {
        document.getElementById("previous").disabled = true;
    }
    if (id < Object.keys(dict).length - 1) {
        document.getElementById("next").disabled = false;
    }
    show_image(id + 1);
}

function random(){
    id = Math.floor((Math.random() * Object.keys(dict).length) + 0);
    if (id == 0) {
        document.getElementById("previous").disabled = true;
    } else {
        document.getElementById("previous").disabled = false;
    }
    if (id == Object.keys(dict).length - 1) {
        document.getElementById("next").disabled = true;
    } else {
        document.getElementById("next").disabled = false;
    }

    show_image(id + 1);
}

document.getElementById('previous').addEventListener('click',decrease);
document.getElementById('next').addEventListener('click',increase);
document.getElementById('random').addEventListener('click',random);

$( document ).ready(function() {
    show_image(id + 1);
    document.getElementById("previous").disabled = true;
});

function tryImages(img, src) {
    img.src = "images/" + name + ".jpg";
    img.onerror = function() {
        img.src = "img/" + name + ".png";
        img.onerror = function() {
            img.src = "img/" + name + ".gif";
        };
    };
}