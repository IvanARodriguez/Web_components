'use explicit'
    
// get a date object
const DATE = new Date();

const RENDER_CALENDAR = ()=> {
    DATE.setDate(1);

    const MONTH_DAYS = document.querySelector('.days');

    const LAST_DAY = new Date(DATE.getFullYear(),
        DATE.getMonth() + 1, 
        0
    ).getDate();

    const PREV_LAST_DAY = new Date(DATE.getFullYear(),
        DATE.getMonth(),
        0
    ).getDate();

    const FIRST_DAY_INDEX = DATE.getDay()

    const LAST_DAY_INDEX = new Date(
        DATE.getFullYear(),
        DATE.getMonth() + 1, 
        0
    ).getDay();

    const NEXT_DAY = 7 - LAST_DAY_INDEX - 1;

    const MONTHS = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    // print current month on the screen
    document.querySelector('.date h1').innerHTML
    = MONTHS[DATE.getMonth()];

    // print current day and year
    document.querySelector('.date p').
    innerHTML = new Date().toDateString();

    let days = "";

    // add previous month calendar days for current month
    for(let x = FIRST_DAY_INDEX; x > 0; x--){
        days += `<div class="prev_date">${PREV_LAST_DAY - x + 1}</div>`
    }

    // add days of the current month
    for(let i = 1; i <= LAST_DAY; i++){
        // highlight current day
        if(i === new Date().getDate() && DATE.getMonth() === new Date().getMonth()){
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    // Add next month calendar days for current month
    for(let j = 1; j <= NEXT_DAY; j++){
        days += `<div class="next_date">${j}</div>`
        MONTH_DAYS.innerHTML = days;
    }
};



// events
document.querySelector('.prev').addEventListener('click', ()=>{
    DATE.setMonth(DATE.getMonth() - 1);
    RENDER_CALENDAR();

});

document.querySelector('.next').addEventListener('click', ()=>{
    DATE.setMonth(DATE.getMonth() + 1);
    RENDER_CALENDAR()

});

document.querySelector('.next').addEventListener('click', ()=>{
    DATE.setMonth(DATE.getMonth() + 1);
    RENDER_CALENDAR()

});

RENDER_CALENDAR();