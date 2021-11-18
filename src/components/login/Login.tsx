import React, { FormEvent, ReactElement, useState } from "react";

interface Props {}

export default function Login({}: Props): ReactElement {
  const [input, setInput] = useState<String>("");
  const onSubmitHanler = (event: FormEvent) => {
    event.preventDefault();
    if(input.length != 0) console.log("Hi :", input);
  };

  return (
    <section style={loginContainer}>
      <div style={card}>
        <form onSubmit={(e) => onSubmitHanler(e)} style={formContainer}>
          <input
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter something here"
            style={inputForm}
          />
          <button style={btnSubmit}>Submit</button>
        </form>
      </div>
    </section>
  );
}

const loginContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  background: "#D8D8E6",
};

const card = {
  backgroundColor: "#FFFFFF",
  padding: "10px",
  borderRadius: "10px",
  minWidth: "300px",
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
