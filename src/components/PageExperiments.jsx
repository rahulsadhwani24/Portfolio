import React, { useState } from "react";
import Loader from "./Loader";

function PageExperiments() {
  const [timeout, setTimeout] = useState(true);
  return (
    <main className={`${!timeout && "loadMain"}`}>
      {!timeout ? (
        <div className="pageExperiments">
          <h1 className="experimentsHeading">Experiments</h1>
        </div>
      ) : (
        <Loader setTimeout={setTimeout} />
      )}
    </main>
  );
}

export default PageExperiments;
