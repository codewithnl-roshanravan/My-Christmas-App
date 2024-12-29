"use client";

import ChristmasMessage from "@/components/ChristmasMessage";
import ChristmasMusic from "@/components/ChristmasMusic";
import ChristmasTree from "@/components/ChristmasTree";
import CollectGifts from "@/components/CollectGifts";
import Countdown from "@/components/Countdown";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div className="text-center w-full px-4">
      <Snowfall color="white" snowflakeCount={200} />
      <h1 className="text-4xl md:text-6xl font-bold mt-8">
        🎄 Merry Christmas! 🎄
      </h1>
      <Countdown />
      <ChristmasTree />
      <ChristmasMessage />
      <ChristmasMusic />
      <CollectGifts />
    </div>
  );
}
