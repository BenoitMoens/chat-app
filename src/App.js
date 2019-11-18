import React from "react";
import Contact from "./components/Contact.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Contact
        name="Batman"
        avatar="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        online
      />
      <Contact
        name="Superman"
        avatar="https://avatarfiles.alphacoders.com/139/139161.png"
      />

      <Contact
        name="Ironman"
        avatar="https://i.pinimg.com/originals/0e/f2/fb/0ef2fb13f53e1a50271b2e3bc2714a0f.jpg"
        online
      />
    </div>
  );
}

export default App;

