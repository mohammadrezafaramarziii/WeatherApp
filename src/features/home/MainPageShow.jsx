import { useEffect, useState } from "react";
import MainPage from "../../pages/MainPage";
import LoadingPage from "../../pages/LoadingPage";

const MainPageShow = () => {

    const [showHome, setShowHome] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setShowHome(true);
        }, 1500);

        setTimeout(()=>{
            document.getElementById("main-page").style.opacity = "100%";
        }, 2000);
    }, []);

    if(showHome)
    {
        return <MainPage />
    }
    else
    {
        return <LoadingPage />
    }
}
 
export default MainPageShow;