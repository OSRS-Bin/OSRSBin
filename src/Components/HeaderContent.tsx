import logo from "../media/FU_logo.png";
import "../index.css";

export default function HomePage() {
  return (
    <div className="App">
      <nav>
        <button onClick={() => (window.location.href = "/")}>Home</button>
        <button onClick={() => (window.location.href = "/faq")}>FAQ</button>
        <button onClick={() => (window.location.href = "/info")}>
          Info Page
        </button>
      </nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>OSRS Bin</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search for a rune..." />
      </div>
    </div>
  );
}
