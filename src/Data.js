import "./styles.css";
import { useState, useEffect } from "react";

const Data = () => {
  const [userInput, setUserInput] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(`https://api.npms.io/v2/search?q=${userInput}`)
        .then((res) => res.json())
        .then((data) => setApiData(data.results));
    };
    if (userInput) {
      fetchData();
    }
  }, [userInput]);

  const handleInputChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div>
      <input type="text" value={userInput} onChange={handleInputChange} />

      {apiData ? (
        <div >
          {apiData.map((e) => (
            <div key={e.id} >
              <input
                type="radio"
                value="e.package.name"
                checked={userInput === "e.package.name"}
              ></input>
              <label htmlFor={e.package.name}>{e.package.name}</label>
            </div>
          ))}
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};
export default Data;
