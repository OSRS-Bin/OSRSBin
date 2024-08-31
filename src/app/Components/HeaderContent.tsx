import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="App">
      <nav className="nav">
        <div className="top-bar">
          <div className="left-button">
            <button>
              <Link href="/">Home</Link>
            </button>
          </div>
          <div className="right-buttons">
            <button>
              <Link href="/faq">FAQ</Link>
            </button>
            <button>
              <Link href="/info">Info Page</Link>
            </button>
          </div>
        </div>
        <div className="bottom-bar">
          <div className="drop-downs">
            <button>
              <Link href="/about">Import</Link>
            </button>
            <button>
              <Link href="/pvm">PvM</Link>
            </button>
            <button>
              <Link href="/login">Skilling</Link>
            </button>
            <button>
              <Link href="/login">Misc</Link>
            </button>
          </div>
          <div className="style-bar">test</div>
        </div>
      </nav>
      <header className="App-header">
        <img src='FU_logo.png' className="App-logo" alt="logo" />
        <h1>OSRS Bin</h1>
      </header>
      <div className="search-bar">
        <input type="text" placeholder="Search for a rune..." />
      </div>
    </div>
  );
}
