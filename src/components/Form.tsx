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

  return (
    <>
      <form className="flex justify-between px-[2rem] md:px-[4rem] ] py-12 sm:flex-row flex-col gap-2">
        <div className=" sm:w-[45%] sm:max-w-[30rem]">
          <input
            className="w-full shadow-md px-3 py-4 rounded-[5px] "
            type="search"
            name="country"
            placeholder="Search for a country..."
            onChange={handleSearch}
            ref={searchInput}
          />
        </div>
        <div className="sm:w-[25%] sm:max-w-[15rem]">
          <select
            className="w-full shadow-md px-3 py-4 rounded-[5px] border-r-[12px] border-r-transparent"
            name="region"
            onChange={filterByRegion}
          >

export default Form