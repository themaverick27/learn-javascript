const clock = document.getElementById('clock')

// setInterval(fn, duration) - this setInterval() runs in continue with refreshing each duration time, here 1000 means 1sec]
setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString());

    clock.innerHTML = date.toLocaleTimeString();
}, 1000)