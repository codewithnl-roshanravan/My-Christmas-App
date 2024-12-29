"use client";

import { useState, useEffect } from "react";
import CreateCard from "./CreateCard";

export default function ChristmasMessage() {
  const [name, setName] = useState<string | null>(null);
  const [showInput, setShowInput] = useState<boolean>(true);
  const [showCard, setShowCard] = useState<boolean>(false);

  useEffect(() => {
    const savedName = localStorage.getItem("userName");
    if (savedName) {
      setName(savedName);
      setShowInput(false);
    }
  }, []);
  const saveName = (userName: string) => {
    localStorage.setItem("userName", userName);
    setName(userName);
    setShowInput(false);
  };
  return (
    <div className="mt-8">
      {showInput ? (
        <div>
          <p className="text-xl mb-4">What’s your name?</p>
          <input
            type="text"
            className="px-4 py-2 rounded border text-black"
            placeholder="Enter your name"
            onKeyPress={(e) => {
              if (e.key === "Enter" && e.currentTarget.value) {
                saveName(e.currentTarget.value);
              }
            }}
          />
        </div>
      ) : (
        <div>
          <p className="text-xl">
            Merry Christmas, {name ? name : "Guest"}! 🎄
          </p>
          <button
            onClick={() => setShowCard(true)}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Show Christmas Card
          </button>
        </div>
      )}
      {showCard && <CreateCard name={name} />}
    </div>
  );
}
