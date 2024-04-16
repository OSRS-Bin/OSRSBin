import tempImage from "../media/Lilly_Bench.jpg";
import { useState } from "react";

function InfoPage() {
  const [buttonText, setButtonText] = useState("Click me");

  const handleClick = () => {
    navigator.clipboard.writeText("Thank you");
    setButtonText("Copied");
  };

  return (
    <div className="Content">
      <div className="Description-Section">
        <div className="Image-Description">
          <img src={tempImage} className="Content-image" alt="content" />
          <p className="Content-description">This is a description.</p>
        </div>
        <button className="Content-button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoPage;
