import NewsCard from "../NewsCard/NewsCard";
import natureImg from "../../assets/nature.jpg";
import natureImg2 from "../../assets/nature2.jpg";
import natureImg3 from "../../assets/nature3.jpg";
import natureImg4 from "../../assets/nature4.jpg";
function NewsCardList() {
  const articleData = [
    {
      id: "1",
      tag: "Nature",
      date: "November 4, 2026",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      paragraph: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'`,
      source: "TREEHUGGER",
      image: natureImg,
    },
    {
      id: "2",
      tag: "Nature",
      date: "November 4, 2026",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      paragraph: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'`,
      source: "TREEHUGGER",
      image: natureImg2,
    },
    {
      id: "3",
      tag: "Nature",
      date: "November 4, 2026",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      paragraph: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'`,
      source: "TREEHUGGER",
      image: natureImg3,
    },
    {
      id: "4",
      tag: "Nature",
      date: "November 4, 2026",
      title: "Everyone Needs a Special 'Sit Spot' in Nature",
      paragraph: `Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...'`,
      source: "TREEHUGGER",
      image: natureImg4,
    },
  ];
  return (
    <div className="article">
      <h2 className="article__title">Search results</h2>
      <ul className="article__list">
        {articleData.map((item) => {
          return (
            <NewsCard
              key={item.id}
              tag={item.tag}
              date={item.date}
              title={item.title}
              paragraph={item.paragraph}
              image={item.image}
              source={item.source}
            />
          );
        })}
      </ul>
      <button type="button" className="article__button">
        Shows more
      </button>
    </div>
  );
}

export default NewsCardList;
