
const ahora = new Date();
var fecha1 = document.getElementById('fecha1'),
    fecha2 = document.getElementById('fecha2'),
    fecha3 = document.getElementById('fecha3');

fecha1.innerHTML = `Fecha : ${ahora.getDay()} /  ${ahora.getMonth()} / 
                           ${ahora.getFullYear()}`;

fecha2.innerHTML = `Fecha : ${ahora.getDay()} /  ${ahora.getMonth()} / 
                            ${ahora.getFullYear()}  -- ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;

fecha3.innerHTML = `Fecha : ${ahora.getDay()} /  ${ahora.getMonth()} / 
                            ${ahora.getFullYear()}  -- ${ahora.getHours()}:${ahora.getMinutes()}:${ahora.getSeconds()}`;