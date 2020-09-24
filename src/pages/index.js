import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>Experiments with Gatsby... </title>
      </Helmet>
      <h1>Bits and pieces</h1>
      <h2>
        <a
          href="/about"
        >
          BMJ Chicken graphs
        </a>{' '}
      </h2>
      <p>
        <a href="/api/date">
          <code>api/date</code> for the Date API with Node.js (TypeScript)
        </a>
        .
      </p>
      <br />
      <h2>The date according to Node.js (TypeScript) is:</h2>
      <p>{date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default Index;
