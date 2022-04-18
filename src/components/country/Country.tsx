import './Country.css';
import Germany from '../countries/germany/Germany';

type CountryProps = {
  country: string;
}

function Country({country} : CountryProps){

  const allCountries: Record<string, (() => JSX.Element)> = {
    germany: Germany,
  }
  
  const CountryFlag = allCountries[country];

  return (
    <div className="country-container">
      <CountryFlag />
      <div className="country-title">{country}</div>
    </div>
  )
}

export default Country;
