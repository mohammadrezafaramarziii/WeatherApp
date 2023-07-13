
export function SelectBoxSettings(props) {

    return(
        <button className={`item-setting before:bg-slate-200 before:dark:bg-slate-200/10 first:rounded-t-3xl last:rounded-b-3xl w-full flex flex-col relative py-2 px-5 first:pt-4 last:pb-4 dark:border-slate-200/10 hover:bg-slate-200 dark:hover:bg-slate-200/10 duration-150 ${props.customeClass}`}>
            <h3 className="text-slate-800 dark:text-slate-100">
                {props.title}
            </h3>
            
            {props.children}
        </button>
    );
}


export function ItemsSettings(props) {

    return(
        <button className={`w-full flex flex-col relative p-5 text-slate-800 dark:text-slate-100 dark:border-slate-200/10 hover:bg-slate-200 dark:hover:bg-slate-200/10 duration-150 ${props.customeClass}`}>
            {props.title}
        </button>
    );
}



