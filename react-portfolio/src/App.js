import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import DavisBigBeard from './components/davisBigBeard.jpg';
import Resume from './components/Resume';

function App() {
  return (
<>
<Header />

<main>
<AboutMe />
<Portfolio />


<Contact />
<img src={DavisBigBeard} alt="DavisBigBeard"/>

<Resume />
</main>


<Footer />
</>

  );
}

export default App;
