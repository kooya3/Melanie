import { Country } from "../templates/country";
import { useEffect, useRef, useState } from "react";
import { FormProps } from "./Home";

const Form: React.FC<FormProps> = ({ allCountries, setFilteredCountries }) => {
  const searchInput = useRef<HTMLInputElement>(null);
  const [searchState, setSearchState] = useState({
    region: "all",
    name: "",
  });
<<<<<<< HEAD
  
  const handleSearch = () => {
    const inputValue = searchInput?.current?.value
      .trim()
      .toLocaleLowerCase() as string;
    setSearchState((prevState) => ({ ...prevState, name: inputValue }));
  };
=======
>>>>>>> 27b541974081a74b347eb61b385f402cfc570323

export default Form