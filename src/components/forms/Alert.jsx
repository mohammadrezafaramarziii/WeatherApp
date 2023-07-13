import { useEffect, useState } from "react";
import { RefreshPage } from "../func/Func";


// ---------- start alert 1 ----------
export function Alert({text, type, isOpen}) {

    // open and close alert function
    useEffect(()=>{
        const myAlert = document.getElementById("Alert");

        if(isOpen === true)
        {
            myAlert.style.transform = "translateY(0%)";

            setTimeout(()=>{
                myAlert.style.transform = "translateY(-100%)";
            }, 5000)
        }
    });

    return (
        <div id="Alert" className={`w-full fixed top-0 right-0 p-5 z-50 duration-300 translate-y-[-100%]`}>
            <div className={`sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%] mx-auto flex items-center gap-3 p-2 bg-slate-50 dark:bg-slate-800 border ${type === "suc" ? "border-green-600" : "border-red-600"} rounded-3xl`}>
                
                {/* ***** icon alert ***** */}
                <div className={`bg-green-600 text-white dark:text-slate-700 p-4 rounded-2xl ${type === "suc" ? "bg-green-600" : "bg-red-600"}`}>
                    {type === "suc" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 15 15"><path fill="currentColor" fill-rule="evenodd" d="M0 7.5a7.5 7.5 0 1 1 15 0a7.5 7.5 0 0 1-15 0Zm7.072 3.21l4.318-5.398l-.78-.624l-3.682 4.601L4.32 7.116l-.64.768l3.392 2.827Z" clip-rule="evenodd"/></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c5.523 0 10 4.478 10 10s-4.477 10-10 10S2 17.522 2 12S6.477 2 12 2Zm.002 13.004a.999.999 0 1 0 0 1.997a.999.999 0 0 0 0-1.997ZM12 7a1 1 0 0 0-.993.884L11 8l.002 5.001l.007.117a1 1 0 0 0 1.986 0l.007-.117L13 8l-.007-.117A1 1 0 0 0 12 7Z"/></svg>
                    }
                </div>

                {/* ***** text alert ***** */}
                <div className="text-slate-800 dark:text-slate-100">
                    {text}
                </div>

            </div>
        </div>
    );
}
// ---------- end alert 1 ----------





// ---------- start alert 2 ----------
export function Alert2({text, icon}) {

    return (
        <div id="Alert2" className="w-full h-screen flex items-center justify-center bg-slate-900/70 fixed top-0 right-0 p-5 z-50 duration-300">
            <div className="sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[35%] flex flex-col items-center p-2 bg-slate-50 dark:bg-slate-800 border border-late-200 dark:border-slate-200/10 rounded-3xl">
                
                {/* ***** icon alert ***** */}
                <div className="bg-red-600 text-white p-4 rounded-2xl">
                    {icon}
                </div>

                {/* ***** text alert ***** */}
                <div className="text-slate-800 dark:text-slate-100 pt-5 pb-3 text-center">
                    {text}
                </div>

                {/* ***** refresh button alert ***** */}
                <button onClick={RefreshPage} className="text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-900 p-2 rounded-2xl duration-150">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12.079 2.25c-4.794 0-8.734 3.663-9.118 8.333H2a.75.75 0 0 0-.528 1.283l1.68 1.666a.75.75 0 0 0 1.056 0l1.68-1.666a.75.75 0 0 0-.528-1.283h-.893c.38-3.831 3.638-6.833 7.612-6.833a7.658 7.658 0 0 1 6.537 3.643a.75.75 0 1 0 1.277-.786A9.158 9.158 0 0 0 12.08 2.25Zm8.762 8.217a.75.75 0 0 0-1.054 0L18.1 12.133a.75.75 0 0 0 .527 1.284h.899c-.382 3.83-3.651 6.833-7.644 6.833a7.697 7.697 0 0 1-6.565-3.644a.75.75 0 1 0-1.277.788a9.197 9.197 0 0 0 7.842 4.356c4.808 0 8.765-3.66 9.15-8.333H22a.75.75 0 0 0 .527-1.284l-1.686-1.666Z"/></svg>
                </button>
            </div>
        </div>
    );
}
// ---------- start alert 2 ----------