import { useEffect } from "react";
import "./SplashScreen.css";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <h1 className="romantic-quote">दुई आत्मा, एक मुटु।</h1>
    </div>
  );
}
