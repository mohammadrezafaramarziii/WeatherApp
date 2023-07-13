
// ---------- button by icon start ----------
export function ButtonIcon({icon, OnClick}) {
    return(
        <button onClick={OnClick} className="p-3.5 text-slate-900 duration-150 bg-slate-100 rounded-2xl hover:bg-slate-200 dark:bg-slate-200/10 dark:text-white dark:hover:bg-slate-700">
            {icon}
        </button>
    );
}
// ---------- button by icon end ----------





// ---------- button by icon and text start ----------
export function ButtonIconText({text, icon, OnClick, customeClass}) {
    return(
        <button onClick={OnClick} className={`w-full flex items-center gap-2 p-4 text-slate-900 duration-150 dark:text-white dark:hover:bg-slate-700 ${customeClass}`}>
            <span>
                {icon}
            </span>

            <span className="text-sm">
                {text}
            </span>
        </button>
    );
}
// ---------- button by icon and end start ----------


