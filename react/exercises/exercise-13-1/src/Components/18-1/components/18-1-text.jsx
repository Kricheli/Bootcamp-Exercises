import React, { useState } from "react";

const Text = ({ text, maxLength }) => {
  const [visability, setvisabilityValue] = useState(false);

  const handleOnClick = () => {
    setvisabilityValue((prev) => !prev);
  };
  const textVisability = () => {
    if (text.length <= maxLength) {
      return <p>{text}</p>;
    } else {
      return(
          <div>
        {visability ? (
          <p>
            {text} <span onClick={handleOnClick}> show less...</span>
          </p>
        ) : (
          <p>
            {text.slice(0, maxLength)}
            <span onClick={handleOnClick}> show more</span>
          </p>
        )}
      </div>
        )
    }
  };
    return <div>{textVisability()}</div>;
};
export default Text;
