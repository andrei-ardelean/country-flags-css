import './Header.css';
import LanguageIcon from '@material-ui/icons/Language';
import SearchBar from '../search/SearchBar';

function Header() {
  return (
    <div className="header-container">
      <div className="header-title-container">
        <LanguageIcon />
        <div className="header-title">Country Flags</div>
      </div>
      <SearchBar />
    </div>
  )
}

export default Header;
