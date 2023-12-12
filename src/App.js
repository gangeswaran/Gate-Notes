import React from 'react';
import NavBar from "./components/NavBar.js";

import Hero from './components/Hero.js';
import PDFSection from './components/PDFSection.js';
function App() {
  const handleEmailSubmit = (email) => {
    console.log(`Email submitted: ${email}`);
};
	return (
    <React.Fragment>
      <NavBar/>
      <Hero onEmailSubmit={handleEmailSubmit} />
      <PDFSection/>
    </React.Fragment>
	);
}

export default App;