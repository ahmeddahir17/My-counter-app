let count = 0;

function kordhi() {
    count++;
    cusboonaysii();
}

function dhim() {
    count--;
    cusboonaysii();
}

function reset() {
    count = 0;
    cusboonaysii();
}

function cusboonaysii() {
    let lambarka = document.getElementById("number");
    lambarka.innerText = count;

    // Midabka beddel hadba lambarka waxa uu yahay
    if (count > 0) {
        lambarka.style.color = "green";
    } else if (count < 0) {
        lambarka.style.color = "red";
    } else {
        lambarka.style.color = "black";
    }
}