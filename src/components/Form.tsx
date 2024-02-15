import { Country } from "../templates/country";
import { useEffect, useRef, useState } from "react";
import { FormProps } from "./Home";

const Form: React.FC<FormProps> = ({ allCountries, setFilteredCountries }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchState, setSearchState] = useState({
    region: "all",
    name: "",
  });
 
  const handleSearch = () => {
    const inputValue = searchInput?.current?.value
      .trim()
      .toLocaleLowerCase() as string;
    setSearchState((prevState) => ({ ...prevState, name: inputValue }));
  };

  const filterByRegion = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearchState((prevState) => ({ ...prevState, region: e.target.value }));
  };

  useEffect(() => {
    setFilteredCountries(
      allCountries.filter((country) => {
        return searchState.region == "all"
          ? country.name.common.toLocaleLowerCase().startsWith(searchState.name)
          : country.region.toLocaleLowerCase() === searchState.region &&
              country.name.common
                .toLocaleLowerCase()
                .startsWith(searchState.name);
      })
    );
  }, [searchState.name, searchState.region]);


export default Form