import React, { useEffect } from "react";
import { CountriesProps } from "./Home";
import { Link } from "react-router-dom";
import { setTitle } from "../helpers/setTitle";

const Countries: React.FC<CountriesProps> = ({ countries, pages }) => {
  //document title change
  setTitle(
    "Melan | Where in the World?",
    "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/globe-icon.png"
  );

  useEffect(() => {
    document
      .querySelectorAll(".card")
      .forEach((card) => observer.observe(card));
  }, [pages, countries]);

  let observer = new IntersectionObserver(
    (cards) => {
      cards.forEach((card) => {
        if (card.isIntersecting) card.target.classList.add("show");
      });
    },
    { threshold: 0.2 }
  );

  const cards = countries.slice(0, pages).map((country, index) => (
    <Link to={`/${country.name.common}`} key={country.cca3}>
      <div
        tabIndex={0}
        className=" card grid rounded-md shadow-md max-w-sm mx-auto w-full h-full overflow-hidden cursor-pointer transition hover:!scale-105 hover:shadow-xl scale-75 opacity-40 transition-all"
        key={country.name.common}
      >
        <img
          className="object-cover w-full h-full max-h-[12rem]"
          src={country.flags.svg}
          alt=""
        />
        <article className="p-6 lg:py-7">
          <h2 className="text-xl font-extrabold mb-2">{country.name.common}</h2>
          <ul>
            <li>
              <b>Population: </b>
              {new Intl.NumberFormat("de-DE", { useGrouping: true }).format(
                country.population
              )}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>Capital:</b> {country.capital ? country.capital : "-"}
            </li>
          </ul>
        </article>
      </div>
    </Link>
  ));

  return (
    <>
      <div className="cards grid gap-14 px-[2rem] md:px-[4rem] ">{cards}</div>
    </>
  );
};

export default Countries;
