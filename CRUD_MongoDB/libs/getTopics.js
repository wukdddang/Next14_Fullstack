import { useEffect } from "react";

const getTopics = () => {
  useEffect(() => {
    const getTopics = async () => {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    };
    getTopics();
  });
  return <div></div>;
};

export default getTopics;
