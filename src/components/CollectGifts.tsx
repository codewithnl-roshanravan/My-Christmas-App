import { useState } from "react";

export default function CollectGifts() {
  const [score, setScore] = useState(0);
  return (
    <div className="mt-8">
      <p className="text-xl">Score: {score}</p>
      <div
        onClick={() => setScore(score + 1)}
        className="w-10 h-10 bg-red-500 rounded-full mt-4 mx-auto cursor-pointer pt-1.5"
      >
        🎁
      </div>
    </div>
  );
}
