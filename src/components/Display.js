import React from "react";
import { BiHistory } from "react-icons/bi";
import "./styles/Display.css";

const Display = ({ input, setInput, answer, setIsShowModal }) => {
  const onChangeTagInput = (e) => {
    const re = /^[!%(-+\x2D-9^glox\xF7\u221A]+$/;

    if (e.target.value === "" || re.test(e.target.value)) {
      setInput(e.target.value);
    }
  };

  return (
    <>
      <div className="display">
        <BiHistory className="history" onClick={() => setIsShowModal(true)} />
        {answer === "" ? (
          <>
            <input
              type="text"
              name="input"
              className="input"
              style={{ padding: "29px" }}
              value={input}
              placeholder="0"
              maxLength={12}
              // disabled
              onChange={onChangeTagInput}
              autoComplete="off"
            />
          </>
        ) : (
          <>
            <input
              type="text"
              name="input"
              className="value"
              value={input}
              placeholder="0"
              maxLength={12}
              disabled
            />
            <input
              type="text"
              name="value"
              className="input"
              value={answer}
              disabled
            />
          </>
        )}
      </div>
    </>
  );
};

export default Display;
