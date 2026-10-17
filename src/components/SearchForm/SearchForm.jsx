import "./SearchForm.css";
import { useContext, useEffect } from "react";
import { KeywordContext } from "../../contexts/KeywordContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function SearchForm({ handleSearch, setIsEmptySearch }) {
  const { keyword, setKeyword } = useContext(KeywordContext);
  const { isLoggedIn } = useContext(CurrentUserContext);

  useEffect(() => {
    if (!isLoggedIn) {
      setKeyword("");
    }
  }, [isLoggedIn, setKeyword]);

  const handleChange = (evt) => {
    setKeyword(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!keyword.trim()) {
      setIsEmptySearch(true);
      return;
    }
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
          placeholder="Please enter a keyword"
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
