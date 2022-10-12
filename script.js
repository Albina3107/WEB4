function changeColor(){
    let elem = document.getElementById("para1");
    elem.style.background = "cornflowerblue";
}

function changeColor2(){
    let elem = document.querySelector("#para2");
    elem.style.background = "lightsteelblue";
}

function AddImg(){
    let elem = document.getElementById("img");
    elem.innerHTML="<img src=\"https://mistomariupol.com.ua/wp-content/uploads/2021/11/78.jpg\" width=\"1000\" alt=\"Mariupol\">"
}

function BigImg(){
    let elem = document.getElementById("img");
    elem.innerHTML="<img src=\"https://mistomariupol.com.ua/wp-content/uploads/2021/11/78.jpg\" width=\"1500\" alt=\"Mariupol\">"
}

function SmallImg(){
    let elem = document.getElementById("img");
    elem.innerHTML="<img src=\"https://mistomariupol.com.ua/wp-content/uploads/2021/11/78.jpg\" width=\"1000\" alt=\"Mariupol\">"
}

function DeleteImg(){
    let elem = document.getElementById("img");
    elem.innerHTML = "";
}