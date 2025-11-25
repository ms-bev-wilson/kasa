import { useEffect, useState } from "react";

export default function MobileCheck() {
    let [isMobile, setIsMobile] = useState(false);
   
    let handleResize = () => {
        setIsMobile(Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1);
    };
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    console.log("isMobile", isMobile);
    console.log("window.innerWidth", window.innerWidth);
    return isMobile;
}

