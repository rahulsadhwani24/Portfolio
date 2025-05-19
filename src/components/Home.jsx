import React, { useState } from "react";
import Landing from "./Landing";
import Works from "./Works";
import Experiments from "./Experiments";
import Contact from "./Contact";
import Loader from "./Loader";

function Home({ aboutVisibility, setAboutVisibility }) {
  const [timeout, setTimeout] = useState(true);
  return (
    <main className={`${(!timeout) && 'loadMain'}`}>
      {!timeout ? (
        <>
          <Landing
            visibility={aboutVisibility}
            setVisibility={setAboutVisibility}
          />
          <Works visibility={aboutVisibility} />
          <Experiments visibility={aboutVisibility} />
          <Contact visibility={aboutVisibility} />
        </>
      ) : (
        <Loader setTimeout={setTimeout} />
      )}
    </main>
  );
}

export default Home;
