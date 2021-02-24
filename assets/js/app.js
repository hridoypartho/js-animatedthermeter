const tempLoad = () => {
    let temp = document.getElementById('temp')
    temp.innerHTML = "&#xf2ca";
    temp.style.color = "white"

    setTimeout(() => {
        temp.innerHTML = "&#xf2ca";
        temp.style.color = "white"
    },1000)
    setTimeout(() => {
        temp.innerHTML = "&#xf2c9";
        temp.style.color = "hotpink"
    },2000)
    setTimeout(() => {
        temp.innerHTML = "&#xf2c8";
        temp.style.color = "goldenrod"
    },3000)
    setTimeout(() => {
        temp.innerHTML = "&#xf2c7";
        temp.style.color = "red"
    },4000)
}
tempLoad();
setInterval(tempLoad, 5000);