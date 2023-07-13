import { useEffect, useState } from "react";
import { ConvertToPersian } from "../func/Func";


// -------------- weather box details start --------------
export function BoxDetail(props) {
    return (
        <div className="w-full flex flex-col gap-5 p-7 bg-white dark:bg-slate-900 rounded-3xl">
            <div>
                <h5 className="text-sm text-slate-300 dark:text-slate-500">
                    {props.title}
                </h5>
            </div>


            <div className={props.customeChildClass}>
                {props.children}
            </div>
        </div>
    );
}
// -------------- weather box details end --------------





// -------------- weather details start --------------

// details
export function Details(props) {

    // check detail status
    const [statusText, setStatusText] = useState();

    useEffect(()=>{
        if(props.value < 70)
        {
            setStatusText("خوب");
        }
        else
        {
            if(props.value >= 70 && props.value < 85)
            {
                setStatusText("متوسط");
            }
            else
            {
                if(props.value >= 85)
                {
                    setStatusText("بد");
                }
            }
        }
    });

    return(
        <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">

                {/* value and value unit */}
                <div>
                    <h4 className={`flex flex-row-reverse items-center gap-1 ${props.customValueClass}`}>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{props.unitIcon}</span>
                        <span className="text-4xl text-slate-800 dark:text-slate-100 font-bold">{ConvertToPersian(String(props.value))}</span>
                    </h4>
                </div>

                {/* status bar */}
                <div>
                    <StatusBar value={props.value}/>
                </div>
            </div>

            {/* status text */}
            <div>
                <span className="text-slate-900 dark:text-white">
                    {statusText}
                </span>
            </div>
        </div>
    );
}

// status bar
function StatusBar({value}) {
    const [checkColor, setCheckColor] = useState();

    useEffect(()=>{
        if(value < 70)
        {
            setCheckColor("#2563eb");
        }
        else
        {
            if(value >= 70 && value < 85)
            {
                setCheckColor("#eab308");
            }
            else
            {
                if(value >= 85)
                {
                    setCheckColor("#dc2626");
                }
            }
        }
    })

    return(
        <div className="w-[13px] h-[80px] flex items-end border border-slate-200 dark:border-slate-200/10 rounded-full overflow-hidden">
            <div 
                className="w-full rounded-full" 
                style={{
                    height: value > 100 ? "100%" : `${value}%` && value <= 0 ? "0%" : `${value}%`,
                    backgroundColor: checkColor
                }}
            >
            </div>
        </div>
    );
}
// -------------- weather details end --------------





// -------------- details box sunset and sunrise start --------------
export function DetailsSun(props) {

    return(
        <div className="w-full flex items-center gap-2">
            <div className="text-slate-400 dark:text-slate-500">
                {props.icon}
            </div>

            <div className="w-full flex flex-col">
                <span className="text-sm md:text-base text-slate-700 dark:text-slate-300 font-bold">
                    {ConvertToPersian(String(props.value))}
                </span>

                <span className="text-xs md:text-sm text-slate-400 dark:text-slate-600">
                    {props.text}
                </span>
            </div>
        </div>
    );
}
// -------------- details box sunset and sunrise end --------------