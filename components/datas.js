import React, { useEffect, useState } from "react";
import { getAll } from "../services";

function Datas() {
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
    <div
      id="datamain"
      className="element-animated fade-in container d-flex align-content-center flex-wrap mx-auto "
    >
      <div
        id="datakart1"
        className="element-animated fade-in long card mx-auto"
      >
        <div className="card-header">Toplam Vaka</div>
        <div className="card-body">
          <p className="card-text">
            {!isLoading && allData ? allData.cases : "Yükleniyor..."}
          </p>
        </div>
      </div>

      <div
        id="datakart3"
        className="element-animated fade-in long card mx-auto"
      >
        <div className="card-header">Aktif Vaka</div>
        <div className="card-body">
          <p className="card-text">
            {!isLoading && allData ? allData.active : "Yükleniyor..."}
          </p>
        </div>
      </div>
      <div
        id="datakart2"
        className="element-animated fade-in long card mx-auto"
      >
        <div className="card-header">Toplam Ölüm</div>
        <div className="card-body">
          <p className="card-text">
            {!isLoading && allData ? allData.deaths : "Yükleniyor..."}
          </p>
        </div>
      </div>
      <div
        id="datakart4"
        className="element-animated fade-in long card mx-auto"
      >
        <div className="card-header">İyileşen</div>
        <div className="card-body">
          <p className="card-text">
            {!isLoading && allData ? allData.recovered : "Yükleniyor..."}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Datas;
