import React, { useState, useEffect } from "react";
import { getBlocksHeight } from "../../api";
import Nav from "../nav";

export default function BlockPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const query = window.location.pathname.substring(8);
    const fetchData = async () => {
      const res = await getBlocksHeight(query);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />

      {data && (
        <div className="page-main">
          <header>
            <h3>
              Block <small>{`#${data.height}`}</small>
            </h3>
          </header>
        </div>
      )}

      {data && (
        <div>
          <p>{data.timestamp}</p>
          <p>{data.miner}</p>
          <p>{data.hash}</p>
          <p>{data.difficulty}</p>
          <p>{data.gasLimit}</p>
        </div>
      )}
    </div>
  );
}
