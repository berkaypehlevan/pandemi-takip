import React, { useEffect, useState } from "react";
import { getAll } from "../services";

function Home() {
  const [allData, setAllData] = useState();

  useEffect(() => {
    getAll()
      .then(data => setAllData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div>Hello World!</div>
      <div>{allData && allData[0].Country}</div>
    </div>
  );
}

export default Home;
