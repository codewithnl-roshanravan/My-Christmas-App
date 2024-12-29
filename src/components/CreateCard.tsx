import React from "react";
import { toPng } from "html-to-image";
interface CreateCardProps {
  name: string | null;
}

const CreateCard: React.FC<CreateCardProps> = ({ name }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const downloadCard = async () => {
    if (cardRef.current) {
      try {
        const dataUrl = await toPng(cardRef.current, {
          backgroundColor: "red",
          cacheBust: true,
          width: 600,
          height: 400,
          style: {
            transform: "scale(2)",
            transformOrigin: "center",
            color: "white",
            paddingTop: "130px",
            borderRadius: "12px",
          },
        });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "christmas-card.png";
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
  
      <div
        ref={cardRef}
        style={{
          backgroundColor: "red",
          color: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          width: "300px",
          margin: "auto",
          position: "relative",
          animation: "cardAnimation 3s infinite",
        }}
      >
 
        <h2
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            animation: "textAnimation 2s infinite",
          }}
        >
       
          Merry Christmas 🎄, {name || "Friend"}!{" "}
        </h2>{" "}
        <p style={{ marginTop: "10px" }}>Wishing you joy and happiness!</p>{" "}
      </div>{" "}
      <button
        onClick={downloadCard}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          display: "block",
          margin: "20px auto",
        }}
      >
    
        Download Card
      </button>
      <style jsx>{`
    
        @keyframes textAnimation {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};
export default CreateCard;

