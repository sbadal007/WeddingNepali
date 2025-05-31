import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./InvitationPage.css";
import { HeartsRain } from "../components/HeartsRain";
import ItineraryFlight from "../components/ItineraryFlight";

const milestones = [
  { date: "2018", text: "RN", img: "/story1.jpg" },
  { date: "2020",  text: (
      <>
        Bachelor of Computer Science (BCS) ! I did it.        
        <br /> <br />
        Bachelor of Science in Nursing (BSN) ! She followed me.
      </>
    ), img: "/story2.jpg" },
  { date: "2025", text: (
      <>
        MSIT ! I did it again.        
        <br /> <br />
        MSN ! and She followed me again.
        <br /> <br />
        <strong> It's just two degrees, one dream! </strong>
      </>
    ), img: "/story3.jpg" },
];

const galleryImages = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
  "/gallery5.jpg",
  "/gallery6.jpg",
];

export default function InvitationPage() {
  const [isStandaloneBrowser, setIsStandaloneBrowser] = useState(true);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor;
    const isInAppBrowser = /FBAN|FBAV|Instagram|Messenger/i.test(ua);
    setIsStandaloneBrowser(!isInAppBrowser);
  }, []);

  return (
    <div className="invitation-page">

      {/* 🎉 Welcome Message with Animation */}
      <section className="welcome-message rose-bordered">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          🥳 We Swiped Right... Now We're Saying "I Do!"
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
           दुई फरक सोच भएका मान्छेहरू,
            जो पहिले जिस्किने, हाँस्ने, अनि बेलाबेला झगडा गर्ने गर्थे,
            आज आएर एक नयाँ सम्बन्धमा बाँधिन लागिरहेका छौँ
            र यस सम्बन्धलाई हामीले नाम दिएका छौँ
            <br /> 
            ✨ सुदन Weds सुस्मा ✨
            <br />
            यस खुसीको पलमा,
            हामी तपाईंको उपस्थितिलाई विशेष महत्वका साथ आमन्त्रण गर्न चाहन्छौँ |
            जहाँ हाँसो हुनेछ, खुसी साटिनेछ,
            र लगाएका लुगा एक दुई साइजले टाइट हुन सक्ने खालका परिकारहरू हुनेछन्! 
            <br />
            😄😄😄
            <br />
            हाम्रो प्रेममय झगडा, तिता–मिठा मजाकका साक्षी बन्नलाई आमन्त्रण गर्न चाहन्छौँ |
            <br />
            आमन्त्रण:
            सुदन
            र
            सुस्मा (भविष्यमा मेरा पासवर्डहरूको सम्भावित वारिस 😉) <h1>🕺💃</h1>
        </motion.p>

        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -20, 20, -20, 20, 0] }}
          transition={{ delay: 1.2, duration: 2 }}
          className="emoji-wave"
        >
          🙏🙏🙏🙏🙏🙏🙏
        </motion.div>

        <HeartsRain />
      </section>

      {/* 📅 Wedding Itinerary with Flight */}
      <section className="itinerary rose-bordered">
        <h3>SUDAN    Weds    SUSMA </h3>
        <ul>
          <li>एंगेजमेन्ट समारोह  – आश्विन ६, २०८२</li>
          <li>विवाह समारोह  – आश्विन ९, २०८२</li>
          <li>रिसेप्शन र डिनर – आश्विन १०, २०८२</li>
        </ul>
        <ItineraryFlight />
      </section>

      {/* ❤️ Our Story Timeline */}
      <section className="our-story rose-bordered">
        <h3>Our Story</h3>
        <div className="milestones">
          {milestones.map(({ date, text, img }) => (
            <div key={date} className="milestone">
            <img src={img} alt={date} />
            <p><strong>{date}: {text} </strong></p>
          </div>
      ))}
        </div>
        <HeartsRain />
      </section>

      {/* 📸 Photo Gallery */}
      <section className="photo-gallery rose-bordered">
        <h3>Photo Gallery</h3>
        <div className="gallery-grid">
          {galleryImages.map((src, i) => (
            <img key={i} src={src} alt={`Gallery image ${i + 1}`} />
          ))}
        </div>
        <HeartsRain />
      </section>

      <br />
      {/* 🔘 Close Button (only in standalone browser) */}
      {isStandaloneBrowser && (
        <div className="close-button-container">
          <button className="close-button" onClick={() => window.close()}>
            🙏 Close Invitation
          </button>
        </div>
      )}
      <br /> <br /> <br />
    </div>
  );
}
