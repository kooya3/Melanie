export type Country = {
  name: {
    common: string;
    nativeName:
      | { [key: string]: { official: string; common: string } }
      | undefined;
  };
  borders: string[] | undefined;
  subregion: string;
  region: string;
  population: number;
  capital: string[] | undefined;
  cca3: string;
  currencies: { [key: string]: { name: string; symbol: string } };
  languages: {
    [key: string]: string;
  };
  flags: {
    svg: string;
    png: string;
  };
};

export type World = {
  countries: Country[];
};
