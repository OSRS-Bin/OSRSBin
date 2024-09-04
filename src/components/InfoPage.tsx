"use client";

import tempImage from "../media/Lilly_Bench.jpg";
import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import SearchPageCard from "./SearchPageCard";
import { getSearchPageContent } from "../lib/content";

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

  const searchCards = getSearchPageContent().searchPageCards.map((card) => (
    <div className="a-search-card" key={card.title}>
      <SearchPageCard
        title={card.title}
        author={card.author}
        date={card.date}
        views={card.views}
        favorites={card.favorites}
        installs={card.installs}
        comments={card.comments}
        description={card.description}
        tags={card.tags}
        image={card.image}
      />
    </div>
  ));

  return <div className="Content">{searchCards}</div>;
}

export default InfoPage;
