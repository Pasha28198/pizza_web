// export const optDay = [
//     'Сьогодні',
//     'Вт - 11.05',
//     'Ср - 12.05',
//     'Чт - 13.05',
//     'Пт - 13.05',
//     'Сб - 13.05',
// ]

import moment from "moment";

export const optDay = () => {
    let today = moment().startOf('day');
    let dayAfterTomorrow = moment().add(2, 'day');

    let days = [];
    let day = today;

    while (day <= dayAfterTomorrow) {
        days.push(day.format('DD/MM/YYYY'));
        day = day.clone().add(1, 'day');
    }
    return days;
}

export const optTime = (date) => {

    let ROUNDING = 30 * 60 * 1000;
    let start = moment()
   if(moment().startOf('day').format('DD/MM/YYYY') === date || !date){
       start = moment(Math.ceil((+start) / ROUNDING) * ROUNDING);
   }else{
       start = moment(Math.ceil((+start) / ROUNDING) * ROUNDING).startOf('day');
   }

    let andTime = moment(Math.ceil((+start) / ROUNDING) * ROUNDING).endOf('day');

    let time = [];
    let day = start;

    while (day <= andTime) {
        time.push(day.format("HH:mm"));
        day = day.clone().add(30, 'minutes');
    }

    return time
}

// export const optTime = [
//     '19:00',
//     '19:15',
//     '19:30',
//     '19:45',
//     '20.00',
//     '20.30',
// ]
export const optPay = [
    'Картою онлайн',
    'Готівкою кур’єру',
    'Картою кур’єру',
]
export const optAdress = [
    'вул.Івасюка, 63',
]