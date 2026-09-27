import "./SavedNews.css";

function SavedNews() {
  return (
    <section className="savedNews">
      <p className="savedNews__header">Saved articles</p>
      <h2 className="savedNews__title">Elise, you have 5 saved articles</h2>
      <p className="savedNews__footer">
        <span className="savedNews__keyword">By keywords:</span> Nature,
        Yellowstone, and 2 other
      </p>
    </section>
  );
}

export default SavedNews;
