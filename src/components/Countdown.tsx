import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const nextChristmas = new Date(now.getFullYear(), 11, 25);
      if (now > nextChristmas)
        nextChristmas.setFullYear(nextChristmas.getFullYear() + 1);
      const diff = nextChristmas.getTime() - now.getTime();
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    };
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);
  return <p className="mt-6 text-xl">{`Time until Christmas: ${timeLeft}`}</p>;
}
