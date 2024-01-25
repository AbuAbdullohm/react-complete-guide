import "./App.css";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectBtn, setSelectBtn] = useState();

  function handleSelect(selectedBtn) {
    setSelectBtn(selectedBtn);
  }

  return (
    <div className="App">
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts {...CORE_CONCEPTS[0]} />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectBtn === "components"} onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton isSelected={selectBtn === "jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectBtn === "props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectBtn === "state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>

          {!selectBtn ? (
            <p>Please select a topic.</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectBtn].title}</h3>
              <p>{EXAMPLES[selectBtn].description}</p>
              <pre>
                <code>{EXAMPLES[selectBtn].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
