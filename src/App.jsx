import { useState } from 'react'
import Header from './components/Header'
import Landing from './components/Landing';
import Works from './components/Works';
import About from './components/About';
import Experiments from './components/Experiments';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [aboutVisibility, setAboutVisibility] = useState(false)
  return (
    <>
      <div className='main'>
        {<About setVisibility={setAboutVisibility} visibility={aboutVisibility}/>}
        <Header visibility={aboutVisibility}/>
        <Landing visibility={aboutVisibility} setVisibility={setAboutVisibility}/>
        <Works visibility={aboutVisibility}/>
        <Experiments visibility={aboutVisibility} />
        <Contact visibility={aboutVisibility} />
        <Footer />
      </div>
    </>
  )
}

export default App
