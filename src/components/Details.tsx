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