function SearchForm() {
  return (
    <form className search-form>
      <label htmlFor="search-form" className="search-form__label">
        <input
          type="text"
          className="search-form__input"
          id="search-form"
          placeholder="Text not entered"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchForm;
