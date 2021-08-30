var text = ["0","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19",];
var search;
var score = 0;
var helpSc = 0;
var time = 0;
var element = Math.floor(Math.random()*80);

function createTable(){
    
    for(let size = 0; size < 8; size++){
        let tr = document.createElement("tr");
        document.getElementsByTagName("table")[0].appendChild(tr);
        for(let width =0; width < 10; width++){
            let el = document.createElement("td");
            tr.appendChild(el);
        }
    }
}

function appendLetters(){
    search = text[Math.floor(Math.random()*text.length)];
    document.getElementById("searching").innerText = "Find me: " + search;
    for(let l = 0; l < 80; l++){
        document.getElementsByTagName("td")[l].innerText=text[Math.floor(Math.random()*text.length)];
        while(document.getElementsByTagName("td")[l].innerText == search){
            document.getElementsByTagName("td")[l].innerText=text[Math.floor(Math.random()*text.length)];
        }
    }
    element =  Math.floor(Math.random()*80);
    document.getElementsByTagName("td")[element].innerText = search;
    document.getElementsByTagName("td")[element].addEventListener("click",replay);
    document.getElementById("help").addEventListener("click",help);
}

function green(){
    document.getElementsByTagName("td")[element].style.background="#0c0";
    setTimeout(function(){
        document.getElementsByTagName("td")[element].style.backgroundColor="#bac";
        score++;
        document.getElementById("yourScore").innerText=score;
    },300);
}

function replay(){
    document.getElementsByTagName("td")[element].removeEventListener("click",replay);
    document.getElementById("help").removeEventListener("click",help);
    green();
    setTimeout(appendLetters,350);
}

function timer(){
    time++;
    document.getElementById("time").innerText = time;
    let average = time / score + helpSc;
    document.getElementById("averageTime").innerText = average.toFixed(3);
}

function help(){
    helpSc += 0.35;
    score--;
    document.getElementById("yourScore").innerText=score;
    document.getElementsByTagName("td")[element].style.color = "red";
    document.getElementsByTagName("td")[element].style.fontWeight = "bolder";
    document.getElementsByTagName("td")[element].style.backgroundColor = "rgba(125, 125, 125, 0.2)";
    setTimeout(function(){
        document.getElementsByTagName("td")[element].style.color = otherLight;
        document.getElementsByTagName("td")[element].style.fontWeight ="normal";
        document.getElementsByTagName("td")[element].style.backgroundColor = "#bac";
    },250);

}

window.onload = function(){
    if(score > 0){document.getElementById("background").style.background="black"}
    score = 0;
    helpSc = 0;
    time = 0;
    element = Math.floor(Math.random()*80);
    createTable();
    appendLetters();
    setInterval(timer,1000);
    document.getElementById("help").addEventListener("click",help);
};

var light = "white";
var otherLight = "black";
function darkMode(){
    if(light == "white"){
        document.body.style.color=light;
        document.getElementById("background").style.backgroundSize="cover";
        document.getElementById("background").style.backgroundPosition = "center";
        for(let k = 0; k < 80; k++){
            document.getElementsByTagName("td")[k].style.color=light;
        }
        light = "black";
        otherLight = "white";
    }
    else{
        document.body.style.color=light;
        document.getElementById("background").style.backgroundSize="cover";
        for(let k = 0; k < 80; k++){
            document.getElementsByTagName("td")[k].style.color=light;
        }
        light = "white";
        otherLight = "black";
    }
}
alert("Important:\n\nIn this game you have to find a digit. Search for it, press it, and search the next one.\n\nThere is only one correct digit to find at a time.\n\nIn case you get stuck and can't find the digit, press help.\n\nYou can use help button. \n\nWhat is your best score? ");