import Link from "next/link";


export default function HomePage() {
  return (
    <header>
      <div className="bg-header">
        <div className="container mx-auto">
          <nav className="flex justify-between items-center py-2">
            <div className="text-4xl font-runescape">OSRSBin</div>
            <ul className="flex gap-4 text-2xl text-primary">
              <li><Link href="/how-to-use">How to Use</Link></li>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Logout</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="bg-header-lighter">
        <div className="container mx-auto">
          <ul className="flex gap-4 items-center">
            <li className="uppercase px-12 py-1 border-primary border-2">Import</li>
            <li className="px-4 py-1"><Link href="/categories/pvm">PvM</Link></li>
            <li className="px-4 py-1">Skilling</li>
            <li className="px-4 py-1">Misc</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
