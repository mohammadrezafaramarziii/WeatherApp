import { TimeClock } from "../func/Func";

export function Time () {
    return (
        <h3 className="text-4xl md:text-[40px] text-slate-800 dark:text-slate-100">
            {TimeClock()}
        </h3>
    );
}