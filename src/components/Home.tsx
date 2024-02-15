import React from "react";
import { Country } from "../templates/country";
import Countries from "./Countries";
import Form from "./Form";
import Loading from "./Loading";

export type FormProps = {
  allCountries: Country[];
  setFilteredCountries: React.Dispatch<React.SetStateAction<Country[]>>;
};
export type CountriesProps = {
  countries: Country[];
  pages: number;
};

type loading = {
  loading: boolean;
  loadingError: boolean;
};

type Home = FormProps & CountriesProps & loading;

const Home: React.FC<Home> = ({
  allCountries,
  setFilteredCountries,
  countries,
  pages,
  loading,
  loadingError,
}) => {
  return (
    <>
      <Form
        allCountries={allCountries}
        setFilteredCountries={setFilteredCountries}
      />
      {loadingError ? (
        <div className="grid">
          <p className="m-auto text-xl">Loading error. Try again.</p>
        </div>
      ) : loading ? (
        <Loading />
      ) : (
        <Countries countries={countries} pages={pages} />
      )}
    </>
  );
};

export default Home;
