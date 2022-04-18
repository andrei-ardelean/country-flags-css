import './SearchBar.css';
import SearchIcon from '@material-ui/icons/Search';
import { useEffect, useState } from 'react';

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    console.log(searchValue);
  }, [searchValue]);

  return (
    <div className="search-bar-container">
      <input type="text" value={searchValue} onChange={handleChange} />
      <SearchIcon />
    </div>
  )
}

export default SearchBar;
