import React, { useEffect } from "react";
import { Navbar, Header, Home, About, Services, Portfolio, Skills, Contact, Footer } from "./Main/Exports";
import { Blog, Projects, CV, GithubStats, AboutPage } from "./pages/Exports";
import { ActiveClass, RevealEffect } from "./animations/Exports";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import i18n from "./i18n";


const App = () => {

  ActiveClass();
  RevealEffect();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/myprofile/"
          element={
            <React.Fragment>
              <Header />
              <Home />
              <About />
              <Services />
              <Portfolio />
              <Skills />
              <Contact />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/myprofile/blog/" Component={Blog} />
        <Route path="/myprofile/about/" Component={AboutPage} />
        <Route path="/myprofile/projects/" Component={Projects} />
        <Route path="/myprofile/cv/" Component={CV} />
        <Route path="/myprofile/githubstats/" Component={GithubStats} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
