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
      setIsOpen(true);

      // Play music immediately
      audioRef.current?.play().catch(() => {});

      // Wait for envelope open animation, then move to splash
      setTimeout(onOpen, 4500);
    }
  };

  return (
    <div className="envelope-wrapper" onClick={handleTap}>
      <div className={`envelope ${isOpen ? "opened" : ""}`}>
        <div className="flap" />
        <div className="message-inside">
          {!isOpen && (
            <div className="center-message">
              📱 Tilt your phone & tap to open this message
            </div>
          )}
          {isOpen && (
            <div className="invite-message">
              💌 You are invited to SUDAN and SUSMA wedding celebration!
            </div>
          )}
        </div>
        {isOpen && <HeartsRain />}
      </div>
    </div>
  );
}
