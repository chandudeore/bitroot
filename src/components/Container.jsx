import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Container.css";

<link rel="preconnect" href="https://fonts.googleapis.com"></link>;

export default function Container() {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="container">
        {data.map((ele) => {
          return (
            <div key={ele.id} className="card">
              <img
                src={ele.thumbnail.small}
                alt=""
                width="590px"
                height="300px"
              />
              <h4>{ele.title}</h4>
              <p>{ele.content}</p>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  {ele.author.name} - {ele.author.role}
                </div>
                <div>{ele.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
