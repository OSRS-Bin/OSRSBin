import logo from "../media/FU_logo.png";
import "../index.css";
import HomePageContent from "./HomePageContent";

export default function HomePage() {
  return (
    <div>
      <div className="home-page-upload">
        <h1>Upload Your Own</h1>
        <button>Import</button>
      </div>
      <div className="popular-packs-description">
        <h2>Popular Packs</h2>
        <p>Check out what other people are... checking out!</p>
      </div>
      <HomePageContent />
    </div>
  );
}
