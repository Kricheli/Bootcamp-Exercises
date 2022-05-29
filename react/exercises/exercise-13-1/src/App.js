import React from "react";
import Text from "./Components/18-1/components/18-1-text";
const App = () => {
  const textContent =
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut culpa explicabo deserunt, rem ex nostrum hic necessitatibus repellendus soluta. Repellendus.";
  const maxLength = 5;
  return (
    <div>
      <Text maxLength={maxLength} text={textContent} />
    </div>
  );
};
export default App;
