import React, { FormEvent, ReactElement, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

interface Props {}

export default function Login({}: Props): ReactElement {
  const [input, setInput] = useState<string>("");
  const [lists, setLists] = useState<Array<string>>([]);

  useEffect(() => {
    console.log(lists);
  }, [lists]);

  const onSubmitHanler = (event: FormEvent) => {
    event.preventDefault();
    if (input.length != 0) {
      console.log("Hi :", input);
      setLists([...lists, input]);
      setInput("");
    }
  };

  const removeList = (index: number) => {
    const task = [...lists];
    task.splice(index, 1);
    setLists(task);
  };

  return (
    <section style={loginContainer}>
      <div style={card}>
        <p style={{ textAlign: "center", marginTop: "10px", color: "#666666" }}>
          <b>TO DO</b>
        </p>
        <form onSubmit={(e) => onSubmitHanler(e)} style={formContainer}>
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter something here"
            value={input}
            style={inputForm}
          />
          <button style={btnSubmit}>Submit</button>
        </form>
      </div>
      {lists.length == 0 ? null : (
        <div
          style={{ maxHeight: "50vh", padding: "0 10px", overflowY: "scroll" }}
        >
          {lists.map((item, index) => {
            return (
              <div style={card} key={index}>
                {item}
                <FontAwesomeIcon
                  style={trash}
                  icon={faTrashAlt}
                  onClick={() => removeList(index)}
                />
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}

const loginContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as "column",
  minHeight: "100vh",
  height: "100%",
  background: "#D8D8E6",
};

const card = {
  backgroundColor: "#FFFFFF",
  padding: "10px",
  borderRadius: "10px",
  minWidth: "300px",
  marginBottom: "10px",
};

const trash = {
  size: "0.5em",
  float: "right" as "right",
  color: "#D8D8E6"
};

const formContainer = {
  display: "flex",
  flexDirection: "column" as "column",
};

const inputForm = {
  padding: "10px",
  width: "100%",
  boxSizing: "border-box" as "border-box",
  marginBottom: "10px",
  borderRadius: "5px",
  outline: "none",
  border: "1px solid #D8D8E6",
  fontSize: "1em",
  color: "#666666",
};

const btnSubmit = {
  fontSize: "1em",
  color: "#666666",
  padding: "5px",
  backgroundColor: "#D8D8E6",
  border: "none",
  borderRadius: "5px",
};
