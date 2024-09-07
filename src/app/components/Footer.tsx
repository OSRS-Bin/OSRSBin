import { appName } from "@/lib/constants";

const siteAuthors = ["Comrade Fund", "Comrade Bits", "ComradeCosmo", "Tim"];
const copyrightYear = "2024";

export default function Footer() {
  return (
    <footer className="mx-auto text-center mt-32 py-4">
      <ul className="flex justify-center">
        {siteAuthors.map((author, index) => (
          <>
            <li>{author}</li>
            {/* bullet separator if not last */}
            {index < siteAuthors.length - 1 && (
              <li role="presentation" className="px-2">
                &bull;
              </li>
            )}
          </>
        ))}
      </ul>
      <p className="mt-4">&copy; {copyrightYear} {appName}</p>
    </footer>
  );
}
