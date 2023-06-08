import "./styles.css";

import React, { useMemo, useState, useEffect } from "react";

// https://api.npms.io/v2/search?q=axios
const NpmSearch = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [favPackage, setFavPackage] = useState([]);
  const [feed, setFeed] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);


  const search = async () => {
    try {
      const result = await fetch(`https://api.npms.io/v2/search?q=${q}`);
      const response = await result.json();
      setData(response);
      setQ("");
    } catch (err) {
      throw err;
    }
  };

  const memoizedVal = useMemo(() => data, [data]);

  const clickHandler = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };
  useEffect(() => {
    if (isSubmit) {
      localStorage.setItem("name", favPackage);
      localStorage.setItem("description", feed);
    }
  }, [isSubmit, favPackage, feed]);

  return (
    <>
      <h1>Npm search your favourite package</h1>
      <label>Search: </label>
      <input value={q} onChange={(e) => setQ(e.target.value)} />
      <button onClick={search}>Search</button>

      <div
        style={{
          height: "10rem",
          overflowX: "scroll",
          border: "0.2px solid black",
          margin: "1rem 0"
        }}
      >
        {data.length !== 0 &&
          memoizedVal.results.map((e, index) => (
            <div key={index}>
              <input
                type="radio"
                id={e.package.name}
                name="favPackage"
                value={e.package.name}
                onChange={(e) => setFavPackage(e.target.value)}
              />
              <label htmlFor={e.package.name}>{e.package.name}</label>
            </div>
          ))}
      </div>
      <p>
        You fav package is : <b>{favPackage}</b>
      </p>
      <div>
        <text>Why you like this package:</text>
        <br></br>
        <textarea
          value={feed}
          onChange={(e) => setFeed(e.target.value)}
          placeholder="Enter upto 20 character"
          style={{
            height: "6rem",
            width: "30rem"
          }}
        ></textarea>
        <br></br>
        <button onClick={clickHandler}>submit</button>
      </div>
    </>
  );
};

export default NpmSearch;
