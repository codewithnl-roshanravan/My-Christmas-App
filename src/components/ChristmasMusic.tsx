import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function ChristmasMusic() {
  return (
    <div className="mt-8">
      <AudioPlayer
        src="https://v.delgarm.com/mp3/804/2020/12/15/db7357d7afb8963b4dd211f3797c2ddd.mp3"
        autoPlay={false}
        loop
        style={{
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
        }}
        className="bg-pi-800 text-white rounded"
      />
      <p className="text-center mt-2">Enjoy some holiday music! 🎶</p>
    </div>
  );
}
