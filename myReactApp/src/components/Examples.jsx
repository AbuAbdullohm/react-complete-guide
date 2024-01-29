import { useState } from "react";

import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data";

export default function Examples() {
  const [selectBtn, setSelectBtn] = useState();

  function handleSelect(selectedBtn) {
    setSelectBtn(selectedBtn);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectBtn === "components"}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectBtn === "jsx"}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectBtn === "props"}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectBtn === "state"}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
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
  );
}
