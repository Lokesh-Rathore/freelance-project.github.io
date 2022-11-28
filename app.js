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