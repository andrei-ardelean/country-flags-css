import './Country.css';
import Germany from '../countries/germany/Germany';
import France from '../countries/france/France';
import Afghanistan from '../countries/afghanistan/Afghanistan';

type CountryProps = {
  country: string;
}

function Country({country} : CountryProps){

  const allCountries: Record<string, () => JSX.Element> = {
    germany: Germany,
    france: France,
    afghanistan: Afghanistan,
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
