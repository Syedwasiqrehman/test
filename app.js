const btn = document.querySelector(".btn");

const temp1 = document.querySelector(".temp");
const temp = document.querySelector(".wasiq");
const humi = document.querySelector(".humi");
const wind = document.querySelector(".wind");
const dew = document.querySelector(".dew");

window.addEventListener("load", () => {
    open();
})


btn.addEventListener("click", async(evt) => {
    evt.preventDefault();
    open();
});

const open =async () => {
    const intn = document.querySelector(".in").value;
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${intn}?unitGroup=metric&key=CT3WPTSQQB3N2736GHJVKALB9&contentType=json`; 
    let base = url;
    let data = await fetch(base);
    let data1 = await data.json();
    let data2 = data1.currentConditions.temp;
    let data3 = data1.days[0].tempmax;
    let data4 = data1.days[0].tempmin;
    let data5 = data1.currentConditions.humidity;
    let data6 = data1.days[0].precip;
    let data7 = data1.days[0].visibility;
    let data8 = data1.currentConditions.windspeed;
    let data9 = data1.currentConditions.winddir;
    let data10 = data1.days[0].windgust;
    let data11 = data1.days[0].dew;
    let data12 = data1.days[0].sunrise;
    let data13 = data1.days[0].sunset;
    
    
    temp1.innerText = `Temp: ${data2}°C\nMax Temp: ${data3}°C\nMin Temp: ${data4}°C`;
    humi.innerText = `Humidity:${data5}%\nPrecipitation:${data6}%\nVisibility: ${data7}`;
    wind.innerText = `Wind:${data8}.km/h\nWind Direction:${data9}\nWind Gust:${data10}`;
    dew.innerText = `Dew: ${data11}\nSunrise: ${data12}\nSunset: ${data13} `;

    console.log(data1);
};