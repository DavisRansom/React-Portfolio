import Footer from './components/Footer.js';
import Header from './components/Header.js';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Portfolio1 from './components/Portfolio1';
import Portfolio2 from './components/Portfolio2';
import Nav from './components/Nav';


function App() {
  return (
<>
<Header />
<Nav />

<main>
<AboutMe />
<Portfolio1 />
<Portfolio2 />

<Contact />
</main>

<Footer />
</>

  );
}

export default App;
