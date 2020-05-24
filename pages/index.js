import React, { useEffect, useState } from "react";
import { getAll } from "../services";

function Home() {
  const [isLoading, setIsLoading] = useState();
  const [allData, setAllData] = useState();

  useEffect(() => {
    setIsLoading(true);
    getAll()
      .then(data => {
        setIsLoading(false);
        setAllData(data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div>Hello World!</div>
      {!isLoading && allData ? (
        allData.map(item => <div>{item.Country}</div>)
      ) : (
        <div>Yükleniyor...</div>
      )}
    </div>
  );
}

export default Home;
