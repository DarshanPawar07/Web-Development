import { useEffect, useRef, useState } from "react";

const tips = [
  "🗺 Download offline maps before you travel.",
  "🔋 Carry a power bank.",
  "📶 Use WiFi instead of mobile data in foreign countries.",
  "🚨 Share your location with someone you trust."
];

const TravelTips = () => {
  const [visibleTips, setVisibleTips] = useState([]);
  const tipRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleTips((prev) => [...prev, entry.target.dataset.tipIndex]);
          }
        });
      },
      { threshold: 0.3 }
    );

    tipRefs.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2  place-self-center">Travel Tips</h2>
      {tips.map((tip, index) => (
        <div
          key={index}
          data-tip-index={index}
          ref={(el) => (tipRefs.current[index] = el)}
          className={`transition-all duration-500 p-2 mb-2 rounded ${
            visibleTips.includes(index.toString()) ? "bg-green-700  place-self-center" : "bg-gray-700 opacity-50"
          }`}
        >
          {tip}
        </div>
      ))}
    </div>
  );
};

export default TravelTips;
