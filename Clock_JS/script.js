function showtime()
{   
    var month = {
        1:"JAN",
        2:"FEB",
        3:"MAR",
        4:"APR",
        5:"MAY",
        6:"JUN",
        7:"JUL",
        8:"AUG",
        9:"SEPT",
        10:"OCT",
        11:"NOV",
        12:"DEC"
    };

    var date  = new Date(); //inbuilt fn to get Date and Time

    //to print the DATE
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var display = d + " " + month[m+1] + " " + y;
    document.getElementById('date').innerHTML = display;

    //TO PRINT THE TIME
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    display = hh + ":" + mm + ":" + ss;
    document.getElementById('time').innerHTML = display;

    setTimeout(showtime,1000)
}

showtime();