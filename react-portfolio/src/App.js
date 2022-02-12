import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Nav from './components/Nav';

function App() {
  return (
<>
<Header />
<Nav />

<main>
<AboutMe />
<Portfolio />

<Contact />
</main>

<Footer />
</>

  );
}

export default App;
