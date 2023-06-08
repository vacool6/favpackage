import { Box, Button, Heading, Input, Textarea } from "@chakra-ui/react";
import { useState, useMemo } from "react";
import { Link } from "react-router-dom";

const Data = () => {
  const [q, setQ] = useState("");
  const [data, setData] = useState([]);
  const [favPackage, setFavPackage] = useState([]);
  const [feed, setFeed] = useState([]);

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
    if (favPackage && feed) {
      const doc = {
        favPackage,
        feed,
      };

      const existingData = JSON.parse(localStorage.getItem("data"));
      if (existingData) {
        existingData.push(doc);
        localStorage.setItem("data", JSON.stringify(existingData));
        window.location.reload();
      } else {
        const userData = [];
        userData.push(doc);
        localStorage.setItem("data", JSON.stringify(userData));
        window.location.reload();
      }
    } else {
      return window.alert("please fill details");
    }
  };

  return (
    <Box p={10}>
      <Heading>Npm search your favorite package</Heading>
      <br />
      <br />
      <label>Search: </label>
      <Input value={q} onChange={(e) => setQ(e.target.value)} />
      <br />
      <br />
      <Button colorScheme='teal' onClick={search}>Search</Button>
      <br />
      <br />

      <Box
        border={"1px solid black"}
        borderRadius={"sm"}
        height={"10rem"}
        overflowY={"scroll"}
      >
        {data.length !== 0 &&
          memoizedVal.results.map((e, index) => (
            <Box px={2} key={index}>
              <input
                type="radio"
                id={e.package.name}
                name="favPackage"
                value={e.package.name}
                onChange={(e) => setFavPackage(e.target.value)}
              />
              <label htmlFor={e.package.name}>{e.package.name}</label>
            </Box>
          ))}
      </Box>
      <br />
      <br />
      <p>
        You fav package is : <b>{favPackage}</b>
      </p>
      <br />
      <br />
      <div>
        <text>Why you like this package:</text>
        <br />
        <br />
        <Textarea
          value={feed}
          onChange={(e) => setFeed(e.target.value)}
          placeholder="Enter upto 20 character"
          style={{
            height: "6rem",
            width: "30rem",
          }}
        ></Textarea>
        <br />
        <br />
        <Link to="/TableComp">
        <Button  colorScheme='teal'onClick={clickHandler}>submit</Button>
        </Link>
      </div>
    </Box>
  );
};
export default Data;
