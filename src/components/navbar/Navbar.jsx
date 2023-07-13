import { useState } from "react";
import { TextBoxSearch } from "../forms/TextBox";
import { Time } from "../timeBox/Time";
import { OptionsListDesktop, OptionsListMobile } from "./OptionList";


export function NavbarMobile(props){

    // open or menu in mobile
    const [statusMenu, setStatusMenu] = useState(false);

    function openOrCloseMenu(value){
        setStatusMenu(value);
    }

    return(
        <header dir="rtl" className="p-5 md:hidden z-20">

            {/* ---------- open menu button start ---------- */}
            <button onClick={()=>openOrCloseMenu(true)} className="text-slate-700 dark:text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17h7M5 12h14M5 7h14"/></svg>
            </button>
            {/* ---------- open menu button end ---------- */}





            {/* ---------- menu start ---------- */}
            <div className={`${statusMenu ? "block" : "hidden"} w-full h-screen p-4 fixed top-0 right-0 bg-slate-900/30 backdrop-blur-sm`}>
                <nav className="w-full sm:w-1/2 flex flex-col gap-2 pt-6 relative bg-white rounded-3xl overflow-hidden dark:bg-slate-800">
                            
                    {/* ***** close nav ***** */}
                    <button onClick={()=>openOrCloseMenu(false)} className="absolute top-5 left-5 text-slate-700 dark:text-slate-200">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="m7 7l10 10M7 17L17 7"/></svg>
                    </button>


                    {/* ***** time ***** */}
                    <div className="pr-6">
                        <Time />
                    </div>



                    {/* ***** search bar ***** */}
                    <div className="px-4">
                        <TextBoxSearch valueRef={props.valueRef} OnChange={props.OnChange} OnClick={props.OnClick}/>
                    </div>



                    {/* ***** menu options ***** */}
                    <div>
                        <OptionsListMobile />
                    </div>                
                </nav>
            </div>
            {/* ---------- menu end ---------- */}

        </header>
    );
}



export function NavbarDesktop(props){
    return(
        <header dir="rtl" className="w-full hidden md:flex items-center gap-4 z-20">

            {/* ***** search bar ***** */}
            <div className="w-[30%] lg:w-[25%] xl:w-[22%] 2xl:w-[20%]">
                <TextBoxSearch valueRef={props.valueRef} OnChange={props.OnChange} OnClick={props.OnClick}/>
            </div>



            {/* ***** time and menu options ***** */}
            <div className="w-[70%] lg:w-[75%] xl:w-[78%] 2xl:w-[80%] flex items-center justify-between">
                {/* time */}
                <div>
                    <Time></Time>
                </div>


                {/* menu options */}
                <div>
                    <OptionsListDesktop />
                </div>
            </div>
        </header>
    );
}