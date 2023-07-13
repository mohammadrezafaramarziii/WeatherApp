export function Select(props) {
    return(
        <select id={props.id} onChange={props.OnChange} className="w-full appearance-none bg-transparent outline-none border-0 text-xs text-blue-500 dark:text-blue-300">
            {props.children}
        </select>
    );
}


export function Option(props) {
    return(
        <option className="text-base text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-700">
            {props.children}
        </option>
    );
}