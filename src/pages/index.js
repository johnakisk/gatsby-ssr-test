import React from "react";
import "../styles/index.css";

function Index({ serverData }) {
  const { dogImage } = serverData;

  return (
    <main>
      <img src={dogImage.message}></img>
    </main>
  );
}

export async function getServerData() {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random`);
  const data = await res.json();
  return {
    props: {
      dogImage: data,
    },
  };
}

export default Index;
