// import React from 'react'
// import Header from './components/header';
// import Learning from './components/popular';
// import About from './components/about';
// import Portfolio from './components/portfolio';
// import Team from './components/team';
// import Services from './components/services';
// import Reviews from './components/reviews';
// import Contact from './components/contact';
// import Feedback from './components/feedback';
// import Footer from './components/footer';
// import Blind from './components/blind';
// import Deaf from './components/deaf';
// import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <div className="App">
//           <Header />
//           <Learning />
//           <Route path='/blind' Component={Blind} />
//           <Route path='/deaf' Component={Deaf} />
//           <About />
//           <Portfolio />
//           <Team />
//           <Services />
//           <Reviews />
//           <Contact />
//           <Feedback />
//           <Footer />
//         </div>
//       </Routes>
//     </Router>
//   )
// }

// export default App;


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Popular from './components/popular';
import About from './components/about';
import Portfolio from './components/portfolio';
import Team from './components/team';
import Services from './components/services';
import Reviews from './components/reviews';
import Contact from './components/contact';
import Feedback from './components/feedback';
import Footer from './components/footer';
import Blind from './components/blind';
import Deaf from './components/deaf';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/blind" element={<Blind />} />
        <Route path="/deaf" element={<Deaf />} />
      </Routes>
    </BrowserRouter>
  );
}

function MainLayout() {
  return (
    <div className="App">
      <Header />
      <Popular />
      <About />
      <Portfolio />
      <Team />
      <Services />
      <Reviews />
      <Contact />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
