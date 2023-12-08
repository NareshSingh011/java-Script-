const clock = document.querySelector("#clock");


setInterval(function() { //setInterval use for call a function repeatedly at a specified interval of time.
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)
!
//03
