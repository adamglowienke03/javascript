let clock = document.querySelector("div");
setInterval(() => {
    const now = new Date();
    if(now.getSeconds() % 2 == 0){
        clock.style.backgroundColor = "red";
        clock.style.color = "blue";
    } else {
        clock.style.backgroundColor = "blue";
        clock.style.color = "red";
    }
    clock.innerHTML = now.toLocaleTimeString();
}, 1000);
