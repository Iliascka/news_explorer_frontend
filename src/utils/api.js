export function getItems() {
  return new Promise((resolve, reject) =>
    resolve([
      {
        _id: "65f738423js9347sdf9394",
        title: "Some news article",
        url: "https://www.journaldugeek.com/2026/10/10/msi-aussi-a-son-portable-rtx-spark-hors-de-prix",
        urlToImage:
          "https://www.journaldugeek.com/app/uploads/2026/10/Prestige-N16-Flip-AI-1600x900.jpg",
        publishedAt: "October 7, 2026",
        description:
          "ASUS schickt seine neuen Creator-Laptops ProArt P14 (H7407) und ProArt P16 (H7607) ins Rennen. Wer es verpasst hat: Microsoft hat mit NVIDIA gestern ordentlich abgeliefert und...Zum Beitrag: ASUS: ProArt P14 und P16 mit NVIDIA RTX Spark starten in die Vorbest…",
        source: {
          name: "The Verge",
        },
      },
    ]),
  );
}

export function saveArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({
      _id: "65g0394k8guis85nf76820s8",
      url: article.url,
      publishedAt: article.publishedAt,
      description: article.description,
      title: article.tiltle,
      urlToImage: article.urlToImage,
      source: article.source,
      keyword: article.keyword,
    });
  });
}

export function deleteArticle(article) {
  return new Promise((resolve, reject) => {
    resolve({ message: "Article deleted" });
  });
}
