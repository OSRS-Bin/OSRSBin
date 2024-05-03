import tempImage from "../media/Lilly_Bench.jpg";
import { useEffect, useState } from "react";

async function getInfo() {
  try {
    console.log("Fetching data");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();

    console.log("Data fetched: ", data.body);
    return data;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

function InfoPage() {
  const [buttonText, setButtonText] = useState("Click me");
  const [info, setInfo] = useState("");

  useEffect(() => {
    getInfo().then((data) => setInfo(data.body));
  }, []);

  const handleClick = () => {
    navigator.clipboard.writeText("Thank you");
    setButtonText("Copied");
  };

  return (
    <div className="Content">
      <div className="Description-Section">
        <div className="Image-Description">
          <img src={tempImage} className="Content-image" alt="content" />
          <p className="Content-description">{info}</p>
        </div>
        <button className="Content-button" onClick={handleClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default InfoPage;
