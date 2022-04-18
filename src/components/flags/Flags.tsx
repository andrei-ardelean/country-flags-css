import Country from '../country/Country';
import './Flags.css';

function Flags() {

  const countries = ["germany"];

  return (
    <div className="flags-container">
      {
        countries.map((country: string, index: number) => {
          return (
            <Country country={country} key={index} />
          );
        })
      }
    </div>
  )
}

export default Flags;
