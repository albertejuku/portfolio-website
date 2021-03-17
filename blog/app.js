let opens = document.getElementsByClassName("open")[0];
let nav = document.getElementsByClassName("nav")[0];
let closes = document.getElementsByClassName("close")[0];


function changeStyle(elem, event, style) {
    elem.addEventListener(event, function(){
        nav.style.top = style;
    })
}

changeStyle(opens, "click", "0vh")
changeStyle(closes, "click", "-60vh")