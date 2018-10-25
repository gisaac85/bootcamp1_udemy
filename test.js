// function myFunction() {
// let btn = document.createElement("button");
// let b = document.querySelector("button");
// document.getElementById("myDiv").appendChild(btn);
//b[i].setAttribute("name", "helloButton[i]");
// b[i].setAttribute("id", "btn" + [i]);
// b[i].setAttribute("text", "btn");
// b[i].innerText = [i].toString();
//  b.setAttribute('onclick', 'increaseFunc();');
//}

// function increaseFunc() {
//     let count = 0;
//     let b = document.querySelector("button");
//     count = parseInt(b.innerText) + 1;
//     b.innerText = count.toString();

// }
// function makeAlertButtons() {
//     var container = document.createElement("div")
//     container.setAttribute('id', "container")
//     container.setAttribute('class', 'Row')

//     for (var x = 1; x < 10; x++) {
//         // var subDiv = document.createElement("div")
//         var butt = document.createElement("button")
//         butt.setAttribute("id", 'btn' + x)
//         butt.appendChild(document.createTextNode(x))
//         butt.setAttribute('class', 'Column')
//         //subDiv.appendChild(butt)
//         container.appendChild(butt)
//     }

//     document.getElementById("root").appendChild(container);
//     document.getElementById('btn5').setAttribute('onclick', 'shuffle_btn();');

// }

// function shuffle_btn() {
//     var variableNum = document.getElementById('btn1').innerHTML;
//     document.getElementById('btn1').innerHTML = document.getElementById('btn4').innerHTML;
//     document.getElementById('btn4').innerHTML = document.getElementById('btn7').innerHTML;
//     document.getElementById('btn7').innerHTML = document.getElementById('btn8').innerHTML;
//     document.getElementById('btn8').innerHTML = document.getElementById('btn9').innerHTML;
//     document.getElementById('btn9').innerHTML = document.getElementById('btn6').innerHTML;
//     document.getElementById('btn6').innerHTML = document.getElementById('btn3').innerHTML;
//     document.getElementById('btn3').innerHTML = document.getElementById('btn2').innerHTML;
//     document.getElementById('btn2').innerHTML = variableNum;
// }



function clockwiseRotation() {
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    let btn3 = document.getElementById("btn3");
    let btn4 = document.getElementById("btn4");
    let btn5 = document.getElementById("btn5");
    let btn6 = document.getElementById("btn6");
    let btn7 = document.getElementById("btn7");
    let btn8 = document.getElementById("btn8");
    let btn9 = document.getElementById("btn9");

    [btn1.innerHTML,
        btn2.innerHTML,
        btn3.innerHTML,
        btn4.innerHTML,
        btn6.innerHTML,
        btn7.innerHTML,
        btn8.innerHTML,
        btn9.innerHTML
    ] = [btn4.innerHTML,
        btn1.innerHTML,
        btn2.innerHTML,
        btn7.innerHTML,
        btn3.innerHTML,
        btn8.innerHTML,
        btn9.innerHTML,
        btn6.innerHTML
    ]

}

function runFunc() {
    document.getElementById("btn5").addEventListener("click", clockwiseRotation);
}


window.onload = runFunc;