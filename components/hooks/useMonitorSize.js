import { useEffect, useState } from "react";

export const useMonitorSize = () => {
  const [monitorSize, setMonitorSize] = useState({
    monitorWidth: 0,
    monitorHeight: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") { // 윈도우 타입이 언디파인드가 아닐때 실행
      const handleResize = () => { 
        setMonitorSize({
          monitorWidth: window.innerWidth,
          monitorHeight: window.innerHeight,
        });
      };

      window.addEventListener("resize", handleResize);
      handleResize();
      return () => window.removeEventListener("resize", handleResize); // 클린업
    } else {
      return;
    }
  }, []);
  return monitorSize;
};