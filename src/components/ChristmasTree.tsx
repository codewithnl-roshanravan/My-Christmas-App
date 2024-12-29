import { motion } from "framer-motion";
import { useState } from "react";

export default function ChristmasTree() {
  const [lightsOn, setLightsOn] = useState(false);
  return (
    <motion.div
      className="mt-8"
      animate={{ rotate: lightsOn ? [0, -5, 5, 0] : 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <svg
        onClick={() => setLightsOn(!lightsOn)}
        className="w-40 md:w-56 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 300"
      >
       
        {/*Tree*/}
        <polygon points="100,10 40,150 160,150" className="fill-green-700" />
        <polygon points="100,70 30,200 170,200" className="fill-green-700" />
        <polygon points="100,130 20,250 180,250" className="fill-green-700" />
        <rect
          x="85"
          y="250"
          width="30"
          height="50"
          className="fill-yellow-800"
        />
        {/* Lights */}
        {lightsOn &&
          Array.from({ length: 20 }).map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 120 + 40}
              cy={Math.random() * 200 + 20}
              r="5"
              fill={`hsl(${Math.random() * 360}, 100%, 50%)`}
            />
          ))}
      </svg>
      <p className="mt-4 text-lg">Click the tree to toggle lights!</p>
    </motion.div>
  );
}
