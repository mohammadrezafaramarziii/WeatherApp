export function BoxNormal(props) {
    return (
        <section className={`w-full flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 bg-slate-100 dark:bg-slate-200/10 rounded-3xl ${props.customeClass}`}>

            {/* ********** box head start ********** */}
            <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl text-slate-900 dark:text-white">
                    {props.title}
                </h3>
            </div>
            {/* ********** box head end ********** */}





            {/* ********** box body start ********** */}
            <div className={`${props.customeChildClass}`}>
                {props.children}
            </div>
            {/* ********** box body end ********** */}

        </section>
    );
}



export function BoxWithOutTitle(props) {
    return (
        <section className={`w-full flex flex-col gap-4 md:gap-6 lg:gap-8 p-4 md:p-6 lg:p-8 bg-slate-100 dark:bg-slate-200/10 rounded-3xl ${props.customeClass}`}>

            {/* ********** box body start ********** */}
            <div className={`${props.customeChildClass}`}>
                {props.children}
            </div>
            {/* ********** box body end ********** */}

        </section>
    );
}