import { useParams } from "react-router-dom";
import { World } from "../templates/country";
import { Link } from "react-router-dom";
import { longArrowLeft } from "react-icons-kit/fa/longArrowLeft";
import { Icon } from "react-icons-kit";
import { ReactNode } from "react";
import { setTitle } from "../helpers/setTitle";


const Details = ({ countries }: World): JSX.Element => {
  //filter country from DB
  let { countryDetails } = useParams();
  const country = countries.filter(
    (country) => country.name.common === countryDetails
  )[0];

  setTitle(country.name.common, country.flags.png);

  //currencies helper function
  const currencies: Array<string> = [];
  const currenciesObject =
    country.currencies !== undefined
      ? Object.keys(country.currencies).map((key) =>
          currencies.push(country.currencies[key].name)
        )
      : null;


  // //languages helper function
  const languages: Array<string> = [];
  const languagesObject =
    country.languages !== undefined
      ? Object.keys(country.languages)?.map((key) =>
          languages.push(country.languages[key])
        )
      : null;