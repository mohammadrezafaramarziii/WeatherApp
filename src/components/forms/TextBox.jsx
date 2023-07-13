
export function TextBoxSearch(props){
    return(
        <div className="flex items-center gap-1 p-2 bg-slate-100 dark:bg-slate-200/10 rounded-2xl">
            <button onClick={props.OnClick} className="p-2 rounded-xl text-slate-700 hover:bg-slate-200 duration-150 dark:hover:bg-slate-600 dark:text-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11.5" cy="11.5" r="9.5"/><path strokeLinecap="round" d="m20 20l2 2"/></g></svg>
            </button>

            <input 
                id="txt-search"
                type="text" 
                autoComplete="off"
                ref={props.valueRef}
                onChange={props.OnChange}
                placeholder="جستجو برای محل مورد نظر ..."
                className="w-full bg-transparent outline-none border-0 text-xs placeholder-slate-400 text-slate-900 dark:text-white"
            />
        </div>
    );
}