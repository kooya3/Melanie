import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Country } from "../templates/country";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Details from "./Details";

const countriesDefaultState: Country[] = [];

const MainApp = (): JSX.Element => {
  const PAGES = 24;
  const [pages, setPages] = useState(PAGES);
  const [allCountries, setAllCountries] = useState(countriesDefaultState);
  const [filteredCountries, setFilteredCountries] = useState(
    countriesDefaultState
  );
  const [loading, setLoading] = useState(true);
  const [loadingError, setLoadingError] = useState(false);

  const fetchCountries = (url: string) => {
    setLoading(true);
    axios
      .get(url)
      .then((response) => {
        setAllCountries(response.data);
        setFilteredCountries(response.data);
      })
      .catch(() => setLoadingError(true))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCountries("https://restcountries.com/v3.1/all");
    // detect bottom of page
    window.onscroll = function (e) {
      if (
        window.innerHeight + window.pageYOffset >=
        document.body.offsetHeight
      ) {
        setPages((prevPagesState) => prevPagesState + PAGES);
      }
    };

    // Show outline only on key down
    document.body.addEventListener("mousedown", () =>
      document.body.classList.add("hide-focus")
    );
    document.body.addEventListener("keydown", (e) => {
      if (e.key === "Tab") document.body.classList.remove("hide-focus");
    });
  }, []);

  return (
    <div className="grid grid-rows-[auto_auto_1fr]">
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route
              path="/where-in-the-world"
              element={
                <Home
                  loading={loading}
                  countries={filteredCountries}
                  pages={pages}
                  allCountries={allCountries}
                  setFilteredCountries={setFilteredCountries}
                  loadingError={loadingError}
                />
              }
            />
            <Route
              path="/:countryDetails"
              element={<Details countries={allCountries} />}
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default MainApp;
