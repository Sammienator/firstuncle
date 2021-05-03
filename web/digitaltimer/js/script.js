function countdown(){
    var now = new Date();
    var eventDate = new Date(2021, 7, 22);

    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s/60);
    var h = Math.floor(m /60);
    var d = Math.floor(h/24);

    h %= 24;
    m %= 60;
    s %= 60;

    h =( h < 10) ?"0" + h : h;
    m =( m < 10) ?"0" + m : m;
    s =( s < 10) ?"0" + s : s;

    

    // h =( h < 10) ?"0" + h : h;   so  ( h < 10) is my condition everything after my question mark, is my true part, everything after my colon is my false part.Thats how the conditional statement works

    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;

    setTimeout(countdown, 1000);
} 
    countdown();

 
