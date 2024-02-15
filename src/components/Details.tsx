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

       // //borders helper function
  const borders: Array<string | null> = [];
  const bordersExtraction = country.borders?.map((border) =>
    countries.map((country) => {
      if (country.cca3 === border) {
        borders.push(country.name.common);
      }
    })
  );

  return (
    <>
      <article className="grid gap-[5rem] pt-[5rem] px-[2rem] md:px-[4rem]s mx-auto mb-[4rem] max-w-[90rem]">
        <Link to={`/where-in-the-world`}>
          <button className="btn-navigate px-8 py-2 rounded-sm shadow-md font-semibold">
            <div className="grid grid-cols-2 gap-2 text-lg">
              <Icon icon={longArrowLeft} size={25} />
              <p>Back</p>
            </div>
          </button>
        </Link>
        <div className="grid grid-flow-row md:grid-flow-col md:gap-[4rem]">
        <img
            className="object-cover w-full h-auto rounded-md shadow-md max-w-[35rem]"
            src={country.flags.svg}
            alt={`${country.name.common} flag`}
          />
          <section className="lg:py-6 px-2">
            <h1 className="md:text-5xl text-3xl font-extrabold mt-[3rem] mb-[1rem] md:mt-[0rem]">
              {country.name.common}
            </h1>
            <div className="grid md:grid-cols-1 md:gap-[0rem] lg:grid-cols-2 lg:gap-[8rem] xl:gap-[10rem] text-lg ">
              <ul className="details">