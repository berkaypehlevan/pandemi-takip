import React, { useEffect, useState } from "react";
import { getAll } from "../services";
import { Bar } from "react-chartjs-2";

function Data() {
  const [isLoading, setIsLoading] = useState();
  const [allData, setAllData] = useState();

  useEffect(() => {
    setIsLoading(true);
    getAll()
      .then((data) => {
        setIsLoading(false);
        setAllData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <React.Fragment>
      <div id="data">
        {!isLoading && allData ? (
          allData[133].CountryCode
        ) : (
          <div className="spinner-border m-5" role="status"></div>
        )}
      </div>
    </React.Fragment>
  );
}

export default Data;
