const submitBtn=document.getElementById("submit");
const cityName=document.getElementById("cityname");
const city=document.getElementById("city");
const temp=document.getElementById("temperature");
const min_temp=document.getElementById("min-temp");
const max_temp=document.getElementById("max-temp");
const humidity=document.getElementById("humidity");
const temp_status=document.getElementById("weatherimg");
const hideInfo=document.querySelector('.tempinfo');
const hideotherInfo=document.querySelector('.otherinfo');


// day date -----------
const dateNow = document.getElementById("today");
const day = document.getElementById("day");

      const getCurrentDay = () => {
        const weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let currentTime = new Date();
        return(weekday[currentTime.getDay()]);
      };
      const getCurrentDate = () => {
        const months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        let now = new Date();
        var date=now.getDate()
        var month=now.getMonth()
        var hours=now.getHours()
        var mins=now.getMinutes()
        let clock="AM"
        if (hours>11){
            clock="PM";

        
            if(hours>12){
                hours=hours-12;
            }
            if(mins<10){
                mins="0"+mins;
            }
        }
        return(`${months[month]} ${date}`);
      };
      dateNow.innerHTML=getCurrentDate()
      day.innerHTML=getCurrentDay()




const getInfo=async(event)=>{
    event.preventDefault()
    // alert("go go")
    let cityVal=cityName.value
    if(cityVal===''){
city.innerText='please type place name to search';
hideInfo.classList.add("hidedata");
hideotherInfo.classList.add("hidedata");
    }else{
        try{
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=c5f4d46b1a231d85a3e60ad59f3cbb07`;
const response=await fetch(url);
const data=await response.json();
const arrData=[data]
// console.log(arrData)
temp.innerText= arrData[0].main.temp
city.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;
min_temp.innerText= arrData[0].main.temp_min
max_temp.innerText= arrData[0].main.temp_max
humidity.innerText= arrData[0].main.humidity

const status=arrData[0].weather[0].main;
if(status=="Clear"){
    temp_status.innerHTML="<img src='images/sun.png' alt='weather status'>"
}else if(status=="Clouds"){
    temp_status.innerHTML="<img src='images/cloudy.png' alt='weather status'>"
}else if(status=="Rain"){
    temp_status.innerHTML="<img src='images/raining.png' alt='weather status'>"
}else if(status=="Snow"){
    temp_status.innerHTML="<img src='images/snow.png' alt='weather status'>"
}else {
    temp_status.innerHTML="<img src='images/sun.png' alt='weather status'>"
}
hideInfo.classList.remove("hidedata");
hideotherInfo.classList.remove("hidedata");
        }catch{
            city.innerText='Please check place name';
            hideInfo.classList.add("hidedata");
            hideotherInfo.classList.add("hidedata");
        }
    }
}
submitBtn.addEventListener('click', getInfo)