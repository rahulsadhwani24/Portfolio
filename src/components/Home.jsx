import React from 'react'
import Landing from "./Landing";
import Works from "./Works";
import Experiments from "./Experiments";
import Contact from "./Contact";

function Home({aboutVisibility, setAboutVisibility}) {
    
    return (
      <div>
          <Landing
            visibility={aboutVisibility}
            setVisibility={setAboutVisibility}
          />
          <Works visibility={aboutVisibility} />
          <Experiments visibility={aboutVisibility} />
          <Contact visibility={aboutVisibility} />
      </div>
    );
}

export default Home