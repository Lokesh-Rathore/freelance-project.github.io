const quantity = () => {
    let increment = document.getElementsByClassName("bx-plus");
    let qty = document.getElementsByClassName("qty");
    for(let i = 0;i<increment.length; i++){
        increment[i].onclick = () => {
            // alert(i);
            qty[i].innerHTML = Number(qty[i].innerHTML) + 1;
        }
    }
    let decrement = document.getElementsByClassName("bx-minus");
    for(let i = 0;i<decrement.length; i++){
        decrement[i].onclick = () => {
            if(qty[i].innerHTML > 0){
                qty[i].innerHTML = Number(qty[i].innerHTML) - 1;
            }
        }
    }
}

quantity();

document.addEventListener('contextmenu', event => event.preventDefault());
 
document.onkeydown = function (e) {

    // disable F12 key
    if(e.keyCode == 123) {
        return false;
    }

    // disable I key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 73){
        return false;
    }

    // disable J key
    if(e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        return false;
    }

    // disable U key
    if(e.ctrlKey && e.keyCode == 85) {
        return false;
    }
}

document.addEventListener("keydown", function(event){
    var key = event.key || event.keyCode;
    if (key == 123) {
        return false;
    } else if ((event.ctrlKey && event.shiftKey && key == 73) || (event.ctrlKey && event.shiftKey && key == 74)) {
        return false;
    }
}, false);