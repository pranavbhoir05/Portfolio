import { useState } from "react";
import {
  Hero,
  Skills,
  Contact,
  Footer,
} from "./components";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-zinc-900 text-white" : "bg-white text-black"}>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 px-4 py-2 rounded border"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      <Hero darkMode={darkMode} /> {/* passes that value to Hero.e.g Hero darkMode = true */}
      <Skills darkMode={darkMode} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;