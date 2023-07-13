import { Option, Select } from "../forms/SelectBox";
import { OpenOrCloseSettings } from "../func/Func";
import { SelectBoxSettings } from "./ItemsSetting";
import JSONSetting from "../../data/settingJSON.json";

export function Settings() {

    // get and set settings item value
    let jsoSet = JSONSetting.settingItems;

    return (
        <section id="settings" className="hidden">

            {/* ***** shadow back setting box ***** */}
            <div id="shadowSettings" onClick={()=>OpenOrCloseSettings(false)} className="w-full h-full fixed top-0 right-0 bg-slate-900/30 backdrop-blur-sm z-30 opacity-0 duration-300"></div>
            

            {/* ***** setting box ***** */}
            <div id="settingBox" className="w-full fixed top-0 right-0 flex items-center justify-center px-5 z-40 translate-y-[-100%] duration-500 ease-in-out">
                <div className="w-full sm:w-[50%] lg:w-[35%] p-5 bg-white dark:bg-slate-800 rounded-3xl">
                   
                    {/* ----- setting title ----- */}
                    <div className="flex items-center justify-between mb-5 pr-3">
                        <h3 className="text-2xl text-slate-800 dark:text-slate-100">
                            تنظیمات
                        </h3>

                        <button onClick={()=>OpenOrCloseSettings(false)} className="p-1 pr-1.5 text-slate-800 dark:text-slate-100 hover:bg-slate-200 dark:hover:bg-slate-200/10 rounded-xl duration-150">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m15 5l-6 7l6 7"/></svg>
                        </button>
                    </div>


                    {/* ----- setting items ----- */}
                    <div className="bg-slate-100 dark:bg-slate-900 rounded-3xl">

                        <SelectBoxSettings title="ساعت">
                            <Select id="tTime" OnChange={()=>Save("tTime")}>
                                <Option>
                                    ۲۴ ساعته
                                </Option>
                                <Option>
                                    ۱۲ ساعته
                                </Option>
                            </Select>
                        </SelectBoxSettings>


                        <SelectBoxSettings title="تاریخ">
                            <Select id="tDate" OnChange={()=>Save("tDate")}>
                                <Option>
                                    شمسی
                                </Option>
                                <Option>
                                    میلادی
                                </Option>
                            </Select>
                        </SelectBoxSettings>
                    </div>

                    {/* about me data */}
                    <div className="flex flex-col gap-4 mt-4 p-5 bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-100 text-sm rounded-3xl overflow-y-hidden">
                        
                        <span>
                            <a className="hover:text-blue-600 duration-100" href="http://faramarzimr.ir/" target="blank">سایت من : faramarzimr.ir</a>
                        </span>

                        <div className="flex items-center justify-between">
                            <span>
                                ساخته شده توسط محمدرضا فرامرزی
                            </span>

                            <span>
                                نسخه: ۱.۰.۰
                            </span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )


    // set setting to json
    function Save (elementId){
        const element = document.getElementById(elementId);

        switch (elementId) {
            case "tTime":
                jsoSet[0].TypeTime = element.value === "۲۴ ساعته" ? "24" : "12";
                break;

            case "tDate":
                jsoSet[1].TypeDate = element.value === "شمسی" ? "sh" : "mi";
                break;

            default:
                break;
        }

    }
}

