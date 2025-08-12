let container = document.getElementById('container');

function nDate()
{
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    let ampm = hours >= 12 ? "PM" : "AM";
    hours%=12;
    hours = hours ? hours : 12;
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    second = second < 10 ? "0" + second : second;


    let fullTime = `${hours} : ${minutes} : ${second} ${ampm}`;
    container.textContent = fullTime;
}
setInterval(nDate,1000);
