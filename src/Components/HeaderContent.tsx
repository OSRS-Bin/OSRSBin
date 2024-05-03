import { Link } from "react-router-dom";
import logo from "../media/FU_logo.png";
import "../index.css";

export default function HomePage() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="top-bar">
          <div className="left-button">
            <button>
              <Link to="/">Home</Link>
            </button>
          </div>
          <div className="right-buttons">
            <button>
              <Link to="/faq">FAQ</Link>
            </button>
            <button>
              <Link to="/info">Info Page</Link>
            </button>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="drop-downs">
            <button>
              <Link to="/about">Import</Link>
            </button>
            <button>
              <Link to="/contact">PvM</Link>
            </button>
            <button>
              <Link to="/login">Skilling</Link>
            </button>
            <button>
              <Link to="/login">Misc</Link>
            </button>
          </div>
          <div className="style-bar"></div>
        </div>
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
