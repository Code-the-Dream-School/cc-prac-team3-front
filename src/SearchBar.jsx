import axios from "axios";
import React, { useEffect, useState } from "react";

function SearchBar({ query, onChange }) {
  const [text, setText] = useState("");

  const BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    borderRadius: "20px",
    padding: "0.5rem",
  };

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVICE_ENDPOINT}/?query=${text}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [text]);

  return (
    <>
      <input
        style={BarStyle}
        key="search-bar"
        value={text}
        placeholder={"search for product"}
        onChange={(event) => setText(event.target.value)}
        //onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}

export default SearchBar;
