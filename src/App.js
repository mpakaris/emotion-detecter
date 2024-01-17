import { useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Landing from "./components/Landing";
import Products from "./components/Products";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import EmotionDetector from "./emotion/EmotionDetector";

export default function App() {
  const [currentEmotion, setCurrentEmotion] = useState("No Emotion Detected");

  return (
    <>
      <h1 className="text-2xl text-red-700 text-center font-bold my-1">
        {currentEmotion || "No Emotion Detected"}
      </h1>
      <Hero />
      <div className="flex justify-center my-3">
        <div className="w-1/5 mr-5" style={{ border: "6px solid black" }}>
          <EmotionDetector setEmotion={setCurrentEmotion} />
        </div>
        <div className="w-1/2" style={{ border: "0px solid red" }}>
          {currentEmotion === "No Emotion Detected" && <Landing />}
        </div>
      </div>
      {currentEmotion === "disgusted" && <Team />}
      {currentEmotion === "happy" && <Products />}
      {currentEmotion === "angry" && <Testimonials />}
      {currentEmotion === "sad" && <Contact />}
      <Footer />
    </>
  );
}
