import moment from "jalali-moment";
import { useEffect, useState } from "react";
import SettingJson from "../../data/settingJSON.json";
import WeatherIconJson from "../../data/weatherIconJSON.json";
import moonRain from "../../assets/images/rainMoon.svg"
import moonCloud from "../../assets/images/cloudMoon.svg"



// --------------- reload page func start ---------------
export function RefreshPage (){
    window.location.reload();
}
// --------------- reload page func end ---------------





// --------------- convert english number to persian number func start ---------------
export function ConvertToPersian (value) {
    const result = value.replace(/\d/g, res => '۰۱۲۳۴۵۶۷۸۹'[res]);

    return result;
}
// --------------- convert english number to persian number func end ---------------





// --------------- current time system func start ---------------
export function TimeClock () {

    const [currentTime, setCurrentTime] = useState(moment());
    let typeTimeData = SettingJson.settingItems[0].TypeTime;


    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentTime(moment());
        }, 1000);
    
        return () => {
          clearInterval(interval);
        };
    }, []);



    if(typeTimeData === "12")
    {
      return ConvertToPersian(currentTime.format("hh:mm"))
    }
    else
    {
      return ConvertToPersian(currentTime.format("HH:mm"))
    }
}
// --------------- current time system func end ---------------





// --------------- last refresh time func start ---------------
export function LastRefresh () {
    let time = new Date();
    let lastRefresh = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    
    return ConvertToPersian(lastRefresh)
}
// --------------- last refresh time func end ---------------





// --------------- today date func start ---------------
export function CurrentDate () {

  const [currentDate, setCurrentDate] = useState(moment);
  let typeDateData = SettingJson.settingItems[1].TypeDate;


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(moment());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  if(typeDateData === "sh")
  {
    return ConvertToPersian(currentDate.locale("fa").format("dddd، D MMMM"))
  }
  else
  {
    return ConvertToPersian(currentDate.format("MMMM D ,dddd"))
  }
}
// --------------- today date func end ---------------





// --------------- dark mode change func start ---------------
export function ToggleDarkMode () {

  // get element
  const htmlTag = document.querySelector("html");
  const body = document.body;


  // check and get cookie
  let resultMode = GetCookie("mode");
    
  // set dark / light mode 
  switch (resultMode) {
    case "dark":
      SetCookie("mode","light");
      htmlTag.classList.remove("dark");
      body.style.backgroundColor = "#fff";
      break;

    case "light":
    case undefined:
      SetCookie("mode","dark");
      htmlTag.classList.add("dark");
      body.style.backgroundColor = "#0f172a";
      break;
  
    default:
      break;
  }
}
// --------------- dark mode change func end ---------------





// --------------- open or close setting func start ---------------
export function OpenOrCloseSettings (open) {
  // get elements
  const settings = document.getElementById("settings");
  const settingsShadow = document.getElementById("shadowSettings");
  const settingsBox = document.getElementById("settingBox");
  

  // open or close setting
  if(open)
  {
    settings.style.display = "block"; 

    setTimeout(()=>{
      settingsShadow.style.opacity = "1";
      settingsBox.style.transform = "translateY(50%)"; 
    },50)
  }
  else
  {
    settingsShadow.style.opacity = "0";
    settingsBox.style.transform = "translateY(-100%)"; 

    setTimeout(()=>{
      settings.style.display = "none";
    },500)
  }
}
// --------------- open or close setting func end ---------------





// --------------- check weather icon func start ---------------
export function CheckIcon (codeIcon) {
  // get elements
  const weatherImgElement = document.getElementById("weather-img");
  const weatherIconJson = WeatherIconJson.iconItem;


  // check icon type
  switch (codeIcon) {
    case "01d":
        weatherImgElement.setAttribute("src", weatherIconJson.sun);
        break;

    case "01n":
        weatherImgElement.setAttribute("src", weatherIconJson.nigth);
        break;

    case "02d":
        weatherImgElement.setAttribute("src", weatherIconJson.sunCloud);
        break;
        
    case "02n":
        weatherImgElement.setAttribute("src", moonCloud);
        break;

    case "03d":
    case "03n":
    case "04d":
    case "04n":
        weatherImgElement.setAttribute("src", weatherIconJson.cloud);
        break;

    case "09d":
    case "09n":
        weatherImgElement.setAttribute("src", weatherIconJson.snowerRain);
        break;
            
    case "10d":
        weatherImgElement.setAttribute("src", weatherIconJson.rain);
        break;

    case "10n":
        weatherImgElement.setAttribute("src", moonRain);
        break;
            
    case "11d":
    case "11n":
        weatherImgElement.setAttribute("src", weatherIconJson.thunderstorm);
        break;

    case "13d":
    case "13n":
        weatherImgElement.setAttribute("src", weatherIconJson.snow);
        break;

    case "50d":
    case "50n":
        weatherImgElement.setAttribute("src", weatherIconJson.wind);
        break;

    default:
        break;
  }
}
// --------------- check weather icon func end ---------------





// --------------- convert seconds to time func start ---------------
export function ConvertSecondToTime (secondValue) {
  let seconds = secondValue;
  const time = new Date(seconds * 1000);
  const hour = time.getHours();
  const minute = time.getMinutes();
  const TimeFormatted = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;

  return TimeFormatted;
}
// --------------- convert seconds to time func end ---------------





// --------------- save cookie func start ---------------
export function SetCookie (cookieName, cookieValue) {
  document.cookie = `${cookieName}=${cookieValue}; path=/`;
}
// --------------- save cookie func end ---------------





// --------------- get cookie func start ---------------
export function GetCookie (cookieName) {
  let cookies = decodeURIComponent(document.cookie);
  let cookieList = cookies.split(";");

  for(var i in cookieList)
  {
    let cookie = cookieList[i].split("=");
    if(cookie[0].replace(" ","") === cookieName)
    {
      return cookie[1];
    }
  }
}
// --------------- get cookie func end ---------------