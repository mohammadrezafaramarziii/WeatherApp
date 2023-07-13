import { useEffect } from "react";
import { ConvertToPersian, CurrentDate, LastRefresh, TimeClock } from "../func/Func";
import { Alert2 } from "../forms/Alert";

export function WeatherBox (props) {

    useEffect(()=>{
        const weatherImg = document.getElementById("weather-img");

        setTimeout(()=>{
            weatherImg.style.opacity = "100%";
        }, 1000)
    })

    return (
        <section className="w-full lg:h-full pt-16 md:p-4 lg:flex flex-col justify-between md:bg-slate-100 md:dark:bg-slate-200/10 rounded-3xl">

            {/* ********** icon and temp start ********** */}
            <div className="w-full lg:h-full md:flex  flex-row-reverse lg:flex-col md:mb-4 md:px-5 lg:p-0 items-center lg:items-start justify-between lg:pt-8">
                
                {/* ----- icon ----- */}
                <div className="mb-10 pr-5 md:p-0 md:m-0">
                     <img 
                        id="weather-img" 
                        src="https://api.iconify.design/solar:gallery-remove-outline.svg?color=%23e2e8f0" 
                        alt="weather icon" 
                        width="150"
                        height="150" 
                        className="opacity-0 duration-300 ease-in-out"
                    />               
                </div>



                {/* ----- temp and dateTiime ----- */}
                <div className="mb-5 pr-5 md:p-0 md:m-0 md:mt-5 lg:m-0">

                    {/* temp */}
                    <h1 id="temp" className="text-6xl text-slate-900 dark:text-white mb-5 md:m-0">
                        {ConvertToPersian(`${Math.trunc(props.temp)}°`)}
                    </h1>

                    {/* date Time */}
                    <div className="flex flex-col text-sm text-slate-400 lg:pr-5">
                        <span>
                            {CurrentDate()}
                        </span>
                        <span>
                            {TimeClock()}
                        </span>
                    </div>
                </div>
            </div>
            {/* ********** icon and temp end ********** */}





            {/* ********** detail weather start ********** */}
            <div className="w-full flex flex-col gap-4 px-4 py-9 bg-slate-100 md:bg-white dark:bg-slate-200/10 md:dark:bg-slate-900 rounded-3xl">
                <ItemsDetail 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12.476 4.75c-2.75 0-4.964 2.2-4.964 4.897c0 .462.065.909.185 1.331c.497.144.963.36 1.383.64a.75.75 0 1 1-.827 1.25a3.54 3.54 0 0 0-1.967-.589c-1.961 0-3.536 1.57-3.536 3.486c0 1.916 1.575 3.485 3.536 3.485h10c2.75 0 4.964-2.2 4.964-4.897c0-2.137-1.39-3.962-3.338-4.628a5.018 5.018 0 0 0-1.626-.27c-.583 0-1.14.1-1.658.28a.75.75 0 0 1-.494-1.416a6.517 6.517 0 0 1 3.024-.305a4.962 4.962 0 0 0-4.682-3.264Zm6.355 3.721c-.559-2.977-3.197-5.221-6.355-5.221c-3.562 0-6.464 2.856-6.464 6.397c0 .387.035.767.102 1.135c-2.694.09-4.864 2.278-4.864 4.983c0 2.761 2.263 4.985 5.036 4.985h10c3.561 0 6.464-2.856 6.464-6.397c0-2.644-1.619-4.905-3.919-5.882Z" clipRule="evenodd"/></svg>}
                    text={props.desc}
                />

                <ItemsDetail 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.605 4 10.144Z"/><circle cx="12" cy="10" r="3"/></g></svg>}
                    text={props.location}
                />

                <ItemsDetail 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 0 0-.528 1.283l1.68 1.666a.75.75 0 0 0 1.056 0l1.68-1.666a.75.75 0 0 0-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.658 7.658 0 0 1 6.537 3.643a.75.75 0 1 0 1.277-.786A9.158 9.158 0 0 0 12.08 2.25Zm8.762 8.217a.75.75 0 0 0-1.054 0L18.1 12.133a.75.75 0 0 0 .527 1.284h.899c-.382 3.83-3.651 6.833-7.644 6.833a7.697 7.697 0 0 1-6.565-3.644a.75.75 0 1 0-1.277.788a9.197 9.197 0 0 0 7.842 4.356c4.808 0 8.765-3.66 9.15-8.333H22a.75.75 0 0 0 .527-1.284l-1.686-1.666Z"/></svg>}
                    text={ConvertToPersian(props.timeRefresh)}
                />
            </div>
            {/* ********** detail weather end ********** */}

        </section>
    );
}





function ItemsDetail (props) {
    return (
        <li className={`flex items-center gap-2 text-slate-400 ${props.customeClass}`}>
            <span>
                {props.icon}
            </span>

            <span id={props.id} className="text-sm">
                {props.text}
            </span>
        </li>
    );
}