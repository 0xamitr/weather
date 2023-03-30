
async function getweather(city){
    const weather = await fetch(`https://api.weatherapi.com/v1/current.json?key=554c07a4be974533b8c143945232403&q=${city}`, {mode: 'cors'});
    const json = await weather.json();
    console.log(json);
    document.getElementById("location").innerText = `${json.location.name}, ${json.location.region}, ${json.location.country}`;
    document.getElementById("weatherp").innerText = `${json.current.temp_c}°C ${json.current.temp_f}°F ${json.location.country}`;
}

function main(){
    document.getElementById("submit").addEventListener("click", ()=>{
        getweather(document.getElementById("input").value);
    })
}

main();