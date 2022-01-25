import React from "react";
import "../styles/index.css";

function Index() {
  return (
    <main>
      <h1>Gatsby + API Route</h1>
      <h2>
        Deployed with{" "}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <p>
        <a
          href="https://github.com/vercel/vercel/tree/main/examples/gatsby"
          target="_blank"
          rel="noreferrer noopener"
        >
          This project
        </a>{" "}
        is a <a href="https://www.gatsbyjs.org/">Gatsby</a> app with two
        directories, <code>/src</code> for static content and <code>/api</code>{" "}
        which contains a serverless <a href="https://nodejs.org/en/">Node.js</a>{" "}
        function. See{" "}
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js
        </a>
        .
      </p>
      <br />
    </main>
  );
}

export default Index;
