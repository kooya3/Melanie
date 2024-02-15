import React, { useEffect } from "react";
import { CountriesProps } from "./Home";
import { Link } from "react-router-dom";
import { setTitle } from "../helpers/setTitle";

const Countries: React.FC<CountriesProps> = ({ countries, pages }) => {
    //document title change
    setTitle(
      "Mela | Where in the World?",
      "https://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/globe-icon.png"
    );

    useEffect(() => {
        document
          .querySelectorAll(".card")
          .forEach((card) => observer.observe(card));
      }, [pages, countries]);
    
export default MainApp