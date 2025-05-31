import { useEffect, useState, RefObject } from "react";
import { HeartsRain } from "../components/HeartsRain";
import "./EnvelopeIntroPage.css";

export default function EnvelopeIntroPage({
  onOpen,
  audioRef,
}: {
  onOpen: () => void;
  audioRef: RefObject<HTMLAudioElement>;
}) {
  const [isTilted, setIsTilted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [hasTapped, setHasTapped] = useState(false);

  useEffect(() => {
    const handleOrientation = (event: DeviceOrientationEvent) => {
      if (event.gamma && Math.abs(event.gamma) > 25) {
        setIsTilted(true);
      }
    };
    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  const handleTap = () => {
    if (isTilted && !isOpen) {
      setHasTapped(true);
      setIsOpen(true);
      audioRef.current?.play().catch(() => {});
      setTimeout(onOpen, 8500);
    }
  };

  return (
    <div className="envelope-wrapper" onClick={handleTap}>
      {!hasTapped ? (
         <div className="tap-container">
          <div className="tap-message">📱 Tap to open</div>
        <img src="/Ganesh.jpg" alt="Ganesh" className="ganesh-image" />
        </div>
      ) : (
        <div className={`envelope ${isOpen ? "opened" : ""}`}>
          <div className="envelope-content">
            <img src="/Red-envelop.jpg" alt="Envelope" className="envelope-image" />
            <div className="invite-text">
              <br /><br />
              तपाईंलाई सुदन र सुस्माको<br />
              वैवाहिक समारोहमा<br />
              हार्दिक आमन्त्रण गर्दछौ!
            </div>
          </div>
          {isOpen && <HeartsRain />}
        </div>
      )}
    </div>
  );
}
