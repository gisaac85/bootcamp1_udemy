function myFunction() {

    let btn = document.createElement("button");
    document.getElementById("myDiv").appendChild(btn);
    let b = document.querySelector("button");

    b.setAttribute("name", "helloButton");
    b.setAttribute("id", "btn");
    b.setAttribute("text", "btn");
    b.innerText = "0";
    b.setAttribute('onclick', 'increaseFunc();');
}

function increaseFunc() {
    let count = 0;
    let b = document.querySelector("button");
    count = parseInt(b.innerText) + 1;
    b.innerText = count.toString();

}