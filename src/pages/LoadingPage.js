import "../features/loading/loader.css";

const  LoadingPage = () => {
    return ( 
        <section className="w-full h-screen flex flex-col items-center justify-center">

            {/* image sun and cloud */}
            <div className="w-[250px] h-[250px] flex items-center justify-center">
                <div className="container">
                    <div className="cloud front">
                        <span className="left-front"></span>
                        <span className="right-front"></span>
                    </div>
                    <span className="sun sunshine"></span>
                    <span className="sun"></span>
                    <div className="cloud back">
                        <span className="left-back"></span>
                        <span className="right-back"></span>
                    </div>
                </div>
            </div>



            {/* name app */}
            <div className="text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-1">
                نام برنامه
                </h2>

                <p className="text-base font-thin text-slate-400">
                برنامه هواشناسی
                </p>
            </div>


            {/* loader */}
            <div className="mt-10">
                <svg viewBox="25 25 50 50" className="loader w-8 h-8 !stroke-blue-500">
                    <circle r="20" cy="50" cx="50"></circle>
                </svg>
            </div>

        </section>
     );
}
 
export default LoadingPage;