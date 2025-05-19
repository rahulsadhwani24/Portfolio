import React, { useState } from 'react'
import Contact from './Contact'
import Loader from './Loader';

function PageContact() {
    const [timeout, setTimeout] = useState(true);
  return (
    <main className={`${(!timeout) && 'loadMain'}`}>
      {!timeout ? (
        <div className='PageContact'>
          <Contact />
        </div>
      ) : (
        <Loader setTimeout={setTimeout} />
      )}
    </main>
  );
}

export default PageContact