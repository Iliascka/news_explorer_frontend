import "./SearchForm.css";
import { useCallback, useState } from "react";

function SearchForm({ handleSearch }) {
  const [keyword, setKeyword] = useState("");
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
