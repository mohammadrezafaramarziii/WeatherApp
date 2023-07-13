import { BoxNormal, BoxWithOutTitle } from "../components/forms/Box";
import { NavbarDesktop, NavbarMobile } from "../components/navbar/Navbar";
import { WeatherBox } from "../components/weatherBox/WeatherBox";
import { BoxDetail, Details, DetailsSun } from '../components/weatherBox/BoxDetail';
import { Settings } from '../components/settingsApp/Settings';
import { Alert, Alert2 } from '../components/forms/Alert';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { CheckIcon, ConvertSecondToTime, ConvertToPersian, GetCookie, SetCookie } from '../components/func/Func';
import { ConnectionErrorIcon, ErrorIcon } from '../components/forms/icons';
import moment from 'jalali-moment';
import { ImgSlider } from "../components/ImgSlider/ImgSlider";


const MainPage = () => {

    // token and url api
    const token = "d102ce6f8a7f8c61a416505fdeb98697";
    const myToken = "ae0620f44bf376d8245c511578b2aee5";
    const url = "https://api.openweathermap.org/data/2.5/weather?";


    // save data
    const [data, setData] = useState({
        temp: "",
        desc: "",
        location: "",
        timeRefresh: "",
        humidity: "",
        wind: "",
        sunrise: "",
        sunset: "",
        maxTemp:"",
        minTemp: "",
        visibility: ""
    });


    // save error data
    const [error, setError] = useState({
        state: false,
        errWork: false,
        icon: "",
        message: "",
    });

    
    // search location text
    const searchText = useRef(null);
    let search;
    

    // ---------- get data weather from api ----------
    function getWeather (location) {

        axios.get(`${url}q=${location}&units=metric&lang=fa&appid=${myToken}`).then((res)=>{

            setData({
                ...data, 
                temp: res.data.main.temp,
                desc: res.data.weather[0].description,
                location: res.data.name,
                timeRefresh: `آخرین بروزرسانی ${moment().format("HH:mm")}`,
                humidity: res.data.main.humidity,
                wind: res.data.wind.speed,
                sunrise: ConvertSecondToTime(res.data.sys.sunrise),
                sunset: ConvertSecondToTime(res.data.sys.sunset),
                maxTemp: res.data.main.temp_max,
                minTemp: res.data.main.temp_min,
                visibility: res.data.visibility
            });

            CheckIcon(res.data.weather[0].icon);

        }).catch((err)=>{
            switch (err.message) {
                case "Request failed with status code 404":
                    setError({...error, state: true, message: "محل مورد نظر پیدا نشد"});
                    break;
    
                case "Request failed with status code 400":
                    setError({...error, state: true, message: "محل مورد نظر را تایپ کنید"});
                    break;
            
                case "Network Error":
                    setError({...error, errWork: true, message: "از اتصال اینترنت خود و خاموش بودن فیلترشکن اطمینان حاصل کنید", icon: <ConnectionErrorIcon />});
                    break;
            
                default:
                    setError({...error, errWork: true, message: "خطای غیر منتظره. لطفا مجدد امتحان کنید", icon: <ErrorIcon />});
                    break;
            }
        });
    }


    // ---------- get data weather from api and clear search bar ----------
    function getWeatherClearInput (loc) {
        getWeather(loc);
        SetCookie("locationName",search);
        searchText.current.value = "";
        search = "";

        if(error.state === true)
        {
            setError({...error, state:false});
        }

        if(error.errWork === true)
        {
            setError({...error, errWork:false});
        }
    }


    // ---------- check status dark mode ----------
    function checkDarkMode(){
        const htmlTag = document.querySelector("html");
        const body = document.body;
        let mode = GetCookie("mode");

        if(mode === "light" || undefined)
        {
            htmlTag.classList.remove("dark");
            body.style.backgroundColor = "#fff";
        }
        else if(mode === "dark")
        {
            htmlTag.classList.add("dark");
            body.style.backgroundColor = "#0f172a";
        }
    }


    // ---------- check location in cookie ----------
    function checkLocationCookie(){
        let locationName = GetCookie("locationName");

        if(locationName === undefined)
        {
            getWeather("تهران");
        }
        else
        {
            getWeather(locationName)
        }
    }


    useEffect(()=>{
        checkDarkMode();
        checkLocationCookie();
    }, []);


    // save user search
    function handleChangeSearch (event){
        search = event.target.value;
    }

    return ( 
        <section id='main-page' dir="rtl" className="flex flex-col gap-4 lg:w-full lg:h-screen lg:overflow-hidden p-4 opacity-0 duration-300">

            {/* ***** alerts start ***** */}
            {
                error.errWork === true ?
                    <Alert2 
                        text={error.message}
                        icon={error.icon}
                    />
                :
                ""
            }

            {
                error.state === true ?
                    <Alert
                        text={error.message}
                        type="err"
                        isOpen={true}
                    />
                :
                ""                
            }
            {/* ***** alerts start ***** */}



            {/* ---------- navbar in mobile start ---------- */}
            <NavbarMobile valueRef={searchText} OnChange={handleChangeSearch} OnClick={()=>getWeatherClearInput(search)}/>
            {/* ---------- navbar in mobile end ---------- */}




            {/* ---------- navbar in desktop start ---------- */}
            <NavbarDesktop valueRef={searchText} OnChange={handleChangeSearch} OnClick={()=>getWeatherClearInput(search)}/>
            {/* ---------- navbar in desktop end ---------- */}





            {/* ---------- content start ---------- */}
            <div className="lg:h-full flex flex-col lg:flex-row gap-4 pb-16">

                {/* ********** weather details start ********** */}
                <div className="w-full lg:w-[25%] xl:w-[22%] 2xl:w-[20%]">
                    <WeatherBox 
                        temp={data.temp}
                        desc={data.desc}
                        location={data.location}
                        timeRefresh={data.timeRefresh}
                    />
                
                </div>
                {/* ********** weather details end ********** */}




                {/* ********** other data weather start ********** */}
                <div className="no-scrollBar w-full lg:w-[75%] xl:w-[77%] 2xl:w-[80%] lg:overflow-y-scroll rounded-3xl">
                    
                    {/* ***** this week temp start ***** */}
                    <BoxWithOutTitle customeClass="mb-4">
                       <ImgSlider></ImgSlider>
                    </BoxWithOutTitle>
                    {/* ***** this week temp end ***** */}



                    {/* ***** other data today start ***** */}
                    <BoxNormal title="اطلاعات روز" customeChildClass="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3">

                        {/* sunset and sunrise data */}
                        <BoxDetail title="طلوع و غروب" customeChildClass="flex items-center justify-between gap-5 sm:flex-col">
                            <DetailsSun 
                                text="طلوع"
                                value={data.sunrise}
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] md:w-[40px]' viewBox="0 0 24 24"><g fill="none"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 22h8M5 19h14M2 16h20"/><path stroke="currentColor" strokeWidth="1.5" d="M12 6a6 6 0 0 0-4.5 9.969h9A6 6 0 0 0 12 6Z"/><path fill="currentColor" d="m12 10l.53-.53a.75.75 0 0 0-1.06 0L12 10Zm1.47 2.53a.75.75 0 1 0 1.06-1.06l-1.06 1.06Zm-4-1.06a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM12.75 16v-6h-1.5v6h1.5Zm-1.28-5.47l2 2l1.06-1.06l-2-2l-1.06 1.06Zm0-1.06l-2 2l1.06 1.06l2-2l-1.06-1.06Z"/><path stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" d="M12 2v1m10 9h-1M3 12H2m17.07-7.07l-.392.393M5.322 5.322l-.393-.393"/></g></svg>}
                            />
                            <DetailsSun 
                                text="غروب"
                                value={data.sunset}
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] md:w-[40px]' viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 1.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0V2a.75.75 0 0 1 .75-.75ZM4.399 4.399a.75.75 0 0 1 1.06 0l.393.392a.75.75 0 0 1-1.06 1.061l-.393-.393a.75.75 0 0 1 0-1.06Zm15.202 0a.75.75 0 0 1 0 1.06l-.393.393a.75.75 0 0 1-1.06-1.06l.393-.393a.75.75 0 0 1 1.06 0ZM11.25 6.803a5.251 5.251 0 0 0-3.398 8.416h8.296a5.251 5.251 0 0 0-3.398-8.416v3.386l.72-.72a.75.75 0 1 1 1.06 1.061l-2 2a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l.72.72V6.802ZM6.083 15.25a6.75 6.75 0 1 1 11.835 0H22a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1 0-1.5h4.083ZM1.25 12a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm19 0a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75Zm-16 7a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Zm3 3a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" clipRule="evenodd"/></svg>}
                            />
                        </BoxDetail>
                        

                        {/* humidity air */}
                        <BoxDetail title="جزئیات دما" customeChildClass="flex items-center justify-between gap-5 sm:flex-col">
                            <DetailsSun 
                                text="بیشترین دما"
                                value={data.maxTemp}
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] md:w-[40px] text-red-500' viewBox="0 0 32 32"><path fill="currentColor" d="M20 10h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-10-1.816V7H8v13.184a3 3 0 1 0 2 0z"/><path fill="currentColor" d="M30 4H12.974A4.983 4.983 0 0 0 4 7v11.11a7 7 0 1 0 10 0V7a5.002 5.002 0 0 0-.101-1H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28Z"/></svg>}
                            />

                            <DetailsSun 
                                text="کمترین دما"
                                value={data.minTemp}
                                icon={<svg xmlns="http://www.w3.org/2000/svg" className='w-[30px] md:w-[40px] text-blue-600' viewBox="0 0 32 32"><path fill="currentColor" d="M20 4h7v2h-7zm0 6h10v2H20zm0 6h7v2h-7zm-8 7a3 3 0 0 1-6 0z"/><path fill="currentColor" d="M30 22H15.92A7.01 7.01 0 0 0 14 18.11V7A5 5 0 0 0 4 7v11.11A6.995 6.995 0 1 0 15.92 24H30ZM9 28a4.993 4.993 0 0 1-3.332-8.718L6 18.983V7a3 3 0 0 1 6 0v11.983l.332.299A4.993 4.993 0 0 1 9 28Z"/></svg>}
                            />
                        </BoxDetail>


                        {/* humidity air */}
                        <BoxDetail title="رطوبت هوا" customeChildClass="">
                            <Details value={data.humidity} unitIcon="٪"/>
                        </BoxDetail>



                        {/* quality air */}
                        <BoxDetail title="سرعت باد" customeChildClass="">
                            <Details value={Math.floor(data.wind)} unitIcon="کیلومتر بر ساعت"/>
                        </BoxDetail>



                        {/* quality air */}
                        <BoxDetail title="میزان دید" customeChildClass="">
                            <div className="flex flex-col gap-6">
                                <div className='h-[80px] flex items-center justify-start'>
                                    <h4 className="flex flex-row-reverse items-center gap-1">
                                        <span className="text-sm text-slate-700 dark:text-slate-300">متر</span>
                                        <span className="text-4xl text-slate-800 dark:text-slate-100 font-bold">{ConvertToPersian(String(data.visibility))}</span>
                                    </h4>
                                </div>

                                <div>
                                    <span className="text-slate-900 dark:text-white">
                                        {
                                            data.visibility >= 10000 ? "خوب" : "متوسط"  &&data.visibility <= 5000 ? "بد" : "متوسط"
                                        }
                                    </span>
                                </div>
                            </div>
                        </BoxDetail>

                    </BoxNormal>
                    {/* ***** other data today end ***** */}
                </div>
                {/* ********** other data weather end ********** */}
            </div>
            {/* ---------- content end ---------- */}

            {/* settting box */}
            <Settings /> 

        </section>
    );
}
 
export default MainPage;