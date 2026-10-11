import "./SearchForm.css";
import { useContext } from "react";
import { KeywordContext } from "../../contexts/KeywordContext";

function SearchForm({ handleSearch }) {
  const { keyword, setKeyword } = useContext(KeywordContext);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleSearch(keyword);
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <label htmlFor="search-form" className="search-form__label">
        <input
          onChange={handleChange}
          type="text"
          className="search-form__input"
          id="search-form"
          placeholder="Text not entered"
          value={keyword}
        />
      </label>
      <button className="search-form__button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchForm;
