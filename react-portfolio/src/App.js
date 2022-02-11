import logo from './Logo.png';
import Section from './Section.js';
import Footer from '/components/Footer.js';
import Header from './Header.js';
import AboutMe from './AboutMe';

function App() {
  return (
<>
<Header />

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
